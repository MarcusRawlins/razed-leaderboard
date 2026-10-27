import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";
import { CtaBand, SectionHead } from "@/components/ui";
import { Equalizer, WaveArt } from "@/components/WaveArt";
import { brand } from "@/lib/brand";
import { carriers, kits } from "@/lib/content";

// Every line here comes from the original site: licensees, partners, test reports and customer types.
const proof = [
  "Brain-mapped with an MMA champion",
  "Tested with a kickboxing champion",
  "Licensed across North America by Life Armor Technologies",
  "Built into NanoVibe products",
  "Used by healthcare pros, schools, gyms and households",
  "Inside apparel, cosmetics, jewelry and supplements",
  "Playing since 1998",
];

const ritual = [
  { step: "Wear it", body: "Pendant on. Done. No charging, no app, no settings to fiddle with." },
  { step: "Pour it", body: "3–5 drops in your shampoo, lotion or water bottle. Your bathroom just got a soundtrack." },
  { step: "Stick it", body: "A Wave Rider on the back of your phone. The music now goes everywhere your phone goes. So, everywhere." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight text-ivory">
        <WaveArt light className="pointer-events-none absolute -right-40 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 opacity-30 sm:-right-24 sm:opacity-80" />
        <div className="container-x hero-in relative py-20 sm:py-32">
          <p className="eyebrow inline-flex items-center gap-2.5 !text-brass-light">
            <Equalizer /> Now playing: Rhythm of the Light ({brand.founded})
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.02] sm:text-7xl">{brand.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg text-ivory/80 sm:text-xl">
            We took a song, shrank it down, and tucked it into a pendant, a bottle of drops and a sticker for your phone. Now it plays all
            day. Silently. Everywhere you go.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/snapshot" className="btn-brass">
              Find your frequency
            </Link>
            <Link href="/shop" className="btn-ghost-light">
              Shop the kits
            </Link>
          </div>
          <p className="mt-8 text-sm text-ivory/60">
            Make stuff?{" "}
            <Link href="/business" className="font-bold text-ivory underline underline-offset-4 hover:text-brass-light">
              Put a song in it →
            </Link>
          </p>
        </div>
      </section>

      {/* Proof strip */}
      <section aria-label="Who uses and tests it" className="overflow-hidden border-b border-midnight/10 bg-mist/60 py-5">
        <div className="marquee flex w-max gap-12">
          {[...proof, ...proof].map((p, i) => (
            <span key={i} aria-hidden={i >= proof.length} className="flex shrink-0 items-center gap-12 font-display text-lg italic text-midnight sm:text-xl">
              {p}
              <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
            </span>
          ))}
        </div>
      </section>

      {/* Origin */}
      <section className="container-x grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="The origin story" title="A violinist walks into a lab…" />
          <div className="prose-copy mt-6 text-lg text-stone">
            <p>
              Mid-1990s. Composer Robert Anthony Aviles picks up his 7-string electric violin and asks a gloriously odd question: if your body
              has a natural rhythm, can you write it down as a song?
            </p>
            <p>
              Turns out you can. <em>Rhythm of the Light</em> dropped in {brand.founded}, and every single thing we make still carries that
              track.
            </p>
          </div>
          <Link href="/about" className="mt-8 inline-block font-bold text-brass-deep underline-offset-4 hover:underline">
            Hear the whole story →
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
          <SectionHead center eyebrow="The routine" title="Zero effort. Full volume." intro="Three tiny habits. About ten seconds a day. No headphones required." />
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
        <SectionHead eyebrow="The lineup" title="One song. Five ways to play it." />
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
          How we turn a song into stuff →
        </Link>
      </section>

      {/* Kits */}
      <section className="bg-mist/50 py-20 sm:py-28">
        <div className="container-x">
          <SectionHead eyebrow="Start here" title="Pick your starter pack." intro="Use it every day for 30 days. Retake the Snapshot. Compare notes." />
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
          <p className="eyebrow">The Snapshot</p>
          <h2 className="mt-3 text-3xl">What’s your frequency?</h2>
          <p className="mt-4 flex-1 text-lg text-stone">
            Six questions. Two minutes. Zero judgment. Find out if your day is in tune or overdue for a tune-up.
          </p>
          <Link href="/snapshot" className="btn-primary mt-8 self-start">
            Find your frequency
          </Link>
        </div>
        <div className="card flex flex-col !bg-rosewood !p-10 text-ivory">
          <p className="eyebrow !text-brass-light">Chromatones</p>
          <h2 className="mt-3 text-3xl">Your daily soundtrack, plus new gear every month.</h2>
          <p className="mt-4 flex-1 text-lg text-ivory/80">
            Albums and programs for workouts, deep focus, road trips and lights-out. And a fresh Wave Rider in your mailbox every month.
          </p>
          <Link href="/chromatones" className="btn-brass mt-8 self-start">
            Join Chromatones
          </Link>
        </div>
      </section>

      <CtaBand
        title="Your product could have a soundtrack."
        body="Shampoo. T-shirts. Jewelry. Supplements. For 20+ years, brands have built our song into what they make. Your label on the front. Our music inside."
        primary={{ href: "/business", label: "Put a song in it" }}
        secondary={{ href: "/contact?topic=licensing", label: "Book a call" }}
      />
    </>
  );
}
