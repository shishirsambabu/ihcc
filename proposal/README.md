# Website Development — Investment Proposal

A designed, 5-page PDF fee proposal for the IMPACT HCC website, prepared for
Joanna. Built in the site's own brand system (Cormorant Garamond + Jost,
cream / espresso / antique-gold palette) so the document reads as an extension
of the site itself.

**Deliverable:** `IMPACT-HCC-Website-Proposal.pdf`

## Contents
- Cover
- What you're looking at (site at a glance)
- The investment — line-item breakdown ($4,500 total)
- Why it's priced this way (five reasons + agency comparison)
- What's included, terms & optional ongoing care

## Rebuild the PDF
```bash
python3 fetch_fonts.py     # downloads + base64-embeds the brand fonts -> fonts.css
python3 build.py           # injects fonts into proposal.html -> proposal.final.html
# render with headless Chromium:
chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf=IMPACT-HCC-Website-Proposal.pdf proposal.final.html
```

> Committed on the `claude/website-dev-cost-proposal-pa019x` feature branch only
> (not `main`), so it is never part of the production deploy.
