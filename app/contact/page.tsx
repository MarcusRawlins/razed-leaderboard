import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/LeadForm";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about an order, reserving a kit, or licensing Harmonic Energy for your products. A real person replies within two business days.",
};

export default function Contact() {
  const { email, phone, address, responseTime } = brand.contact;
  return (
    <section className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 text-4xl sm:text-6xl">Talk to a human.</h1>
        <p className="mt-6 text-lg text-stone">
          Whether you have a question about a kit, want to reserve one, or make products and want to add Harmonic Energy, this goes straight to
          our team. {responseTime}
        </p>
        <dl className="mt-10 space-y-4">
          {email && (
            <div>
              <dt className="text-sm font-bold">Email</dt>
              <dd>
                <a href={`mailto:${email}`} className="text-brass-deep hover:underline">
                  {email}
                </a>
              </dd>
            </div>
          )}
          {phone && (
            <div>
              <dt className="text-sm font-bold">Phone</dt>
              <dd>
                <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="text-brass-deep hover:underline">
                  {phone}
                </a>
              </dd>
            </div>
          )}
          {address && (
            <div>
              <dt className="text-sm font-bold">Mail</dt>
              <dd>{address}</dd>
            </div>
          )}
        </dl>
      </div>
      <Suspense fallback={<ContactForm />}>
        <ContactForm fromQuery />
      </Suspense>
    </section>
  );
}
