# Website Proposal — for Joanna Al-Najjar

A designed, 6-page website proposal for IMPACT HCC, prepared for Joanna
Al-Najjar (Founder & CEO). Built in the site's own brand system (Cormorant
Garamond + Jost + a Sacramento script signature; cream / espresso / antique-gold
palette) so the document reads as an extension of the site itself.

It is deliberately *not* a bare price list. It leads with a personal letter and
the strategy the site was built on — the **Trust Equation** (Maister, Green &
Galford, *The Trusted Advisor*) — then presents the fee as the natural
conclusion of that thinking.

**Deliverable:** `IMPACT-HCC-Website-Proposal.pdf`

## Pages
1. **Cover** — "Built to be trusted."
2. **A note for Joanna** — a personal letter (research → strategy → honest framing of value)
3. **How a website earns trust** — the Trust Equation, mapped page-by-page to the site
4. **The site, in service of that idea** — scope as execution of the strategy
5. **What the fee pays for** — line-item breakdown ($4,500 total) + agency comparison
6. **Everything, delivered and yours** — included, terms, optional care, personal close

## An honest note on framing
The value is the **research, strategy and creative direction** (the trust
strategy, applied deliberately) plus **AI-accelerated execution** — senior
thinking, efficient hands. The document says exactly that; it makes no claim of
manual hand-coding.

## Rebuild the PDF
```bash
python3 fetch_fonts.py     # downloads + base64-embeds the brand fonts -> fonts.css
python3 build.py           # injects fonts into proposal.html -> proposal.final.html
chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf=IMPACT-HCC-Website-Proposal.pdf proposal.final.html
```

> Committed on the `claude/website-dev-cost-proposal-pa019x` feature branch only
> (not `main`), so it is never part of the production deploy.
