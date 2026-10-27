// Single source of truth for the brand. Change the name here and it changes everywhere.

export const brand = {
  name: "Sonaura",
  tagline: "Tune your day.",
  line: "Helping people worldwide, one person at a time, since 1998.",
  description:
    "Sonaura turns an original 1998 composition into pendants, drops and signal riders you can carry, and licenses it to brands that want to build it into their products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sonaura.com",
  founded: 1998,
  // TODO(client): supply real contact details. Empty values are hidden on the site.
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "",
    responseTime: "We reply within two business days.",
  },
} as const;

export const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/chromatones", label: "Chromatones" },
  { href: "/science", label: "The science" },
  { href: "/business", label: "For business" },
  { href: "/about", label: "Our story" },
] as const;
