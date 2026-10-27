import { brand } from "@/lib/brand";

// Starter legal copy. TODO(client): have counsel review and fill in the bracketed details before launch.
export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: { h: string; p: string }[] }) {
  return (
    <section className="container-x max-w-3xl py-16 sm:py-24">
      <p className="eyebrow">{brand.name}</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">{title}</h1>
      <p className="mt-3 text-sm text-stone">Last updated {updated}</p>
      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="font-sans text-lg font-bold">{s.h}</h2>
            <p className="mt-2 text-stone">{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
