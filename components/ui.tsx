import Link from "next/link";
import { DISCLAIMER } from "@/lib/content";
import { WaveArt, WaveRule } from "./WaveArt";

export function PageHero({ eyebrow, title, intro, children, dark = false }: { eyebrow: string; title: string; intro?: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-midnight text-ivory" : ""}`}>
      <WaveArt light={dark} className="pointer-events-none absolute -right-24 -top-16 h-[28rem] w-[28rem] opacity-30 sm:-right-10 sm:opacity-70" />
      <div className="container-x relative py-16 sm:py-24">
        <p className={`eyebrow ${dark ? "!text-brass-light" : ""}`}>{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">{title}</h1>
        {intro && <p className={`mt-6 max-w-2xl text-lg sm:text-xl ${dark ? "text-ivory/80" : "text-stone"}`}>{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, center = false }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{title}</h2>
      <WaveRule className={`mt-4 ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-4 text-lg text-stone">{intro}</p>}
    </div>
  );
}

export function CtaBand({ title, body, primary, secondary }: { title: string; body: string; primary: { href: string; label: string }; secondary?: { href: string; label: string } }) {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl bg-midnight px-6 py-14 text-ivory sm:px-14">
        <WaveArt light className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 opacity-60" />
        <div className="relative max-w-xl">
          <h2 className="text-3xl leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-ivory/80">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primary.href} className="btn-brass">
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href} className="btn-ghost-light">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DisclaimerNote() {
  return <p className="rounded-2xl border border-midnight/10 bg-mist/60 p-5 text-sm leading-relaxed text-stone">{DISCLAIMER}</p>;
}
