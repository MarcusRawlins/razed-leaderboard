/** @type {import('next').NextConfig} */

// Old site URLs, permanently redirected so search rankings and bookmarks carry over.
const legacy = [
  ["/technologies", "/science"],
  ["/validation", "/science#testing"],
  ["/about-us", "/about"],
  ["/shopping", "/shop#partners"],
  ["/manufacture", "/business"],
  ["/distribution", "/business#distribution"],
  ["/chromatones-1", "/chromatones"],
  ["/contact-us", "/contact"],
  ["/techkit1-1", "/shop"],
  ["/techsamplekit", "/shop/tech-sample-set"],
  ["/fullpersonalkit", "/shop/full-personal-kit"],
  ["/smallpersonalkit", "/shop/small-personal-kit"],
  ["/gallery", "/about"],
  ["/q3", "/"],
  ["/wheens", "/"],
  ["/login", "/chromatones"],
];

// DEMO_EXPORT=1 builds a static copy for GitHub Pages: no server, so no redirects,
// headers or API route (scripts/build-demo.sh sets the route aside), and forms fake success.
const demo = process.env.DEMO_EXPORT === "1";
const basePath = process.env.BASE_PATH ?? "";

const demoConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_DEMO: "1" },
};

const nextConfig = demo ? demoConfig : {
  poweredByHeader: false,
  async redirects() {
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
