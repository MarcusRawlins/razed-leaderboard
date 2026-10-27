import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy policy", robots: { index: false } };

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="[launch date]"
      sections={[
        { h: "What we collect", p: "The details you give us in forms (name, email, company, message, Snapshot answers), order details when you buy, and basic analytics about how the site is used." },
        { h: "How we use it", p: "To answer you, fulfil orders and memberships, send the emails you asked for, and improve the site. We don’t sell your personal information." },
        { h: "Who we share it with", p: "Only the services that help us run the business: [payment processor], [email provider], [hosting provider], [analytics provider]. Each is bound to protect your data." },
        { h: "Cookies", p: "We use essential cookies to make the site work and, with your consent, analytics cookies. You can change your choice at any time." },
        { h: "Your choices", p: "Unsubscribe from any email with one click. Ask us to see, correct or delete your data by writing to [privacy email]." },
        { h: "Contact", p: "[Legal entity name], [address], [privacy email]." },
      ]}
    />
  );
}
