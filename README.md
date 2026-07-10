# IMPACT-HCC — Human Capital Consultancy Website

A luxury, editorial, fully-animated marketing site recreated from the design reference.
**Tagline:** *Executive Humanism. Measurable Impact.*

Static HTML/CSS/JS — **zero build step**, deploys anywhere. Dependency-free animations (no framework).

## Pages
| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About Us |
| `services.html` | Advisory Services (11 services) |
| `clients.html` | Our Clients |
| `partners.html` | Our Partners |
| `insights.html` | Insights |
| `contact.html` | Contact Us (live embedded Google Map) |
| `404.html` | Not-found page |

## Structure
```
website/
├── index.html … contact.html, 404.html
├── css/
│   ├── base.css        # design system: tokens, header, footer, buttons, animations (shared)
│   └── <page>.css      # one stylesheet per page
├── js/main.js          # shared interactions (reveal, count-up, parallax, nav, magnetic btns)
├── assets/images/      # drop generated images here (see IMAGE_PROMPTS.md)
├── favicon.svg
├── robots.txt, sitemap.xml
├── netlify.toml, vercel.json   # deploy configs (pretty URLs, caching, headers)
├── IMAGE_PROMPTS.md    # ChatGPT prompts to generate every image asset
└── BUILD_BRIEF.md      # internal build spec (can be deleted before deploy)
```

## Design system
- **Colors:** cream `#F4EEE4`, espresso `#1A1611`, antique gold `#C6A15B`, terracotta `#B4502E`. All via CSS variables in `base.css :root`.
- **Type:** Cormorant Garamond (display serif) + Jost (UI/body), loaded from Google Fonts.
- **Motion:** scroll-reveal (IntersectionObserver), animated stat count-ups, subtle parallax, magnetic buttons, animated nav underlines, sticky header that condenses on scroll, accordion. Respects `prefers-reduced-motion`.

## Run locally
Any static server works. From this folder:
```bash
python -m http.server 8080
# then open http://localhost:8080
```
(Or just open `index.html` in a browser — note the Contact map iframe needs http(s), not file://.)

## Adding the real images
The site ships with elegant CSS placeholders (`.ph` blocks) so it looks finished immediately.
To use real photography: open **IMAGE_PROMPTS.md**, generate each asset in ChatGPT, save into
`assets/images/` with the given filename, then swap each placeholder `<div class="ph">` for the
`<img>` shown in the adjacent HTML comment.

## Deploy
- **Netlify:** drag this folder into app.netlify.com, or `netlify deploy --prod`. `netlify.toml` handles clean URLs, caching, and the 404.
- **Vercel:** `vercel --prod` (uses `vercel.json`).
- **GitHub Pages / Cloudflare Pages / any static host:** upload the folder as-is.

## Notes
- The Contact page embeds a live Google Map (no API key required).
- Brand names in the client/partner sections are stylized text stand-ins, not official logos — replace with licensed logo SVGs before commercial launch.
- Legal/footer links (Privacy, Terms, Sitemap) point to placeholders (`#`) and the sitemap; wire real pages before launch.
