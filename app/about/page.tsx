import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { brand } from "@/lib/brand";
import { timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our story",
  description: `How a 7-string violin and a simple question became ${brand.name}: the music, the people, and ${new Date().getFullYear() - brand.founded} years of carrying it.`,
};

export default function About() {
  return (
    <>
      <PageHero eyebrow="Our story" title="It started with a violin." />

      <section className="container-x grid gap-12 pb-20 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="The idea" title="Everything is energy in motion." />
          <p className="mt-6 text-lg text-stone">
            It’s an old idea: everything, down to the atom, is energy in motion, and living things fall into step with the rhythms around them.
            We wanted to make that idea useful.
          </p>
          <p className="mt-4 text-lg text-stone">
            We pictured a belt, a T-shirt, a pendant and a bottle of shampoo, each carrying the same music. Then we spent two decades building
            them.
          </p>
        </div>
        <div>
          <SectionHead eyebrow="The music" title="First, an album." />
          <p className="mt-6 text-lg text-stone">
            Co-developer Robert Anthony Aviles, a composer on 7-string electric violin, turned the measurements into music worth listening to.{" "}
            <em>Rhythm of the Light</em> came out in {brand.founded}, after an early trial in a hospital emergency department.
          </p>
          <p className="mt-4 text-lg text-stone">Here he plays one of those early pieces, Tibet, live.</p>
        </div>
      </section>

      <section className="container-x pb-20">
        {/* TODO(client): Vimeo ID for the "Tibet" live performance (not captured from the old page). */}
        {process.env.NEXT_PUBLIC_TIBET_VIDEO_ID ? (
          <div className="aspect-video overflow-hidden rounded-3xl bg-midnight">
            <iframe
              src={`https://player.vimeo.com/video/${process.env.NEXT_PUBLIC_TIBET_VIDEO_ID}?dnt=1`}
              title="Tibet, performed live by Robert Anthony Aviles"
              loading="lazy"
              allow="fullscreen; picture-in-picture"
              className="h-full w-full"
            />
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center rounded-3xl bg-midnight p-8 text-center text-ivory/70">
            <p className="font-display text-2xl italic">Tibet, performed live by Robert Anthony Aviles</p>
          </div>
        )}
      </section>

      <section className="bg-midnight py-20 text-ivory">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-brass-light">Our mission</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Help people stay steady in a loud, always-on world.</h2>
          </div>
          <div className="space-y-4 text-lg text-ivory/80">
            <p>
              Today most of our work happens behind other people’s brands, in products made by companies, clinics and households around the world.
              We license the technology for consumables, cosmetics, apparel and jewelry, and we sell our own kits and the Chromatones membership
              directly.
            </p>
            <p className="font-display text-2xl italic text-ivory">{brand.line}</p>
          </div>
        </div>
      </section>

      <section className="container-x py-20 sm:py-28">
        <SectionHead eyebrow="Timeline" title="How the music learned to travel." />
        <ol className="mt-12 space-y-8 border-l-2 border-brass pl-8">
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[2.6rem] top-2 h-4 w-4 rounded-full border-2 border-brass bg-ivory" aria-hidden="true" />
              <p className="font-display text-2xl">{t.year}</p>
              <h3 className="font-sans text-lg font-bold">{t.title}</h3>
              <p className="mt-1 text-stone">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TODO(client): team section with names, roles, photos and where the company is based. */}

      <CtaBand
        title="Hear it for yourself."
        body="Chromatones members get the full library of albums and programs, with a Wave Rider every month."
        primary={{ href: "/chromatones", label: "Explore Chromatones" }}
        secondary={{ href: "/shop", label: "Shop kits" }}
      />
    </>
  );
}
