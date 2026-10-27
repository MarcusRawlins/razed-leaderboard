import type { Metadata } from "next";
import { SnapshotQuiz } from "@/components/SnapshotQuiz";

export const metadata: Metadata = {
  title: "Snapshot: find your baseline in six questions",
  description: "A two-minute check-in on sleep, energy, calm and focus. Get your baseline, a suggested place to start, and a reminder to compare in 30 days.",
};

export default function Snapshot() {
  return (
    <section className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <p className="eyebrow">Snapshot</p>
        <h1 className="mt-4 text-4xl sm:text-6xl">What’s your frequency?</h1>
        <p className="mt-6 text-lg text-stone">
          Balance is like sleep: you only notice it when it’s gone. Six honest questions, two minutes, and you’ll know whether your day is
          in tune or overdue for a tune-up.
        </p>
        <p className="mt-4 text-lg text-stone">Then come back in 30 days for the rematch.</p>
      </div>
      <SnapshotQuiz />
    </section>
  );
}
