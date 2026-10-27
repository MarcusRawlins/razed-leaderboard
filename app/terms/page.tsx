import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { DISCLAIMER } from "@/lib/content";

export const metadata: Metadata = { title: "Terms of use", robots: { index: false } };

export default function Terms() {
  return (
    <LegalPage
      title="Terms of use"
      updated="[launch date]"
      sections={[
        { h: "Using this site", p: "By using this site you agree to these terms. If you don’t agree, please don’t use it." },
        { h: "Health information", p: DISCLAIMER },
        { h: "Orders and memberships", p: "Prices, availability and membership terms are shown at checkout. Memberships renew until cancelled; you can cancel at any time before the next billing date." },
        { h: "Partner stores", p: "Products sold by partner brands are sold by them, under their own terms. We’re not a party to those purchases." },
        { h: "Intellectual property", p: "The music, recordings, names, logos and content on this site belong to us or our licensors." },
        { h: "Governing law", p: "These terms are governed by the laws of [state/country]." },
      ]}
    />
  );
}
