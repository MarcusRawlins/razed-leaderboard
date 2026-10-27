import Link from "next/link";

// Checkout goes through a Stripe Payment Link (or any hosted checkout URL) set per product in
// the environment. Until one is set, the button opens a reservation form instead.
const links: Record<string, string | undefined> = {
  NEXT_PUBLIC_CHECKOUT_SMALL_KIT: process.env.NEXT_PUBLIC_CHECKOUT_SMALL_KIT,
  NEXT_PUBLIC_CHECKOUT_FULL_KIT: process.env.NEXT_PUBLIC_CHECKOUT_FULL_KIT,
  NEXT_PUBLIC_CHECKOUT_TECH_SET: process.env.NEXT_PUBLIC_CHECKOUT_TECH_SET,
  NEXT_PUBLIC_CHECKOUT_CHROMATONES: process.env.NEXT_PUBLIC_CHECKOUT_CHROMATONES,
};

export function BuyButton({ env, slug, label = "Buy now", className = "btn-primary" }: { env: string; slug: string; label?: string; className?: string }) {
  const href = links[env];
  if (href) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={`/contact?topic=order&kit=${slug}`} className={className}>
      Reserve yours
    </Link>
  );
}
