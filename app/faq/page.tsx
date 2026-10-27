import type { Metadata } from "next";
import { CtaBand, DisclaimerNote, PageHero } from "@/components/ui";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "What Harmonic Energy is, what it does and doesn’t do, how to use the kits, and how brands license it.",
};

export default function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero eyebrow="FAQ" title="Questions, answered plainly." />
      <section className="container-x pb-12">
        <div className="max-w-3xl divide-y divide-midnight/10 border-y border-midnight/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl sm:text-2xl">
                {f.q}
                <span className="mt-1 text-brass transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-4 text-lg text-stone">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 max-w-3xl">
          <DisclaimerNote />
        </div>
      </section>
      <CtaBand
        title="Still wondering?"
        body="Send us your question. A real person replies within two business days."
        primary={{ href: "/contact", label: "Ask us" }}
        secondary={{ href: "/snapshot", label: "Take the Snapshot" }}
      />
    </>
  );
}
