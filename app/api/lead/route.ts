import { NextResponse } from "next/server";

// Receives every form on the site (newsletter, contact, kit reservations, Snapshot results).
// Set LEAD_WEBHOOK_URL to forward submissions to your CRM, email tool or a Zapier/Make hook.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot field filled in: quietly accept and drop it.
  if (body.website) return NextResponse.json({ ok: true });

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const lead = { ...body, email, receivedAt: new Date().toISOString() };
  const hook = process.env.LEAD_WEBHOOK_URL;

  if (hook) {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
  } else {
    console.info("[lead]", JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true });
}
