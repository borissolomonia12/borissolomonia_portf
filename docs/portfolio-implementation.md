# Current-design portfolio enhancement

Implemented and locally verified on 2026-10-18. No deployment or publication was performed.

## Direction

### Follow-up: restored network and screen-led preview

Boris subsequently requested the previous interconnected diagram, removal of the oversized GEL 36,000 hero preview, and inclusion of Bachmann. Implemented on 2026-10-18:

- The network is a visible main-page section again, with eight arrowed connections anchored to actual node bounds through ResizeObserver. All seven nodes stay in one connected layout; smaller screens can pan the map instead of losing its relationships behind a selector.
- A keyboard-accessible screen collection replaces the hero amount: Optimo, BachmannLogi, Camora ERP, and 9T ERP. Each screen identifies its actual scope, including empty/sign-in states. A native dialog enlarges the selected capture and supports Escape and focus restoration.
- Bachmann has a dedicated homepage study with operations and cost-centre screens and a seventh catalogue entry. Both captures come from the existing synthetic HTML prototype; no real payroll, financial findings or source documents were copied. It is explicitly a discovery/interface study, not a shipped ERP.
- The frontend-design skill guided the screen-led presentation while preserving the existing palette and typography. No new imagery was generated for this follow-up.
- Final checks: 31 tests in 10 files passed; lint and production build passed. Browser reviewed at 1440, 1024 and 390 pixels; screen switching, modal opening/Escape and hash targets exercised. No page overflow observed. The network itself intentionally scrolls within its container at small widths.

The initial implementation notes below are retained as history; this follow-up supersedes the hero amount preview and collapsed/mobile-selected map described there.

Boris preferred the existing design over the five researched alternatives. The copper-and-teal palette, Manrope/IBM Plex Mono typography, large headings, and network background remain. The frontend-design skill informed the task-first exhibits and restrained supporting layout rather than a replacement visual theme. The agent-browser skill supported live keyboard, navigation, responsive, and interaction checks.

The opening now states the combined financial-manager/full-stack-engineer identity. The selected work appears before the technology catalogue. Personal motivation connects removing repetitive work with building emotional connections to places. Employment calls to action and the existing résumé are available without requiring visitors to inspect every project.

## How each project is demonstrated

| Project | Visitor action | Visible evidence and boundary |
| --- | --- | --- |
| 9T ERP | Inspect a figure, finding, source postings, and record an explained verdict; download the review | Costs reconcile to the reported figure. Review judgment never changes the books. Entirely fictional records; no private source or exports. |
| Optimo | Preview stock, resolve a mapping, run a sync, retry a failed destination, replay the event | Confirmed and pending snapshots remain distinct; replay is visibly ignored. Illustrative local state, not a production guarantee or provider connection. |
| Brooks | Open an invitation, inspect its place, simulate arrival, reveal a memory | Memory image is absent until reveal and removed on reset. Fictional story and image; no geolocation verification. Full product remains in development. |

Each exhibit includes optional technical explanation and a case study with responsibilities, decisions, limits, and unmeasured impact where appropriate. This implements the progressive-disclosure and evidence-first findings recorded in portfolio-web-research.md. The synthetic Boris Control System remains a separate analytics model, not the 9T application.

Additional enhancements: responsive finance connections, same-page mobile navigation closure, lazy-route hash targeting, ambient-motion pause and system reduced-motion support, clearer catalogue previews, and replacement of stale future career plans with the confirmed current direction. Existing unrelated changes and sibling projects were preserved.

## Verification

- npm test: 9 files, 26 tests passed.
- npm run lint: passed with zero warnings.
- npm run build: passed, including TypeScript checking.
- Browser review at 1440×1000, 1024×900, 390×844, and 360×800.
- Exercised the three example flows, including review/reset, partial sync failure/retry/replay, and memory reveal/reset.
- Verified project hash navigation, mobile Skills menu closure, motion pause, and reduced-motion preference.
- Inspected desktop/mobile screenshots and the tablet finance-map layout; no horizontal overflow observed at reviewed widths.
- Contact page visually reviewed; no email sent. Résumé target exists. No live sibling application or provider was invoked.
- File-transfer limitation: the automation browser canceled the review JSON download and stalled on an independent static-file download probe. The review UI works, but saving the JSON to disk is not claimed as browser-verified.

## Brooks image provenance

Mode: built-in image_gen, new-image generation; no reference image and no CLI/API fallback.

Saved source: assets/source-screenshots/brooks-memory.png

Optimized site asset: public/projects/network/brooks-memory.webp

The source is registered in config/portfolio-assets.json and generated by the existing asset pipeline. The interface and alt text identify it as AI-generated and fictional. It is not Boris's personal photograph, a documented real place, or a real recipient's memory.

Final generation prompt:

> Use case: photorealistic-natural. Asset type: fictional memory photograph for the Brooks place-based memory demonstration in Boris's existing copper-and-teal portfolio. A quiet, intimate old courtyard inspired by Tbilisi, seen from an arched entrance at blue hour: weathered plaster, a dark teal wooden balcony and one warm amber window, a small empty bench, gently worn stone paving. Nostalgic and lived-in, understated photographic realism with natural imperfect textures and subtle film grain, no tourism-advertising gloss. Landscape composition, no people, no text, no logos or watermark. This is an invented place used as an illustrative memory, not a real personal photograph. Keep the palette deep teal shadows, soft copper/amber light, muted natural stone. A single coherent photograph, not a UI mockup, collage, poster, or device.

## Remaining editorial work

If desired later, add approved recordings of real implemented workflows and measured outcomes. Obtain individual approval before naming additional clients or showing their records. These are optional future evidence upgrades, not claims made by the current fictional exhibits.
