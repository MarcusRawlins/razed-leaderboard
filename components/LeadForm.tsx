"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

async function submit(payload: Record<string, unknown>) {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Request failed");
}

function useSubmit() {
  const [status, setStatus] = useState<Status>("idle");
  async function send(payload: Record<string, unknown>) {
    setStatus("sending");
    try {
      await submit(payload);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  return { status, send };
}

const formData = (form: HTMLFormElement) => Object.fromEntries(new FormData(form).entries());

export function NewsletterForm({ source = "footer" }: { source?: string }) {
  const { status, send } = useSubmit();
  if (status === "sent") return <p className="text-sm text-brass-light">You’re on the list. The first note arrives soon.</p>;
  return (
    <form
      className="flex flex-col gap-2 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        send({ type: "newsletter", source, ...formData(e.currentTarget) });
      }}
    >
      <label htmlFor={`nl-${source}`} className="sr-only">
        Email address
      </label>
      <input id={`nl-${source}`} name="email" type="email" required placeholder="you@example.com" className="field !bg-ivory/95" />
      <button className="btn-brass shrink-0" disabled={status === "sending"}>
        {status === "sending" ? "Joining…" : "Join"}
      </button>
      {status === "error" && <p className="text-sm text-brass-light">That didn’t go through. Please try again.</p>}
    </form>
  );
}

const productTypes = ["Apparel", "Cosmetics and personal care", "Jewelry", "Food and beverage", "Supplements", "Home and pet", "Other"];

export function ContactForm({ initialTopic = "customer", kit }: { initialTopic?: string; kit?: string }) {
  const [topic, setTopic] = useState(initialTopic === "licensing" ? "licensing" : initialTopic === "order" ? "order" : "customer");
  const { status, send } = useSubmit();

  if (status === "sent") {
    return (
      <div className="card">
        <h2 className="text-2xl">Thank you. We’ve got it.</h2>
        <p className="mt-2 text-stone">A real person will reply within two business days.</p>
      </div>
    );
  }

  const tabs = [
    { id: "customer", label: "I’m a customer" },
    { id: "order", label: "Reserve a kit" },
    { id: "licensing", label: "I make products" },
  ];

  return (
    <form
      className="card space-y-5 !bg-white"
      onSubmit={(e) => {
        e.preventDefault();
        send({ type: "contact", topic, ...formData(e.currentTarget) });
      }}
    >
      <fieldset>
        <legend className="mb-3 text-sm font-bold">What can we help with?</legend>
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setTopic(t.id)}
              aria-pressed={topic === t.id}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${topic === t.id ? "border-midnight bg-midnight text-ivory" : "border-midnight/20 hover:border-midnight"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        {topic === "licensing" && (
          <>
            <Field label="Company" name="company" required autoComplete="organization" />
            <div>
              <label htmlFor="productType" className="mb-1.5 block text-sm font-bold">
                What do you make?
              </label>
              <select id="productType" name="productType" className="field" defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                {productTypes.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
          </>
        )}
        {topic === "order" && (
          <div className="sm:col-span-2">
            <label htmlFor="kit" className="mb-1.5 block text-sm font-bold">
              Which kit?
            </label>
            <select id="kit" name="kit" className="field" defaultValue={kit ?? "small-personal-kit"}>
              <option value="small-personal-kit">Small Personal Kit</option>
              <option value="full-personal-kit">Full Personal Kit</option>
              <option value="tech-sample-set">Tech Sample Set</option>
              <option value="chromatones">Chromatones membership</option>
            </select>
          </div>
        )}
        {topic === "customer" && <Field label="Order number (optional)" name="order" />}
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold">
          Message
        </label>
        <textarea id="message" name="message" rows={5} className="field" required={topic !== "order"} />
      </div>
      {/* Honeypot: real people never see or fill this. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4">
        <button className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : topic === "licensing" ? "Request a call" : topic === "order" ? "Reserve my kit" : "Send"}
        </button>
        <p className="text-sm text-stone">We reply within two business days.</p>
      </div>
      {status === "error" && <p className="text-sm text-rosewood">That didn’t go through. Please try again.</p>}
    </form>
  );
}

function Field({ label, name, type = "text", required, autoComplete }: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-bold">
        {label}
      </label>
      <input id={name} name={name} type={type} required={required} autoComplete={autoComplete} className="field" />
    </div>
  );
}
