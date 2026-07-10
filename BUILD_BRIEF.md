# IMPACT-HCC — Page Build Brief (for all page-building agents)

You are building one static HTML page for **IMPACT-HCC**, a Dubai-based luxury Human Capital Consultancy.
The homepage `index.html`, `css/base.css`, `css/home.css`, and `js/main.js` are ALREADY BUILT and are your
source of truth for quality, tone, and technique. **Read `index.html` and `css/base.css` before you start.**

Brand: tagline **"Executive Humanism. Measurable Impact."** Luxury, editorial, restrained, confident.

## Non-negotiable rules
1. **Do NOT edit** `css/base.css`, `js/main.js`, or `index.html`. Only create your assigned `*.html` + `css/<page>.css`.
2. Every page links, in the `<head>`, in this order:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
   <link rel="stylesheet" href="css/base.css" />
   <link rel="stylesheet" href="css/<page>.css" />
   ```
   and before `</body>`: `<script src="js/main.js" defer></script>`
3. Use the **canonical header and footer** (copy verbatim from `index.html`) on every page. Only change which
   nav link has `class="active"` to match the current page. Remove the `nav-cta` active state logic — keep Contact as `.nav-cta`.
4. The header must start `on-dark` ONLY if the page's first section is dark. All sub-pages below start with a
   CREAM hero, so use `<header class="site-header">` (NO `on-dark` class) and `<body>` with no special class.
5. Reuse existing utility classes from base.css: `.wrap .section .section--dark .section--cream2 .display .eyebrow
   .lede .btn .btn--ghost .btn--ghostDark .link-arrow .kicker-line .gold-rule .img-frame`, reveal hooks
   `data-reveal`, `data-reveal-stagger`, `.reveal-lines` (with `.line > span` structure), `data-count`/`data-suffix`
   for stat count-ups, `data-parallax="0.06"`, `data-magnetic` on primary buttons, `data-accordion`/`data-acc-item`/`data-acc-head`.
6. Images: use placeholder blocks `<div class="ph" data-label="SHORT DESCRIPTION"></div>` (or `.ph--light` on
   light backgrounds) sized by their container. Leave an HTML comment next to each showing the real `<img>` to drop in,
   e.g. `<!-- <img src="assets/images/about-hero.jpg" alt="..."> -->`. Give each a unique, descriptive `data-label`.
7. Fully responsive. Add a `@media (max-width: 900px)` and `(max-width: 560px)` block in your page CSS.
8. Client/partner brand names render as text logo marks (class `.logo-mark` exists in home.css — but that file is NOT
   loaded on your page; define your own equivalent in your page CSS). Use elegant serif text, greyscale, low opacity,
   brighten on hover. These are stylized text stand-ins, not official logos.

## Palette / tokens (already in base.css `:root`)
cream `--cream #F4EEE4`, cream-2 `--cream-2 #EFE7DA`, ivory `--ivory #FBF8F2`, espresso `--espresso #1A1611`,
charcoal `--charcoal #2A241D`, gold `--gold #C6A15B`, gold-deep `--gold-deep #A9863F`, rust `--rust #B4502E`,
ink `--ink #26211B`, taupe `--taupe #6E6353`. Fonts: `--font-display` (Cormorant Garamond, serif headings),
`--font-ui` (Jost, all UI/body). Use these variables — never hardcode hex.

## Standard sub-page hero pattern (match About/Services/Clients/Contact reference designs)
Cream background, generous top padding (account for fixed header ~ padding-top: clamp(9rem, 14vw, 12rem)),
two columns: left = eyebrow + big `h1.display` (use `.reveal-lines`) + `.lede` paragraph; right = a tall
`.ph--light` art panel (sculptural cream/gold still-life with a lone figure). Below hero, a thin dark band with a
centered italic serif statement is common — reuse where the reference shows it.

## Footer CTA headline per page (keep the rest of the footer identical to index.html)
- about.html / services.html / clients.html / insights.html → keep the index.html footer headline
  "Let's build the human systems behind better performance."
- partners.html → change ONLY the `.footer-cta h2` text to: "Let's build partnerships that create lasting impact."
- contact.html → change ONLY the `.footer-cta h2` text to: "Build the human systems behind better performance."

Content specs for each page are provided in your individual task prompt.
Match the quality bar of index.html exactly. Do not invent extra pages or navigation.
