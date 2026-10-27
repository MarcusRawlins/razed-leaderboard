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
        <h1 className="mt-4 text-4xl sm:text-6xl">Six questions. Two minutes.</h1>
        <p className="mt-6 text-lg text-stone">
          Most of us only notice our balance when it’s gone, like sleep: you don’t think about it until a bad night. Answer honestly about how
          your days feel right now. You’ll get a simple reading of where your baseline sits and a suggested place to start.
        </p>
        <p className="mt-4 text-lg text-stone">Retake it in a month to see what’s changed.</p>
      </div>
      <SnapshotQuiz />
    </section>
  );
}
