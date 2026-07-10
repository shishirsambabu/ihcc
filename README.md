# IMPACT HCC — Human Capital Consultancy

Marketing website for IMPACT Human Capital Consultancy (Dubai · Barcelona).
Static HTML/CSS/JS — no build step, deploys on any static host.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About Us |
| `services.html` | Advisory Services (index of 11) |
| `service-*.html` | 11 standalone service pages (static content) |
| `clients.html` | Our Clients |
| `partners.html` | Our Partners |
| `insights.html` | Insights (listing) |
| `insight-*.html` | 6 Insights articles |
| `contact.html` | Contact Us (embedded Google Map) |
| `privacy.html`, `terms.html` | Legal |
| `404.html` | Not-found page |

## Structure

```
├── index.html … 404.html
├── css/
│   ├── base.css        # design system: tokens, header, footer, buttons, animations
│   └── <page>.css      # one stylesheet per page
├── js/
│   ├── main.js         # shared interactions + EN/AR runtime dictionary
│   └── i18n-ar.js      # Arabic strings for the 11 service pages
├── assets/images/      # photography + client logos
├── robots.txt, sitemap.xml
└── netlify.toml, vercel.json   # deploy configs
```

## Design system

- **Colors:** cream `#F4EEE4`, espresso `#1A1611`, antique gold `#C6A15B`, terracotta `#B4502E` — CSS variables in `css/base.css :root`.
- **Type:** Cormorant Garamond (display serif) + Jost (UI/body), Google Fonts.
- **Motion:** scroll-reveal, count-ups, subtle parallax, magnetic buttons, condensing sticky header. Respects `prefers-reduced-motion`.

## Bilingual (EN/AR)

The header language switch toggles English/Arabic. Direction (`rtl`) is applied
before first paint by the inline `lang-boot` script in each page head; the
translation dictionary lives in `js/main.js` (plus `js/i18n-ar.js` on service
pages). Arabic is reachable at `?lang=ar` on every page and declared to search
engines via `hreflang` alternates. Full-headline Arabic for line-mask heroes is
carried in `data-ar-lines` attributes.

**Editing copy:** the Arabic dictionary matches English strings exactly. If you
change English text in a page, update the matching key in `js/main.js` (or
`js/i18n-ar.js` for service pages), or the Arabic for that string will silently
fall back to English.

## SEO

Every page carries canonical, Open Graph/Twitter tags, and `hreflang`
(en/ar/x-default). `index.html` and `contact.html` embed `ProfessionalService`
JSON-LD. `sitemap.xml` lists all pages; update it when adding pages.

## Accessibility

Skip-to-content link on every page, visible `:focus-visible` styles, mobile nav
with `aria-expanded`/Escape-to-close/scroll lock, reduced-motion fallbacks.

## Run locally

```bash
python -m http.server 8080
# open http://localhost:8080
```
(The Contact map iframe needs http(s), not file://.)

## Deploy

- **Netlify:** drag the folder into app.netlify.com or `netlify deploy --prod`.
- **Vercel:** `vercel --prod`.
- **GitHub Pages / Cloudflare Pages:** upload as-is.

## Before go-live checklist

- Testimonial quotes are placeholders pending client-approved originals.
- Confirm client/partner logo permissions with the client.
