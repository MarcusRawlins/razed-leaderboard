import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuyButton } from "@/components/BuyButton";
import { DisclaimerNote } from "@/components/ui";
import { WaveArt } from "@/components/WaveArt";
import { brand } from "@/lib/brand";
import { kits } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return kits.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const kit = kits.find((k) => k.slug === slug);
  if (!kit) return {};
  return { title: kit.name, description: kit.short };
}

export default async function KitPage({ params }: Props) {
  const { slug } = await params;
  const kit = kits.find((k) => k.slug === slug);
  if (!kit) notFound();
  const others = kits.filter((k) => k.slug !== kit.slug);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: kit.name,
    description: kit.description,
    brand: { "@type": "Brand", name: brand.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <section className="container-x grid gap-12 py-12 sm:py-20 lg:grid-cols-2">
        {/* TODO(client): product photography. The drawn art stands in until then. */}
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-midnight">
          <WaveArt light className="h-full w-full p-8" />
          <span className="absolute bottom-6 left-6 rounded-full bg-ivory/10 px-4 py-1.5 text-sm text-ivory/80">{kit.name}</span>
        </div>
        <div>
          <nav aria-label="Breadcrumb" className="text-sm text-stone">
            <Link href="/shop" className="hover:text-midnight">
              Shop
            </Link>{" "}
            / {kit.name}
          </nav>
          {kit.badge && <p className="eyebrow mt-6">{kit.badge}</p>}
          <h1 className="mt-2 text-4xl sm:text-5xl">{kit.name}</h1>
          <p className="mt-4 text-lg text-stone">{kit.description}</p>
          <p className="mt-6 font-display text-3xl">{kit.price ?? "Launch pricing soon"}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BuyButton env={kit.checkoutEnv} slug={kit.slug} label="Buy now" />
            <Link href="/snapshot" className="btn-ghost">
              Take the Snapshot first
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone">Best for: {kit.forWhom}</p>

          <div className="mt-10 border-t border-midnight/10 pt-8">
            <h2 className="text-2xl">What’s inside</h2>
            <ul className="mt-4 space-y-2.5">
              {kit.contents.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 border-t border-midnight/10 pt-8">
            <h2 className="text-2xl">How to use it</h2>
            <ul className="mt-4 space-y-2.5">
              {kit.howToUse.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x pb-12">
        <DisclaimerNote />
      </section>

      <section className="container-x pb-24">
        <h2 className="text-3xl">Other kits</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((k) => (
            <Link key={k.slug} href={`/shop/${k.slug}`} className="card group !bg-white hover:border-midnight/30">
              <h3 className="text-2xl group-hover:text-brass-deep">{k.name}</h3>
              <p className="mt-2 text-stone">{k.short}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
