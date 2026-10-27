import type { Metadata } from "next";
import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";
import { DisclaimerNote, PageHero, SectionHead } from "@/components/ui";
import { chromatones } from "@/lib/content";

export const metadata: Metadata = {
  title: "Chromatones",
  description: "A library of Harmonic Energy music and programs for focus, training and winding down, with a new Wave Rider shipped every month.",
};

export default function Chromatones() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Chromatones membership"
        title="Your day, with a soundtrack."
        intro="An ever-growing library of music for every mood, plus a fresh Wave Rider in your mailbox every single month. It’s a subscription that plays you back."
      >
        <BuyButton env="NEXT_PUBLIC_CHECKOUT_CHROMATONES" slug="chromatones" label="Become a member" className="btn-brass" />
        {/* TODO(client): set NEXT_PUBLIC_MEMBER_LOGIN_URL to the member library login. */}
        {process.env.NEXT_PUBLIC_MEMBER_LOGIN_URL && (
          <a href={process.env.NEXT_PUBLIC_MEMBER_LOGIN_URL} className="btn-ghost-light">
            Member login
          </a>
        )}
      </PageHero>

      <section className="container-x py-20 sm:py-28">
        <SectionHead eyebrow="What’s included" title="Everything in the backstage pass." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chromatones.features.map((f) => (
            <div key={f.title} className="card">
              <h3 className="text-xl">{f.title}</h3>
              <p className="mt-2 text-stone">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist/50 py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Wave Riders"
              title="Collect them all."
              intro="Tiny tags that hitch a ride on the Wi-Fi, Bluetooth and phone signals already around you. A new one every month means one more device joins the band."
            />
          </div>
          <ul className="grid grid-cols-2 gap-3 self-center">
            {chromatones.riderUses.map((u) => (
              <li key={u} className="card !py-4 text-center font-medium">
                {u}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="card !bg-white !p-10 text-center">
          <h2 className="text-3xl">Plans and pricing</h2>
          {/* TODO(client): plan names, monthly/annual prices and what each includes. */}
          <p className="mx-auto mt-3 max-w-lg text-stone">Doors open soon. Grab a spot now and you’ll get founding-member pricing before anyone else.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <BuyButton env="NEXT_PUBLIC_CHECKOUT_CHROMATONES" slug="chromatones" label="Become a member" />
            <Link href="/snapshot" className="btn-ghost">
              Take the Snapshot
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <DisclaimerNote />
        </div>
      </section>
    </>
  );
}
