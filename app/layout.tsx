import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/lib/brand";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: { default: `${brand.name}: ${brand.tagline.replace(/\.$/, "")}`, template: `%s · ${brand.name}` },
  description: brand.description,
  openGraph: { siteName: brand.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: brand.url,
  logo: `${brand.url}/brand/logo.svg`,
  foundingDate: String(brand.founded),
  slogan: brand.tagline,
  description: brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-midnight focus:px-4 focus:py-2 focus:text-ivory">
          Skip to content
        </a>
        {process.env.NEXT_PUBLIC_DEMO === "1" && (
          <p className="bg-brass px-4 py-2 text-center text-sm font-medium text-midnight-900">
            Preview site. Checkout and forms are not live yet.
          </p>
        )}
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
