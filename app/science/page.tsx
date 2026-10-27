import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, DisclaimerNote, PageHero, SectionHead } from "@/components/ui";
import { carriers, CORE_CLAIM, studies, studyAreas, testers, timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "The science",
  description: "How a piece of music becomes a product: Sonic Scripts, the Sonic Formula, and the five ways Harmonic Energy is carried. Plus our testing library.",
};

const videos = [
  { id: "847135270", label: "People" },
  { id: "848516611", label: "Pets" },
  { id: "848520957", label: "Plants" },
  { id: "848519445", label: "Preservation" },
];

const deeper = [
  {
    title: "The biofield",
    body: "Every living thing gives off a faint electromagnetic field. Researchers in complementary medicine call it the biofield. Our work starts from one premise: that field has a balanced, healthy shape, and it tends to drift when life gets loud.",
  },
  {
    title: "From geometry to music",
    body: "We took measurements of how molecules bond and pulse and expressed them as ratios. Mapped onto the twelve-note musical scale, each ratio became a short phrase. We call these phrases Sonic Scripts.",
  },
  {
    title: "Layering rhythm, melody and harmony",
    body: "Sonic Scripts were layered the way a composer layers parts: rhythm first, then melody, then harmony. Performed on real instruments, they became full compositions. Together they make the Sonic Formula, and the recording is what every product carries.",
  },
  {
    title: "Why entrainment",
    body: "Entrainment is the tendency of rhythms to fall into step, like pendulum clocks on a shared wall or a crowd clapping together. Harmonic Energy is built on the idea that a field near a steady pattern tends to settle toward it. It is a premise we test, not a law of physics we claim.",
  },
];

export default function Science() {
  return (
    <>
      <PageHero
        eyebrow="The science"
        title="How we turn a song into stuff."
        intro="Your body has a rhythm. We wrote it a song. Then we spent 25 years figuring out how to fit that song into a pendant, a drop of water and a phone sticker. Here are the liner notes."
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Step one</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Write the song.</h2>
          <p className="mt-4 text-lg text-stone">
            We measured how molecules bond and pulse, turned those measurements into ratios, and set the ratios to the twelve-note scale. The
            result was short phrases we call Sonic Scripts. Performed together on real instruments, they make one composition: the Sonic Formula.
          </p>
        </div>
        <div>
          <p className="eyebrow">Step two</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Unplug the speakers.</h2>
          <p className="mt-4 text-lg text-stone">
            Songs end. Ours doesn’t have to. From 2003 on, we found ways to lock it inside objects, so it plays all day without a single
            speaker.
          </p>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="overflow-x-auto rounded-2xl border border-midnight/10 bg-white/70">
          <table className="w-full min-w-[640px] text-left">
            <caption className="sr-only">Ways Harmonic Energy is carried</caption>
            <thead className="border-b border-midnight/10 text-sm">
              <tr>
                <th className="p-4 font-bold">Method</th>
                <th className="p-4 font-bold">Since</th>
                <th className="p-4 font-bold">What it is</th>
                <th className="p-4 font-bold">Where it goes</th>
              </tr>
            </thead>
            <tbody>
              {carriers.map((c) => (
                <tr key={c.product} className="border-b border-midnight/5 last:border-0">
                  <th scope="row" className="p-4 font-display text-lg font-medium">
                    {c.product}
                  </th>
                  <td className="p-4 text-brass-deep">{c.year}</td>
                  <td className="p-4 text-stone">{c.body}</td>
                  <td className="p-4 text-stone">{c.where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-midnight py-20 text-ivory">
        <div className="container-x max-w-3xl">
          <p className="eyebrow !text-brass-light">What we claim, and what we don’t</p>
          <p className="mt-4 font-display text-3xl leading-snug sm:text-4xl">{CORE_CLAIM}</p>
          <p className="mt-6 text-lg text-ivory/75">
            We don’t claim to diagnose, treat or cure anything, and biofield balancing is not recognized by the FDA. If you have a medical
            condition, talk to your doctor and keep taking what they prescribe.
          </p>
        </div>
      </section>

      <section id="testing" className="container-x scroll-mt-20 py-20 sm:py-28">
        <SectionHead
          eyebrow="Testing"
          title="Don’t take our word for it."
          intro="Licensees and practitioners have put our products through thermal cameras, brain mapping and athletic testing. Here are their reports, exactly as written. Read them, then run your own experiment."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {studyAreas.map((a) => (
            <span key={a} className="rounded-full border border-midnight/15 bg-white/70 px-4 py-1.5 text-sm">
              {a}
            </span>
          ))}
        </div>
        <div data-stagger className="mt-10 grid gap-4 sm:grid-cols-2">
          {testers.map((t) => (
            <div key={t.name} className="card">
              <h3 className="text-xl">{t.name}</h3>
              <p className="mt-1 text-stone">{t.role}</p>
            </div>
          ))}
        </div>
        {/* TODO(client): supply the PDFs; each title then links to its report with author, date and sample size. */}
        <details className="card mt-8 !bg-white">
          <summary className="cursor-pointer font-display text-xl">See all {studies.length} reports</summary>
          <ol data-stagger className="mt-6 grid gap-x-8 gap-y-2 text-[15px] text-stone sm:grid-cols-2">
            {studies.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="w-6 shrink-0 text-right text-brass-deep">{i + 1}.</span>
                {s}
              </li>
            ))}
          </ol>
        </details>
      </section>

      <section className="bg-white/60 py-20">
        <div className="container-x">
          <SectionHead eyebrow="See it in use" title="Starring people, pets, plants and produce." />
          <div data-stagger className="mt-10 grid gap-6 sm:grid-cols-2">
            {videos.map((v) => (
              <figure key={v.id}>
                <div className="aspect-video overflow-hidden rounded-2xl bg-midnight">
                  <iframe
                    src={`https://player.vimeo.com/video/${v.id}?dnt=1`}
                    title={`Harmonic Energy with ${v.label.toLowerCase()}`}
                    loading="lazy"
                    allow="fullscreen; picture-in-picture"
                    className="h-full w-full"
                  />
                </div>
                <figcaption className="mt-2 text-sm font-bold">{v.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 sm:py-28">
        <SectionHead eyebrow="Go deeper" title="The deep cut." intro="For the nerds. We love you." />
        <div className="mt-10 divide-y divide-midnight/10 border-y border-midnight/10">
          {deeper.map((d) => (
            <details key={d.title} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl">
                {d.title}
                <span className="text-brass transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-lg text-stone">{d.body}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-mist/50 py-20">
        <div className="container-x">
          <SectionHead eyebrow="Timeline" title="Thirty years. One song. Still on tour." />
          <ol data-stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {timeline.map((t) => (
              <li key={t.year} className="border-t-2 border-brass pt-4">
                <p className="font-display text-2xl">{t.year}</p>
                <h3 className="mt-1 font-sans text-base font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-stone">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x pt-16">
        <DisclaimerNote />
      </section>

      <CtaBand
        title="Hear it for yourself."
        body="Grab a kit, give it 30 days, and compare your Snapshot before and after. Science, but make it personal."
        primary={{ href: "/shop", label: "Shop starter kits" }}
        secondary={{ href: "/snapshot", label: "Take the Snapshot" }}
      />
      <p className="sr-only">
        <Link href="/business">Licensing for manufacturers</Link>
      </p>
    </>
  );
}
