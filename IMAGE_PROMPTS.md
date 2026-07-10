# IMPACT-HCC Image Prompts

Save every generated asset into `website/assets/images/` using the exact filename shown.
The CSS now looks for these filenames automatically. If the file exists, it appears over the current vector placeholder.

Important: for client and partner logos, do not use AI-generated approximations in production. Use licensed official SVG/PNG logo files for a true match.

## Universal Style Block

Paste this at the start of every prompt:

```text
Luxury editorial architectural scene for IMPACT-HCC, a premium human capital consultancy. Warm cream plaster and ivory stone, deep espresso black, antique metallic gold, and one muted terracotta/rust accent only. Photorealistic refined 3D render with believable stone texture, matte plaster, subtle paper grain, cinematic directional light, soft long shadows, quiet museum-like composition, restrained luxury, no oversaturation, no modern neon colors, no blue or purple lighting, no clutter, no plants unless explicitly requested, no stock-photo feeling. Camera is level, architectural, calm, expensive. Ultra high detail, crisp edges, natural depth, 8k quality. 
```

Add the specific prompt below after the universal block.

## 1. `hero.jpg`

```text
Aspect ratio 16:9. Create the homepage hero artwork only, no website text. Composition: right-side dark architectural atrium, left edge allowed to fade into deep shadow so the site can place a cream copy panel beside it. A poised female executive in a tailored black suit stands in side-profile silhouette inside a tall translucent glass-and-stone architectural volume. Her face is lit by a narrow antique-gold rim light, hair in a neat low bun, calm confident expression. Behind her: a monumental gold semicircular ring/arch, transparent glass walls, black marble/espresso stone, vertical gold line details, polished floor reflections. In the lower right, a small staircase with a tiny solitary figure walking upward; mid-right, three distant business silhouettes walking through a lit glass corridor. Add one polished antique gold sphere near the lower center-right. Light enters from the right as warm golden shafts, leaving the scene moody and dark. Preserve large negative space and strong vertical architecture. No words, no logo, no watermark.
```

Target look: attached home reference, top hero right side.

## 2. `about-hero.jpg`

```text
Aspect ratio 16:9 wide landscape. Create the About page right-side architectural still-life. A huge smooth cream circular stone disc stands upright on the right side, almost touching the top edge. The disc has shallow engraved text reading exactly "IMPACT" on the first line and "HCC" on the second line, centered, subtle debossed stone, same cream color, not black. Behind it: a tall fluted cream wall panel. In front: staggered rectangular cream stone plinths of different heights, lightly speckled travertine texture, a small polished antique gold sphere on the low cube, and a half terracotta/rust circular slab at the far lower right. Thin antique-gold vertical rods and a partial gold arc sit behind the disc. Empty warm cream background on the left for page text. Soft daylight from upper left, long shadows, premium gallery still-life. No extra words, no watermark.
```

## 3. `services-hero.jpg`

```text
Aspect ratio 16:8 wide landscape. Create the Advisory Services hero architectural scene. A lone executive figure in a black suit is seen from behind, standing at the center of a tall luminous cream arch doorway. The figure is small but clear, upright, formal, walking into light. Surround the figure with layered cream stone arches, a large round cream form, shallow steps across the foreground, a slim antique-gold partial arc on the left, a vertical fluted cream wall on the right, a muted terracotta/rust half-disc panel on the far right, and a small polished antique gold sphere on a low plinth at left. The scene is bright ivory/cream with subtle stone grain and realistic shadows. Keep the left third calmer and less busy. No text, no logos, no watermark.
```

## 4. `clients-hero.jpg`

```text
Aspect ratio 16:8 wide landscape. Create the Our Clients hero scene. A lone man in a tailored black suit is seen from behind, centered slightly right, walking up broad cream stone steps toward a glowing cream arched doorway. Add a large partial antique-gold ring behind the arches, a rust terracotta vertical half-disc on the far right, a small polished antique gold sphere on a cream cube at left, and a thin fluted wall texture at far right. Use soft warm daylight, elegant shadows, premium stone/plaster material, high realism. Leave the left third open and calm for typography. No text, no logos, no watermark.
```

## 5. `contact-hero-map.jpg`

```text
Aspect ratio 16:10 landscape. Create the Contact page right-side composite artwork as one finished image. Background: warm cream architectural still-life with a large cream arch niche behind, vertical gold rods/fluted lines at far right, a terracotta/rust half-disc, a raised cream stone platform, and a polished antique gold sphere on a pedestal. Foreground: a framed map card centered slightly left, with thin antique-gold border. The map is a clean luxury editorial map of Downtown Dubai / Business Bay / Dubai Creek, pale beige roads, muted blue creek water, soft grey land, and one rust-red location pin labeled "Opal Tower". Add a small lower caption card inside the artwork with a gold location-pin icon and the text "Opal Tower, Business Bay, Burj Khalifa Boulevard, Dubai, UAE". The map should look like the attached reference: elegant, flat, readable, not Google-branded, no random labels, no watermark, no extra words.
```

Note: image models can be unreliable with small text. If the text is wrong, regenerate with the same prompt and ask specifically to correct only the map labels.

## 6. `clients-quote.jpg`

```text
Aspect ratio 6:5. Create a dark testimonial-side still-life. Deep espresso black textured background with a cream stone plinth on the right, a polished antique gold sphere sitting on it, a rust terracotta semicircle slab behind it, and a thin antique-gold partial arc. Low dramatic side lighting, luxury gallery mood, enough darkness on the left so white quote text can sit beside it on the webpage. No text, no logo, no watermark.
```

## 7. `partners-hero.jpg`

```text
Aspect ratio 16:9. Very subtle cream architectural pattern background for the Our Partners page. No central object. Use pale ivory plaster with faint geometric lines, thin antique-gold construction-grid strokes, partial circular arcs on the right side, and barely visible rectangular panel seams. Keep it extremely light, quiet, and low contrast so partner logos can sit over it. No words, no logos, no watermark.
```

## 8. `footer-corridor.jpg`

```text
Aspect ratio 3:4. Dark espresso architectural corridor for the homepage footer CTA. A small solitary figure in silhouette stands near a warm vertical doorway of golden light. Surrounding forms are black stone, curved cream architectural edges, and one thin antique-gold arc. Moody, minimal, premium, with strong negative space. No words, no logos, no watermark.
```

## 9. `insights-hero.jpg`

```text
Aspect ratio 4:5 portrait. Cream editorial reading-room still-life: a sculptural open journal or folded paper form on a cream stone desk, a small polished antique gold sphere, a muted terracotta curved panel, soft fluted wall details, and a distant dark executive silhouette partly obscured by an arch. Warm directional light, calm and reflective. No text on pages or walls, no logos, no watermark.
```

## 10. `insights-feature.jpg`

```text
Aspect ratio 16:10 landscape. Wide premium editorial image of a single executive silhouette standing inside a dark espresso boardroom, looking through floor-to-ceiling glass toward an abstract warm city at golden hour. Add vertical architectural mullions, muted gold reflections, polished dark floor, and a soft cream light beam. Serious, strategic, future-facing. No text, no logo, no watermark.
```

## 11. `insight-1.jpg`

```text
Aspect ratio 16:11. Empty executive corridor in deep espresso and antique gold light. Tall vertical fluted wall panels, polished dark stone floor, one diagonal shaft of warm light, distant stairs hinted in shadow. No people. No text, no logo, no watermark.
```

## 12. `insight-2.jpg`

```text
Aspect ratio 16:11. Abstract cream sculptural architectural wave, like folded plaster or stone, sweeping from lower left to upper right. Deep espresso shadow behind it, soft antique-gold edge light, one tiny muted terracotta reflection. Minimal, high design, no people. No text, no logo, no watermark.
```

## 13. `insight-3.jpg`

```text
Aspect ratio 16:11. Rhythmic cream colonnade of tall arches receding into warm espresso shadow. Gold light rakes across columns and floor, long shadows, strong perspective, premium museum architecture. No people. No text, no logo, no watermark.
```

## 14. `insight-4.jpg`

```text
Aspect ratio 16:11. Overhead/oblique still-life of interlocking cream geometric blocks arranged like an organizational system. Include one small antique-gold cube and one muted terracotta slab. Soft studio shadows, ordered, precise, elegant. No text, no logo, no watermark.
```

## 15. `insight-5.jpg`

```text
Aspect ratio 16:11. Minimal ascending cream stone plinths like a refined architectural bar chart. A polished antique gold sphere sits on the tallest plinth, with a muted terracotta curved panel behind. Warm soft side light, long shadows, premium still-life. No text, no logo, no watermark.
```

## 16. `insight-6.jpg`

```text
Aspect ratio 16:11. Serene dark executive silhouette seated or standing calmly inside a cream architectural niche, surrounded by a subtle warm gold halo/backlight. Minimal, human, purpose-led, quiet luxury. No religious symbols, no text, no logo, no watermark.
```

## Optional Texture

### `texture-paper.jpg`

```text
Aspect ratio 1:1, seamless-looking. Extremely subtle warm cream plaster and paper texture with faint mineral flecks, almost flat, low contrast, no obvious pattern, no scratches, no text, no logo.
```

## Asset Notes

- For exact client and partner sections, gather official transparent SVG/PNG logos and place them in `assets/logos/`.
- For the partner reference, the required official logos are: Royce Group, Purpose & Engagement, Chronus, Spidergap, V & A Consulting, NABED, WorkflowQ Systems.
- For the client reference, use official greyscale logo files for each listed organization. Text stand-ins will never be a 100 percent visual match.
