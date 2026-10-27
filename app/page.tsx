import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";
import { CtaBand, SectionHead } from "@/components/ui";
import { WaveArt } from "@/components/WaveArt";
import { brand } from "@/lib/brand";
import { carriers, kits, studies } from "@/lib/content";

const stats = [
  { value: String(brand.founded), label: "Year the music was written" },
  { value: "22", label: "Product formats" },
  { value: String(studies.length), label: "Test reports" },
  { value: "6", label: "Industries licensing it" },
];

const ritual = [
  { step: "Wear", body: "Put on the pendant. Nothing to charge, nothing to switch on." },
  { step: "Add", body: "Three to five drops of Liquilight in your shampoo, lotion or water bottle." },
  { step: "Carry", body: "Stick a Wave Rider on your phone. It goes where you go." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight text-ivory">
        <WaveArt light className="pointer-events-none absolute -right-40 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 opacity-30 sm:-right-24 sm:opacity-80" />
        <div className="container-x relative py-20 sm:py-32">
          <p className="eyebrow !text-brass-light">Sound-based wellness since {brand.founded}</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.02] sm:text-7xl">{brand.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg text-ivory/80 sm:text-xl">
            One piece of music, written in {brand.founded}, built into a pendant, a few drops and a phone tag. Carry it all day, no
            headphones needed.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/snapshot" className="btn-brass">
              Take the 2-minute Snapshot
            </Link>
            <Link href="/shop" className="btn-ghost-light">
              Shop kits
            </Link>
          </div>
          <p className="mt-8 text-sm text-ivory/60">
            Run a brand?{" "}
            <Link href="/business" className="font-bold text-ivory underline underline-offset-4 hover:text-brass-light">
              Put it in your products →
            </Link>
          </p>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-b border-midnight/10 bg-mist/50">
        <dl className="container-x grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-stone">{s.label}</dt>
              <dd className="font-display text-3xl text-midnight sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Origin */}
      <section className="container-x grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Our story" title="It started with a violin." />
          <div className="prose-copy mt-6 text-lg text-stone">
            <p>
              In the 1990s, composer and violinist Robert Anthony Aviles set out to answer one question: if the body has a natural rhythm, can
              you write it as music?
            </p>
            <p>
              The answer was <em>Rhythm of the Light</em>, released in {brand.founded}. Every product we make still carries that composition.
            </p>
          </div>
          <Link href="/about" className="mt-8 inline-block font-bold text-brass-deep underline-offset-4 hover:underline">
            Read our story →
          </Link>
        </div>
        <figure className="card relative overflow-hidden !bg-midnight p-10 text-ivory">
          <WaveArt light className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 opacity-60" />
          {/* TODO(client): replace with Robert's exact words from the original About page. */}
          <p className="relative font-display text-2xl italic leading-snug sm:text-3xl">One voice joins others, and together they make music no one can deny.</p>
          <figcaption className="relative mt-6 text-sm text-ivory/70">The idea behind the music, from Robert Anthony Aviles, composer and co-developer</figcaption>
        </figure>
      </section>

      {/* Ritual */}
      <section className="bg-white/60 py-20 sm:py-28">
        <div className="container-x">
          <SectionHead center eyebrow="How it works" title="It fits the day you already have." />
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {ritual.map((r, i) => (
              <li key={r.step} className="card !bg-ivory">
                <span className="font-display text-5xl text-brass">{i + 1}</span>
                <h3 className="mt-4 text-2xl">{r.step}</h3>
                <p className="mt-2 text-stone">{r.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Carriers */}
      <section className="container-x py-20 sm:py-28">
        <SectionHead eyebrow="The formats" title="One composition. Five forms." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {carriers.map((c) => (
            <div key={c.name} className="card flex flex-col">
              <p className="text-sm font-bold text-brass-deep">{c.year}</p>
              <h3 className="mt-2 text-xl">{c.name}</h3>
              <p className="mt-1 text-sm font-medium">{c.product}</p>
              <p className="mt-3 flex-1 text-[15px] text-stone">{c.body}</p>
            </div>
          ))}
        </div>
        <Link href="/science" className="mt-8 inline-block font-bold text-brass-deep underline-offset-4 hover:underline">
          How music becomes a product →
        </Link>
      </section>

      {/* Kits */}
      <section className="bg-mist/50 py-20 sm:py-28">
        <div className="container-x">
          <SectionHead eyebrow="Start here" title="Pick a kit. Give it a month." intro="Use it every day, then retake the Snapshot and compare." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {kits.map((k) => (
              <article key={k.slug} className="card flex flex-col !bg-ivory">
                {k.badge && <p className="eyebrow">{k.badge}</p>}
                <h3 className="mt-2 text-2xl">{k.name}</h3>
                <p className="mt-3 flex-1 text-stone">{k.short}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <BuyButton env={k.checkoutEnv} slug={k.slug} />
                  <Link href={`/shop/${k.slug}`} className="btn-ghost">
                    What’s inside
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Snapshot + Chromatones */}
      <section className="container-x grid gap-6 py-20 sm:py-28 lg:grid-cols-2">
        <div className="card flex flex-col !p-10">
          <p className="eyebrow">Snapshot</p>
          <h2 className="mt-3 text-3xl">Where are you starting from?</h2>
          <p className="mt-4 flex-1 text-lg text-stone">
            Six questions on sleep, energy, calm and focus. Two minutes. You get a baseline to measure against.
          </p>
          <Link href="/snapshot" className="btn-primary mt-8 self-start">
            Take the Snapshot
          </Link>
        </div>
        <div className="card flex flex-col !bg-rosewood !p-10 text-ivory">
          <p className="eyebrow !text-brass-light">Chromatones</p>
          <h2 className="mt-3 text-3xl">Listen daily. Get a new Wave Rider every month.</h2>
          <p className="mt-4 flex-1 text-lg text-ivory/80">
            Albums and programs for focus, workouts, the commute and winding down.
          </p>
          <Link href="/chromatones" className="btn-brass mt-8 self-start">
            Explore Chromatones
          </Link>
        </div>
      </section>

      <CtaBand
        title="Build it into your products."
        body="Apparel, cosmetics, jewelry, supplements, food. Brands have licensed Harmonic Energy for more than 20 years. Your label, our music inside."
        primary={{ href: "/business", label: "Explore licensing" }}
        secondary={{ href: "/contact?topic=licensing", label: "Book a call" }}
      />
    </>
  );
}
