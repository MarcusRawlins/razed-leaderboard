# Sonaura website

The new site for Sonaura (working name), built with Next.js 15, React 19 and Tailwind CSS.

- **Brand kit:** [`docs/brand/brand-kit.md`](docs/brand/brand-kit.md): name, promise ("Tune your day."), voice, logo, colors, type and claims rules.
- **Source material:** [`docs/source/site-inventory.md`](docs/source/site-inventory.md) is the content inventory of the previous site. It is reference only and is not published.
- **Brand name and contact details** live in `lib/brand.ts`. Shared copy (products, timeline, studies, FAQ, disclaimer) lives in `lib/content.ts`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## Pages

| Page | Path | Job |
| --- | --- | --- |
| Home | `/` | One promise, two audiences, routes to Snapshot, kits and licensing |
| Shop | `/shop`, `/shop/[kit]` | Three kits, naming legend, partner stores |
| Chromatones | `/chromatones` | Membership: music library plus a monthly Wave Rider |
| The science | `/science` | Method, carriers, the one claim, testing library, videos, timeline |
| For business | `/business` | Licensing pitch, industries, process, partners, distribution |
| Our story | `/about` | Origin, Robert Anthony Aviles, mission, timeline |
| Snapshot | `/snapshot` | Six-question quiz with email capture (main consumer lead magnet) |
| FAQ, Contact | `/faq`, `/contact` | FAQ with schema; one form for customers, reservations and licensing |
| Legal | `/privacy`, `/terms`, `/shipping-returns` | Drafts with [bracketed] gaps for counsel |

All 16 URLs from the old site are 301-redirected to their new homes (`next.config.mjs`).

## Environment variables

Everything is optional. With nothing set, the site still works: buy buttons become "Reserve yours" forms, and form submissions are logged on the server.

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain, used in the sitemap and metadata |
| `NEXT_PUBLIC_CONTACT_EMAIL` / `_PHONE` / `_ADDRESS` | Shown in the footer and on Contact once set |
| `NEXT_PUBLIC_CHECKOUT_SMALL_KIT` / `_FULL_KIT` / `_TECH_SET` / `_CHROMATONES` | Stripe Payment Links (or any hosted checkout URL) |
| `NEXT_PUBLIC_MEMBER_LOGIN_URL` | Chromatones member library login |
| `NEXT_PUBLIC_TIBET_VIDEO_ID` | Vimeo ID of the "Tibet" performance on Our story |
| `LEAD_WEBHOOK_URL` | Where every form posts (CRM, email tool, Zapier or Make) |

## Demo site (GitHub Pages)

`scripts/build-demo.sh` builds a static copy with a "preview" banner, no checkout and forms that only pretend to send. The `Demo site` workflow runs it on every push and publishes it to the `gh-pages` branch, so it appears at `https://<owner>.github.io/<repo>/`. Pages has to be switched on once in the repo's Settings → Pages (source: `gh-pages` branch), and on a free GitHub plan the repo must be public.

## Review copy (claude.ai artifact)

`python3 scripts/build-artifact.py > docs/preview/site-preview.html` (after `scripts/build-demo.sh`) bundles the whole site into one page with tab-style views, for commenting on as a claude.ai artifact.

## Deploy

It deploys to Vercel with zero configuration, or to Render as a Node web service (`npm install && npm run build`, start `npm start`).

## Still needed from the client

Search the code for `TODO(client)` to find each spot.

- [ ] Trademark and domain check for the name (see brand kit)
- [ ] Prices and Stripe Payment Links for the three kits and Chromatones
- [ ] Contact email, phone, address, legal entity name
- [ ] Product photography, plus the original logo files and video IDs
- [ ] The 26 study report PDFs (authors, dates, sample sizes)
- [ ] Content of the old Distribution, Snapshot, WHEENS and Login pages
- [ ] The six original Snapshot questions (current ones follow the same themes)
- [ ] Robert Anthony Aviles's exact quote, team names and photos, company location
- [ ] Partner store links and permission to name partners
- [ ] Counsel review of the core claim, disclaimer and legal pages
