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
        title="Music for every part of your day."
        intro="A library of music to listen to, plus a new Wave Rider in the mail every month."
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
        <SectionHead eyebrow="What’s included" title="What members get." />
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
              title="One for every device."
              intro="A small tag that rides the Wi-Fi, Bluetooth and phone signals around you. Members get a new one each month for another device."
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
          <p className="mx-auto mt-3 max-w-lg text-stone">Membership plans open with the new site. Reserve a spot and we’ll send you founding-member pricing first.</p>
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
