import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { industries, partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "License Harmonic Energy",
  description: "Add Harmonic Energy to apparel, cosmetics, jewelry, food, supplements and home products under your own brand. Samples, carrier selection and licensing by territory.",
};

const steps = [
  { title: "Tell us what you make.", body: "A short call to look at your product, materials and process." },
  { title: "We pick the carrier.", body: "Liquilight for anything liquid or dyed, cells for anything solid, riders for electronics." },
  { title: "You run a sample.", body: "We supply a test batch, and you produce a small run on your own line." },
  { title: "Go to market.", body: "License terms by territory, with the option to name the technology on pack or keep it in the background." },
];

const reasons = [
  { title: "A story customers can hear", body: "Your product carries a piece of music with a 1998 origin and a violinist behind it. That’s a story, not a spec sheet." },
  { title: "Fits your existing line", body: "Drops, cells and finishes slot into production you already run, from a one-person studio to a factory." },
  { title: "Your brand stays first", body: "We stay behind your label. You decide how much to say about the technology." },
];

export default function Business() {
  return (
    <>
      <PageHero
        dark
        eyebrow="For business"
        title="Your product, with music inside."
        intro="For more than two decades, companies have added Harmonic Energy to things they already make: fabric dye, labels, shampoo, supplements, jewelry, enamel and water. Your customers get a product that does one more thing. You keep the credit."
      >
        <Link href="/contact?topic=licensing" className="btn-brass">
          Book a licensing call
        </Link>
        <Link href="/shop/tech-sample-set" className="btn-ghost-light">
          Order the Tech Sample Set
        </Link>
      </PageHero>

      <section className="container-x py-20 sm:py-28">
        <SectionHead eyebrow="Why brands add it" title="One more reason to choose yours." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="card">
              <h3 className="text-2xl">{r.title}</h3>
              <p className="mt-2 text-stone">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/60 py-20 sm:py-28">
        <div className="container-x">
          <SectionHead eyebrow="What it fits" title="Six industries, one pattern." intro="From artisans to factories, here’s where partners build it in." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <div key={i.name} className="card !bg-ivory">
                <h3 className="text-xl">{i.name}</h3>
                <p className="mt-2 text-stone">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 sm:py-28">
        <SectionHead eyebrow="How it works" title="From first call to first run." />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative card">
              <span className="font-display text-5xl text-brass">{i + 1}</span>
              <h3 className="mt-3 text-xl">{s.title}</h3>
              <p className="mt-2 text-stone">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-mist/50 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Who’s already doing it" title="Partners around the world." />
            {/* TODO(client): two or three short partner stories with permission to name them. */}
            <div className="mt-8 space-y-4">
              {partners.map((p) => (
                <div key={p.name} className="card !bg-ivory">
                  <h3 className="text-xl">{p.name}</h3>
                  <p className="mt-1 text-stone">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Pricing" title="Less than you’d expect." />
            {/* TODO(client): replace with a real starting range if you’re happy to publish one. */}
            <p className="mt-6 text-lg text-stone">
              Licensing is priced by product, volume and territory, and it’s designed to fit artisan budgets as well as factory runs. We’ll give
              you a clear number after the first call.
            </p>
            <div id="distribution" className="mt-10 scroll-mt-24">
              <h3 className="text-2xl">Distribution</h3>
              {/* TODO(client): the original Distribution page couldn't be read; merge its content here. */}
              <p className="mt-3 text-lg text-stone">
                We work with distributors who want to carry Harmonic Energy products or represent licensing in their region. Tell us your
                territory and channels.
              </p>
              <Link href="/contact?topic=licensing" className="mt-4 inline-block font-bold text-brass-deep underline-offset-4 hover:underline">
                Talk to us about distribution →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with a sample."
        body="The Tech Sample Set holds all 22 carrier formats, so your team can test them on your own materials before you commit."
        primary={{ href: "/contact?topic=licensing", label: "Book a licensing call" }}
        secondary={{ href: "/shop/tech-sample-set", label: "See the sample set" }}
      />
    </>
  );
}
