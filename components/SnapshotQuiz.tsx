"use client";

import Link from "next/link";
import { useState } from "react";
import { snapshotQuestions } from "@/lib/content";
import { submitLead } from "./LeadForm";

const max = snapshotQuestions.length * 3;

const readings = [
  {
    min: 0.75,
    title: "Mostly in tune",
    body: "Your days sound fairly steady. A pendant and a few drops of Liquilight can help you keep it that way when life gets loud.",
    kit: { href: "/shop/small-personal-kit", label: "See the Small Personal Kit" },
  },
  {
    min: 0.45,
    title: "A little off-key",
    body: "Some parts of your day are steady and some drift. Most people here start with the Small Personal Kit and retake the Snapshot in a month.",
    kit: { href: "/shop/small-personal-kit", label: "See the Small Personal Kit" },
  },
  {
    min: 0,
    title: "Ready for a retune",
    body: "Your answers suggest your days rarely settle. The Full Personal Kit brings Harmonic Energy into more of your home, and Chromatones adds daily listening.",
    kit: { href: "/shop/full-personal-kit", label: "See the Full Personal Kit" },
  },
];

export function SnapshotQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [emailState, setEmailState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const done = step >= snapshotQuestions.length;
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const reading = readings.find((r) => score / max >= r.min) ?? readings[readings.length - 1];

  if (done) {
    return (
      <div className="card !bg-white" aria-live="polite">
        <p className="eyebrow">Your Snapshot</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">{reading.title}</h2>
        <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-mist" role="img" aria-label={`Score ${score} of ${max}`}>
          <div className="h-full rounded-full bg-brass" style={{ width: `${Math.max(6, (score / max) * 100)}%` }} />
        </div>
        <p className="mt-2 text-sm text-stone">
          Baseline {score} of {max}
        </p>
        <p className="mt-6 text-lg">{reading.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={reading.kit.href} className="btn-primary">
            {reading.kit.label}
          </Link>
          <button type="button" className="btn-ghost" onClick={() => { setStep(0); setAnswers({}); setEmailState("idle"); }}>
            Start over
          </button>
        </div>

        <div className="mt-10 border-t border-midnight/10 pt-8">
          {emailState === "sent" ? (
            <p className="text-lg">Sent. We’ll remind you in 30 days to retake it and compare.</p>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setEmailState("sending");
                const email = new FormData(e.currentTarget).get("email");
                try {
                  await submitLead({ type: "snapshot", email, score, max, reading: reading.title, answers });
                  setEmailState("sent");
                } catch {
                  setEmailState("error");
                }
              }}
            >
              <label htmlFor="snap-email" className="block font-display text-xl">
                Email me my Snapshot and a 30-day reminder to compare
              </label>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input id="snap-email" name="email" type="email" required placeholder="you@example.com" className="field" />
                <button className="btn-brass shrink-0" disabled={emailState === "sending"}>
                  {emailState === "sending" ? "Sending…" : "Send it"}
                </button>
              </div>
              {emailState === "error" && <p className="mt-2 text-sm text-rosewood">That didn’t go through. Please try again.</p>}
            </form>
          )}
        </div>
        <p className="mt-8 text-xs text-stone">The Snapshot is a self-reflection tool, not a medical assessment.</p>
      </div>
    );
  }

  const q = snapshotQuestions[step];
  return (
    <div className="card !bg-white">
      <div className="flex items-center justify-between text-sm text-stone">
        <span>
          Question {step + 1} of {snapshotQuestions.length}
        </span>
        {step > 0 && (
          <button type="button" className="underline-offset-4 hover:underline" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}
      </div>
      <div className="mt-3 h-1.5 w-full rounded-full bg-mist">
        <div className="h-full rounded-full bg-brass transition-all" style={{ width: `${(step / snapshotQuestions.length) * 100}%` }} />
      </div>
      <fieldset className="mt-8">
        <legend className="font-display text-2xl leading-snug sm:text-3xl">{q.prompt}</legend>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {q.options.map((o) => (
            <button
              type="button"
              key={o.label}
              onClick={() => {
                setAnswers({ ...answers, [q.id]: o.score });
                setStep(step + 1);
              }}
              className={`rounded-xl border px-5 py-4 text-left text-lg transition-colors hover:border-midnight hover:bg-midnight/5 ${answers[q.id] === o.score ? "border-midnight bg-midnight/5" : "border-midnight/15"}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
