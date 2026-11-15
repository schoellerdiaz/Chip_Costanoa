# DRAFT: Costanoa site

Status: DRAFT, 15 Nov 2026. Not published. The whole site and both kit documents are drafts until David A. Schoeller-Diaz approves the exact text. Nothing in this revision has been de-drafted.

A static website for "Costanoa: The Fog of Cyber-War" and the Cold Audit scenario exercise. Plain HTML, CSS and JavaScript. No build step, no server, no account, no tracking, no third-party scripts.

## What is in the folder

| File | Page |
|---|---|
| index.html | Landing: cover, premise, the Cold Audit, the Four Ledgers, what the exercise is |
| cold-audit.html, assets/cold-audit.js | The interactive Cold Audit: three decisions, four endings, live ledger board |
| guide.html | World guide: the premise |
| regions.html, region-*.html (6) | The six regions, each with its map, locations, factions and stakes |
| factions.html | The six factions and the outside powers |
| characters.html, character-*.html (10) | The ten scripted characters |
| roles.html | Three leadership roles, twelve specialist roles and their premade characters |
| starts.html | The five story starts; four are teasers |
| ledgers.html | The Four Ledgers and the RAW, CORRELATED, VERIFIED grades of evidence |
| run-it.html | How to run the exercise, kit downloads, the reuse ask |
| gallery.html | All imagery, captioned |
| kit/*.pdf | Facilitator guide and one-page case study, the downloads linked from run-it.html |
| kit/*.md | The editable Markdown sources of the two PDFs |
| assets/site.css | Styles, ROSHAI brand (Violet theme) |
| assets/fonts/ | IBM Plex Sans, IBM Plex Mono and Saira, self-hosted, with their SIL Open Font License files |

## DRAFT inventory

Every place the draft status is marked. All of it stays until David approves the exact text; remove these only at the publish step.

| Where | Marker | Covers |
|---|---|---|
| Every HTML page (27), line 2 | HTML comment `<!-- DRAFT build, 14 Nov 2026. Not published. ... -->` | The page source |
| Every HTML page (27), footer | Visible badge `<span class="draft">DRAFT</span>` followed by "Not approved for publication." | The page as a reader sees it, on screen and in print |
| kit/cold-audit-facilitator-guide.md, line 3 | "Status: DRAFT v2 for David's review" | The editable source |
| kit/cold-audit-case-study.md, line 3 | "Status: DRAFT v2 for David's review" | The editable source |
| kit/cold-audit-facilitator-guide.pdf | DRAFT banner on page 1, "DRAFT, not approved for publication" running header on all 7 pages, and the Status line | The download |
| kit/cold-audit-case-study.pdf | DRAFT banner on page 1, running header on both pages, and the Status line | The download |
| assets/site.css, assets/cold-audit.js, line 1 | Comment beginning "DRAFT." | The code |
| This README, title and status line | "DRAFT" | The package as a whole |

To de-draft at publish: remove the footer badge and its sentence and the line-2 comment from every page, the Status lines from both Markdown sources, then rebuild the two PDFs without the banner and header (see "Rebuilding the PDFs").

## Placeholders waiting on David

| Placeholder | Where | Replace with |
|---|---|---|
| Logo | Header of every page | Done: the real ROSHAI logo file, `assets/roshai-logo.png` (256 px, displayed at 48 px), as an `<img>` with explicit width and height. The supplied mark is stacked letters (R / OS / HAI), aqua outline, not a triangle. |
| Favicon | Every page head | Done: `assets/favicon.png` (64 px), made from the supplied logo file. |
| og:url | Comment in every page head | The page's GitHub Pages address, added at publish |

## Brand

Styling follows the ROSHAI design system (Drive: ROSHAI_Web_v1_Kit, CLAUDE.md): Violet theme tokens, aqua for headings and key figures, IBM Plex Sans for text, IBM Plex Mono for labels and captions, Saira 800 for display in place of the licensed Sporty Pro until its file is supplied. Per the brand: no gradients, glows or shadows, no amber accents, no tangerine (reserved for "human" in diagrams). The cover image is the landing hero and carries the title in its own lettering.

## Preview locally

Open `index.html` in a browser. Everything works from the folder. For a local address instead, run `python3 -m http.server 8000` in this folder and open http://localhost:8000.

## Publish to GitHub Pages

1. Create a repository and put the contents of this folder at its root (index.html at the top level).
2. In the repository: Settings, Pages, Source "Deploy from a branch," branch `main`, folder `/ (root)`. Save.
3. The site appears at `https://<user>.github.io/<repository>/` within a few minutes. All links are relative, so it works at that address or on a custom domain.
4. Add `og:url` to each page with its final address.

## Images

Images are not in this folder. Every image loads from the Google Drive folder COSTANOA with a URL of the form `https://drive.google.com/thumbnail?id=<FILE_ID>&sz=<SIZE>`: `w1600` for the cover, `w2000` for the six maps, `w800` for the 22 portraits. The Drive files are link-shared and David has confirmed each picture matches its alt text. The Open Graph image on every page is the cover at `w1600`.

## Rebuilding the PDFs

The PDFs were printed from the Markdown sources with Chrome, using the brand's Paper theme and the fonts in assets/fonts. After editing a Markdown source, rebuild with any Markdown-to-PDF route, or ask Claude to rerun the same print step.

## Names

The two image files named "Renata Reyes" and "Saray Reinosa" are used for the characters the live build (Voyage Studio draft v37.20) calls Renata Diaz and Mizuki Schiller. The site uses the live-build names throughout.

## Rules the text follows

"Scenario exercise," never the other word. The board is a discussion device, not a model. No claim that the exercise has been run. The after-action note and any results claims wait for two runs; run-it.html keeps its placeholder note. No em dashes. No real-person likeness named or described anywhere. The reader's edition leaves out everything hidden in the internal bible.
