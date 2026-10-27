import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";
import { SectionHead } from "@/components/ui";
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
  { step: "Wear it", icon: "pendant", body: "Pendant on. Done. No charging, no app, no settings to fiddle with." },
  { step: "Pour it", icon: "drop", body: "3–5 drops in your shampoo, lotion or water bottle. Your bathroom just got a soundtrack." },
  { step: "Stick it", icon: "phone", body: "A Wave Rider on the back of your phone. The music now goes everywhere your phone goes. So, everywhere." },
] as const;

function RitualIcon({ name }: { name: "pendant" | "drop" | "phone" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
      {name === "pendant" && (
        <>
          <path {...common} d="M10 6c4 10 10 14 14 14s10-4 14-14" />
          <circle {...common} cx="24" cy="31" r="9" />
          <path d="M17 31c2-4 4-4 5 0s3 4 5 0 3-4 4 0" fill="none" stroke="#B3863A" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
      {name === "drop" && (
        <>
          <path {...common} d="M24 6c7 10 12 16 12 23a12 12 0 0 1-24 0c0-7 5-13 12-23z" />
          <path d="M17 30c2-4 4-4 5 0s3 4 5 0 3-4 4 0" fill="none" stroke="#B3863A" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
      {name === "phone" && (
        <>
          <rect {...common} x="13" y="4" width="22" height="40" rx="4" />
          <circle cx="24" cy="24" r="6" fill="none" stroke="#B3863A" strokeWidth="1.8" />
          <path {...common} d="M21 39h6" />
        </>
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight text-ivory">
        <div className="glow-pulse pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-rosewood/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[44rem] w-[44rem] -translate-y-1/2 opacity-30 sm:-right-24 sm:opacity-90" aria-hidden="true">
          <div data-parallax="0.15" className="h-full w-full">
            <WaveArt light className="h-full w-full" />
          </div>
        </div>
        <div className="container-x hero-in relative pb-24 pt-20 sm:pb-36 sm:pt-32">
          <p className="eyebrow inline-flex items-center gap-2.5 !text-brass-light">
            <Equalizer /> Now playing: Rhythm of the Light ({brand.founded})
          </p>
          <h1 className="mt-5 max-w-3xl text-6xl leading-[0.98] sm:text-8xl">
            Tune your <span className="italic text-brass-light">day.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-ivory/80 sm:text-xl">
            We took a song, shrank it down, and tucked it into a pendant, a bottle of drops and a sticker for your phone. Now it plays all day.
            Silently. Everywhere you go.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/snapshot" className="btn-brass !px-7 !py-4 text-base">
              Find your frequency
            </Link>
            <Link href="/shop" className="btn-ghost-light !px-7 !py-4 text-base">
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
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/50 sm:flex" aria-hidden="true">
          Scroll
          <span className="block h-8 w-px overflow-hidden bg-ivory/20">
            <span className="float-slow block h-3 w-px bg-brass-light" />
          </span>
        </div>
      </section>

      {/* Proof strip */}
      <section data-no-reveal aria-label="Who uses and tests it" className="overflow-hidden bg-brass py-5 text-midnight-900">
        <div className="marquee flex w-max gap-12">
          {[...proof, ...proof].map((p, i) => (
            <span key={i} aria-hidden={i >= proof.length} className="flex shrink-0 items-center gap-12 font-display text-lg italic sm:text-xl">
              {p}
              <span className="h-1.5 w-1.5 rounded-full bg-midnight" aria-hidden="true" />
            </span>
          ))}
        </div>
      </section>

      {/* Origin */}
      <section className="relative overflow-hidden">
        <p
          className="pointer-events-none absolute -right-8 top-6 select-none font-display text-[10rem] leading-none text-transparent sm:text-[16rem]"
          style={{ WebkitTextStroke: "1.5px rgba(179,134,58,0.35)" }}
          aria-hidden="true"
          data-parallax="0.25"
        >
          {brand.founded}
        </p>
        <div className="container-x relative grid items-center gap-12 py-24 sm:py-32 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHead eyebrow="The origin story" title="A violinist walks into a lab…" />
            <div className="prose-copy mt-6 max-w-xl text-lg text-stone sm:text-xl">
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
          <figure className="relative overflow-hidden rounded-3xl bg-rosewood p-10 text-ivory shadow-[0_30px_60px_-30px_rgba(110,59,78,0.8)] sm:p-12">
            <WaveArt light className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 opacity-50" />
            {/* TODO(client): replace with Robert's exact words from the original About page. */}
            <span className="relative block font-display text-7xl leading-none text-brass-light" aria-hidden="true">
              “
            </span>
            <p className="relative -mt-4 font-display text-3xl italic leading-snug sm:text-4xl">One voice joins others, and together they make music no one can deny.</p>
            <figcaption className="relative mt-6 text-sm text-ivory/75">The idea behind the music, from Robert Anthony Aviles</figcaption>
          </figure>
        </div>
      </section>

      {/* Ritual */}
      <section className="relative bg-white/70 py-24 sm:py-32">
        <div className="container-x">
          <SectionHead center eyebrow="The routine" title="Zero effort. Full volume." intro="Three tiny habits. About ten seconds a day. No headphones required." />
          <ol data-stagger className="relative mt-16 grid gap-6 md:grid-cols-3">
            {ritual.map((r, i) => (
              <li key={r.step} className="card group relative !bg-ivory !p-8">
                <div className="flex items-start justify-between">
                  <span className="text-midnight transition-colors group-hover:text-rosewood">
                    <RitualIcon name={r.icon} />
                  </span>
                  <span className="font-display text-6xl leading-none text-brass/30">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-3xl">{r.step}</h3>
                <p className="mt-3 text-stone">{r.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Kinetic type */}
      <section data-no-reveal aria-hidden="true" className="overflow-hidden bg-ivory py-10 sm:py-14">
        <div data-scroll-x="0.35" className="flex w-max gap-10 whitespace-nowrap font-display text-7xl italic leading-none sm:text-9xl">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={i % 2 ? "text-transparent" : "text-midnight"} style={i % 2 ? { WebkitTextStroke: "1.5px #16153F" } : undefined}>
              Tune your day ·
            </span>
          ))}
        </div>
      </section>

      {/* Formats */}
      <section className="relative overflow-hidden bg-midnight py-24 text-ivory sm:py-32">
        <div className="glow-pulse pointer-events-none absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-brass/20 blur-3xl" aria-hidden="true" />
        <div className="container-x relative">
          <p className="eyebrow !text-brass-light">The lineup</p>
          <h2 className="mt-3 max-w-2xl text-4xl leading-tight sm:text-6xl">One song. Five ways to play it.</h2>
          <div data-stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {carriers.map((c) => (
              <div
                key={c.name}
                className="group flex flex-col rounded-2xl border border-ivory/10 bg-ivory/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brass/60 hover:bg-ivory/[0.08]"
              >
                <p className="font-display text-4xl text-brass-light">{c.year}</p>
                <h3 className="mt-4 text-2xl">{c.name}</h3>
                <p className="mt-1 text-sm font-medium text-ivory/60">{c.product}</p>
                <p className="mt-4 flex-1 text-[15px] text-ivory/80">{c.body}</p>
              </div>
            ))}
          </div>
          <Link href="/science" className="mt-10 inline-block font-bold text-brass-light underline-offset-4 hover:underline">
            How we turn a song into stuff →
          </Link>
        </div>
      </section>

      {/* Kits */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Start here" title="Pick your starter pack." intro="Use it every day for 30 days. Retake the Snapshot. Compare notes." />
          <div data-stagger className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
            {kits.map((k, i) => {
              const star = i === 0;
              return (
                <article
                  key={k.slug}
                  className={`relative flex flex-col overflow-hidden rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                    star ? "bg-midnight text-ivory shadow-[0_30px_60px_-30px_rgba(22,21,63,0.9)] lg:-my-4 lg:py-12" : "border border-midnight/10 bg-white"
                  }`}
                >
                  {star && <WaveArt light className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-50" />}
                  {k.badge && <p className={`eyebrow relative ${star ? "!text-brass-light" : ""}`}>{k.badge}</p>}
                  <h3 className="relative mt-3 text-3xl">{k.name}</h3>
                  <p className={`relative mt-3 flex-1 text-lg ${star ? "text-ivory/80" : "text-stone"}`}>{k.short}</p>
                  <div className="relative mt-8 flex flex-wrap gap-3">
                    <BuyButton env={k.checkoutEnv} slug={k.slug} className={star ? "btn-brass" : "btn-primary"} />
                    <Link href={`/shop/${k.slug}`} className={star ? "btn-ghost-light" : "btn-ghost"}>
                      What’s inside
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Snapshot + Chromatones */}
      <section className="container-x pb-24 sm:pb-32">
        <div data-stagger className="grid gap-6 lg:grid-cols-2">
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-brass p-10 text-midnight-900 sm:p-12">
            <p className="eyebrow !text-midnight">The Snapshot</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">What’s your frequency?</h2>
            <p className="mt-4 flex-1 text-lg text-midnight/80">Six questions. Two minutes. Zero judgment. Find out if your day is in tune or overdue for a tune-up.</p>
            <Link href="/snapshot" className="btn-primary mt-8 self-start">
              Find your frequency
            </Link>
          </div>
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-rosewood p-10 text-ivory sm:p-12">
            <WaveArt light className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 opacity-50" />
            <p className="eyebrow relative inline-flex items-center gap-2.5 !text-brass-light">
              <Equalizer /> Chromatones
            </p>
            <h2 className="relative mt-3 text-4xl sm:text-5xl">Your daily soundtrack.</h2>
            <p className="relative mt-4 flex-1 text-lg text-ivory/80">
              Albums and programs for workouts, deep focus, road trips and lights-out. Plus a fresh Wave Rider in your mailbox every month.
            </p>
            <Link href="/chromatones" className="btn-brass relative mt-8 self-start">
              Join Chromatones
            </Link>
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="relative overflow-hidden bg-midnight py-24 text-ivory sm:py-32">
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 opacity-30 sm:opacity-60" aria-hidden="true">
          <div data-parallax="0.12" className="h-full w-full">
            <WaveArt light className="h-full w-full" />
          </div>
        </div>
        <div className="container-x relative max-w-3xl">
          <p className="eyebrow !text-brass-light">For brands</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-6xl">Your product could have a soundtrack.</h2>
          <p className="mt-6 max-w-xl text-lg text-ivory/80 sm:text-xl">
            Shampoo. T-shirts. Jewelry. Supplements. For 20+ years, brands have built our song into what they make. Your label on the front. Our
            music inside.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/business" className="btn-brass">
              Put a song in it
            </Link>
            <Link href="/contact?topic=licensing" className="btn-ghost-light">
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
