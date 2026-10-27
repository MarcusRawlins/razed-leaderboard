import type { Metadata } from "next";
import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";
import { CtaBand, DisclaimerNote, PageHero, SectionHead } from "@/components/ui";
import { kits, naming, partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shop starter kits",
  description: "Sample kits with a Harmonic Energy pendant, Liquilight drops and a phone Wave Rider. Start small and notice what changes in a month.",
};

export default function Shop() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Start small. Wear it, add it, carry it."
        intro="You don’t need to understand the method to try it. Pick the kit that fits how you live, use it daily, and see what changes over a month."
      />

      <section className="container-x pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {kits.map((k) => (
            <article key={k.slug} className="card flex flex-col !bg-white">
              {k.badge && <p className="eyebrow">{k.badge}</p>}
              <h2 className="mt-2 text-3xl">{k.name}</h2>
              <p className="mt-3 text-stone">{k.description}</p>
              <ul className="mt-5 flex-1 space-y-2 text-[15px]">
                {k.contents.slice(0, 4).map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                    {c}
                  </li>
                ))}
                {k.contents.length > 4 && <li className="pl-3.5 text-stone">and {k.contents.length - 4} more</li>}
              </ul>
              <p className="mt-6 font-display text-2xl">{k.price ?? "Launch pricing soon"}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <BuyButton env={k.checkoutEnv} slug={k.slug} />
                <Link href={`/shop/${k.slug}`} className="btn-ghost">
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-stone">
          Not sure where to start?{" "}
          <Link href="/snapshot" className="font-bold text-brass-deep underline-offset-4 hover:underline">
            Take the 2-minute Snapshot
          </Link>{" "}
          and we’ll suggest one.
        </p>
      </section>

      <section className="bg-white/60 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Reading the labels" title="Product names, decoded." intro="Every product name tells you who it’s for and how it carries the pattern." />
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 self-center">
            {naming.map((n) => (
              <div key={n.code} className="contents">
                <dt className="font-display text-2xl text-brass-deep">{n.code}</dt>
                <dd className="self-center text-lg">{n.meaning}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="partners" className="container-x scroll-mt-20 py-20">
        <SectionHead
          eyebrow="Where else to buy"
          title="Find it inside partner brands."
          intro="Some partners build Harmonic Energy into their own products under their own names. Their stores are independent, and purchases there are between you and them."
        />
        {/* TODO(client): add each partner's store link and logo. */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {partners.map((p) => (
            <div key={p.name} className="card">
              <h3 className="text-2xl">{p.name}</h3>
              <p className="mt-2 text-stone">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-4">
        <DisclaimerNote />
      </section>

      <CtaBand
        title="Want it every day, not just when you remember?"
        body="Chromatones adds a library of music and programs, with a new Wave Rider in the mail every month."
        primary={{ href: "/chromatones", label: "Explore Chromatones" }}
      />
    </>
  );
}
