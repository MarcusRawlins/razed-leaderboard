import Link from "next/link";
import { brand } from "@/lib/brand";
import { DISCLAIMER } from "@/lib/content";
import { Logo } from "./Logo";
import { NewsletterForm } from "./LeadForm";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All kits" },
      { href: "/shop/small-personal-kit", label: "Small Personal Kit" },
      { href: "/shop/full-personal-kit", label: "Full Personal Kit" },
      { href: "/chromatones", label: "Chromatones" },
      { href: "/snapshot", label: "Snapshot" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/science", label: "The science" },
      { href: "/science#testing", label: "Testing" },
      { href: "/about", label: "Our story" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "/business", label: "Licensing" },
      { href: "/shop/tech-sample-set", label: "Tech Sample Set" },
      { href: "/business#distribution", label: "Distribution" },
      { href: "/contact?topic=licensing", label: "Book a call" },
    ],
  },
];

export function Footer() {
  const { email, phone, address } = brand.contact;
  return (
    <footer className="bg-midnight text-ivory">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm font-display text-xl italic text-ivory/85">{brand.line}</p>
          <div className="mt-8 max-w-sm">
            <p className="mb-3 text-sm font-bold">New music, rituals and offers. Twice a month.</p>
            <NewsletterForm />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-brass-light">{col.title}</h2>
              <ul className="mt-4 space-y-2.5 text-[15px] text-ivory/80">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-ivory">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-brass-light">Contact</h2>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ivory/80">
              <li>
                <Link href="/contact" className="hover:text-ivory">
                  Send a message
                </Link>
              </li>
              {email && (
                <li>
                  <a href={`mailto:${email}`} className="hover:text-ivory">
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li>
                  <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="hover:text-ivory">
                    {phone}
                  </a>
                </li>
              )}
              {address && <li>{address}</li>}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-x py-8 text-xs leading-relaxed text-ivory/55">
          <p className="max-w-4xl">{DISCLAIMER}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <span>
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </span>
            <Link href="/privacy" className="hover:text-ivory">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ivory">
              Terms
            </Link>
            <Link href="/shipping-returns" className="hover:text-ivory">
              Shipping and returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
