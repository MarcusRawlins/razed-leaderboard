import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Shipping and returns" };

export default function ShippingReturns() {
  return (
    <LegalPage
      title="Shipping and returns"
      updated="[launch date]"
      sections={[
        { h: "Where we ship", p: "[Countries]. Orders leave within [X] business days." },
        { h: "Delivery times", p: "[Standard: X–Y business days. Express: X–Y business days.]" },
        { h: "Returns", p: "If a kit isn’t for you, return it unopened within [30] days for a full refund. Opened kits: [policy]." },
        { h: "Damaged or missing items", p: "Tell us within [14] days of delivery and we’ll replace it." },
        { h: "Memberships", p: "Cancel your Chromatones membership any time before your next billing date. Wave Riders already shipped are yours to keep." },
      ]}
    />
  );
}
