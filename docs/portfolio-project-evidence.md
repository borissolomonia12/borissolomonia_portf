# Portfolio project evidence

Read-only assessment dated 2026-10-17. Source root: `C:\Users\Boris\Dell\Projects\APPS`. Paths below are exact paths relative to that root unless stated otherwise.

## Scope and limits

This report inventories sibling projects and evaluates source, test definitions, manifests, and selected documentation. The portfolio itself was excluded. The existing featured list—9T ERP, Tasty ERP, WaybillMCP, Optimo, Order App, and AI booking—was supplied by the parent task's portfolio inspection, not independently inspected in this sibling-project analysis.

No applications, builds, tests, network integrations, deployments, or installers were run. No sibling project was changed. Test files establish intended checks, not a passing result. README/ISA verification entries are historical author claims unless corroborated here by source; they do not prove current deployment, adoption, authorship, correctness, uptime, or business outcomes. Proposed visitor demos below are recommendations, not artifacts created or executed during this assessment. Web design research belongs to the parent task and is not represented as completed by this report.

Excluded from content inspection: `.git`, dependencies including `node_modules_production`, build outputs, caches, virtual environments, `.env` files, account/credential/secret directories, `!SACCounts`, customer exports, runtime state/logs, generated contracts, and personal/account stores. Business documents can themselves contain private figures; none of those figures or incidental credential values are reproduced here. Some Telegram temporary/cache directories denied enumeration; these were unnecessary to source analysis and were excluded thereafter.

Applicable `AGENTS.md` files were read in full:

- `9_tones/9T_erp/AGENTS.md`: immutable originals, explicit uncertainty labels, no public repository or real data publication.
- `Camora/camora_erp/AGENTS.md`: reconciliation/API/UI boundaries; deploy-time credentials remain private.
- `Optimo/AGENTS.md`: adapters, operational state boundaries, masked credentials. Its statement that no test framework exists is stale relative to the test source now present.
- `Brooks_small/AGENTS.md`: independent successor, physical-presence invariants, implementation evidence distinguished from specification.
- `Geolander/Geolander_Telegram_Bot/AGENTS.md`: service/handler boundaries and private booking/service-account material.

No `AGENTS.md` was found in the checked ancestor chain or elsewhere in the safely searchable sibling tree.

## Recommendation: what is genuinely missing

The strongest addition for personal distinctiveness is **Brooks**, presented as one evolving product family with clearly separated generations. The strongest addition for complete customer-facing product work is **Geolander's full rental platform**, particularly its custom WordPress implementation. The best small personal project is **TimeLeft**. These broaden the present finance/integration emphasis in three different ways.

If choosing only a third major case study beside 9T and Optimo: choose **Brooks** when personal product vision is the priority and a candid work-in-progress story is acceptable; choose **Geolander** when demonstrating a broader implemented customer workflow is the priority. Source inspection cannot decide which reflects Boris's personal motivation without his account of it.

| Missing/expanded story priority | Candidate | Why it adds something | Supported status and suitable placement |
|---|---|---|---|
| 1 | Brooks family | Place, memory, travel, social connection; a product thesis with real engineering trade-offs | Multiple substantial implementations; newest Android successor incomplete. Major case study with a version timeline |
| 2 | Geolander platform + operations | Public-facing visual design, travel discovery, pricing, customer handoff, owner tools | Custom WordPress and Next implementations plus separate booking automation. Major case study; existing AI booking becomes one chapter |
| 3 | TimeLeft | Personal attention and time-awareness problem; unusually restrained native product | Implemented C# utility and model tests; local verification claimed in ISA, not rerun. Small interactive feature |
| 4 | Camora ERP | Purchases, supplier debt, and cash workflow differ from 9T's accounting intelligence | Substantial backend/frontend/test implementation; live source checks remain open. Alternate business case study |
| 5 | Telegram Order Bot | Georgian free-text parsing and uncertainty resolution differ from Order App's structured UI | Implemented deterministic pipeline, optional AI, duplicate detection, regressions. Automation story or shared operations chapter |
| 6 | Block RealEstate | A distinct technical experiment: identity-gated tokens and rent claims | Custom Solidity contracts, tests, and matching frontend. Clearly labeled experimental lab project |
| 7 | RS.GE declarations agent | Source-linked figures, independent arithmetic, review and approval boundaries | Considerably beyond README skeleton; real-form/release prerequisites still open. Engineering lab, not a completed filing product |
| 8 | gamtsvaneba / Greenscape | Georgian/English business identity, lightweight React, visual motion | Implemented marketing frontend; contact submission is a UI stub. Supporting visual project |
| 9 | BachmannLogi | Business discovery, data availability, dense financial interface design | Documentation and synthetic HTML design exploration; README explicitly says no application code. Design/process study |
| 10 | Voulez-vous Fina → Wolt | A different ERP integration with two independently persisted sync dimensions | Implemented sync engine and unit test definitions. Best as evidence of integration breadth within the Optimo story |

Ranks describe portfolio value and missing coverage, not measured software quality. Camora may rank higher for enterprise work; Block RealEstate may rank higher for a blockchain audience. Avoid turning all ten into equally weighted home-page cards.

## Broad inventory and family boundaries

| Root / nested project | Classification | Evidence and treatment |
|---|---|---|
| `9_tones/9T_erp` | Substantial financial application | Spring backend, Next pages, migrations, accounting/audit tests; retain as the current 9T candidate |
| `9_tones/9T_sales_analysis` | Focused spreadsheet analytics app | `src/parser.ts`, `src/analytics.ts`, `src/App.tsx`; useful precursor, not another flagship |
| `ERP/9Tones_erp` | Another 9T implementation | Separate Spring/Vite source and purchase/inventory/customer tests; related business family, not demonstrated byte-identical duplicate |
| `ERP/Tasty_erp_new` | Substantial distributor ERP | Payment/config/waybill modules, frontend, tests; existing candidate deserves its own workflow evidence |
| `ERP/tasty_sal_app_2` | Related earlier sales/debt UI | React JS, Firestore service, SOAP backend; no verified chronology beyond apparent implementation lineage |
| `ERP/TBC` | Integration research material | `GEMINI.md` found; no application source established in this pass |
| `Camora/camora_erp` | Distinct ERP product | Poster/rs.ge reconciliation, supplier debt, cash flows; do not call this a 9T duplicate |
| `Optimo` | Marketplace integration product | Optimo → Wolt/Glovo adapters, operator dashboard, persisted control plane, tests |
| `Order_app` | Structured order workflow | Spring services, frontend, Sheets/Telegram integrations; related to distribution work but distinct from text parser bot |
| `Telegram_bot` | Free-text order intake | Python Georgian parser/matcher/clarification pipeline; not the rental bot |
| `Brooks/Brooks_new_1` | Brooks generation | Spring microservices, React web, legacy monolith explicitly deprecated in README |
| `Brooks_prequel` | Brooks generation | Modular Spring backend, Next web, Capacitor Android shell; memory and guide workflows coexist |
| `Brooks_small` | Explicit independent Brooks successor | Kotlin Android/KMP/backend, privacy vault, policy contracts; README/AGENTS identify new BOR-109 product |
| `Geolander/geolander` | Rental web variant | Earlier Next app with fleet/travel/music; README's award/deployment claims are not evidence of awards or deployment |
| `Geolander/geolanderWeb15022026` | Rental web variant | Next server actions, Drizzle, auth guards, booking/admin pages; hybrid storage migration documented |
| `Geolander/Geolander_WordPress` | Custom rental platform rebuild | Custom theme/plugin, seasonal quote/booking APIs, multilingual UI, regression definitions; strongest newly found Geolander case |
| `Geolander/Geolander_Telegram_Bot` | Rental operations automation | Python screenshot → structured booking → Sheets → DOCX/reminder workflow |
| `Whatsapp`, `Geolander/GLander_whatsup` | Closely related rental bot implementations | Same Java class layout. `service/TelegramBookingProcessor.java` has identical SHA-256 in these two roots; this proves one file matches, not whole repositories |
| `Whatsapp_write_2`, `Geolander/whatsapp_write_2` | Related messaging sender variants | Same core Java service names; `WhatsAppWebAutomation.java` hashes differ. Treat as related, not proven exact copies |
| `Geolander/whatsapp_write` | Messaging helper | Java contact/template services, tests, and Node WhatsApp bridge; supporting integration |
| `Geolander/SEO` | Research/tooling support | SEO tool README found; not an independent customer product |
| `gamtsvaneba` | Landscaping marketing site | React/Vite modules, translation context, gallery and animation |
| `Berlin/BachmannLogi` | Discovery and interface prototype | README explicitly discovery stage; `demo/README.md` explicitly fabricated data and HTML design exploration |
| `Berlin/Prebuild` | Private source business documents | Not inspected; not a separate software product |
| `MCPWaybill` | TypeScript RS.ge MCP implementation | Direct SOAP/XML clients, analytics and tool handlers |
| `WaybillMCP` | RS.ge MCP/backend implementation | TypeScript MCP client + Spring backend + setup tooling; related family, materially different structure |
| `Waybill_mistral` | RS.ge assistant variant | Gateway/directory/SOAP adapter plus Python orchestration/analytics/audit; service layout alone does not prove complete product |
| `rs.ge` | Java RS.ge integration | `pom.xml`, `src`; supporting integration, not evidence of another distinctive product |
| `rs.ge_plugin` | Read-only RS.ge developer product | Bundled plugin/MCP with explicit operation allowlist; useful evolution of the integration family |
| `RS.GE_Agent` | Separate declaration workflow product | Tenant DB, review, arithmetic, interview, browser/portal, billing packages; distinct purpose from waybill lookup |
| `Voulez-vous/wolt/wolt-sync-system` | Fina marketplace integration | Sync/adapters/state/rate limiter/tests; related problem to Optimo, different ERP source |
| `Voulez-vous/mapping` | Fina export helper | README describes product → Excel API/CLI; supporting mapping workflow |
| `Voulez-vous/my-node-server` | Other server/frontend material | `server`, `public`, manifest found; not deeply inspected or ranked independently |
| `block_RealEstate/contract` + `block-realestate-frontend` | One contract/frontend product | Custom registry/factory/token/distributor source plus matching Next routes; two folders are not two portfolio projects |
| `block_RealEstate/offblockchain` | Empty directory at visible level | No application established |
| `TimeLeft` | Native personal utility | Pure C# time model, Google OAuth/calendar, custom taskbar/panel, tests |
| `Caddy`, `caddyForGamtsvaneba` | Infrastructure | Caddy-to-VM deployment material; show under a product's delivery chapter |
| `Deployment` | Infrastructure documentation | `DEPLOYMENT.md`, `GCP_VM_DEPLOYMENT_GUIDE.md`; not a separate product |
| `Tinder_city`, `Twitter`, `Widget` | Empty roots in this snapshot | No visible files or subdirectories; names alone establish neither social applications nor personal interests |
| `whatsapp_sev_nums` | No demonstrated application | One root file plus `.claude`; no safe application source established |
| `Obsidian/Obsidian` | Notes workspace | `Welcome.md`; excluded as a software portfolio candidate |
| `!PROMPTS` | Prompt/reference material | Not treated as an application; contents not inspected |
| `!SACCounts` | Account material | Explicitly excluded; not inspected |
| `portfolio` | Parent task scope | Excluded from project analysis |

Related names and workflows are not proof of common authorship, exact duplication, current use, or which branch is authoritative. Obtain those facts from Boris before publishing a version history.

## Deep evidence: distinctive additions

### Brooks: one product family, carefully labeled generations

**Problem and user.** The newer product asks how photos and memories can remain tied to physical places and real presence. Earlier work also explores travel guides, creator discovery, and itineraries. This is a much stronger personal-product story than a generic “social network” label.

**Source evidence.** `Brooks_prequel/backend/memory/src/main/java/com/brooks/memory/service/MemoryService.java` implements creating/sharing memories, coarse map/geofence coordinates, replies, and `revealShare` (around lines 397–408). That reveal checks distance from coordinates supplied in a request; do not equate it with the successor's attested-location design. `Brooks_prequel/backend/memory/src/main/java/com/brooks/memory/service/MemoryGrantService.java` persists reveal grants and removal. `Brooks_prequel/backend/memory/src/test/java/com/brooks/memory/service/MemoryServiceTest.java` defines inside/outside-radius, stranger reply refusal, batched lookup, and coarse-location privacy tests. `Brooks_prequel/web/src/app/(app)/memories/page.tsx`, `(app)/maps/page.tsx`, and `m/[token]/page.tsx` provide corresponding UI route evidence.

`Brooks_small/android/feature/map/src/main/kotlin/brooks/feature/map/MapHome.kt:50` explicitly states the camera action is not live. Around line 119, only “You” has a destination callback; map filter/date/list controls are wired. `Brooks_small/backend/memory/src/main/kotlin/brooks/backend/memory/internal/CreateMemoryService.kt:31` checks evidence and capture receipts, stores through the vault, and returns `PENDING_MEDIA`; around line 96 it allows only `ONLY_ME` in this phase. `Brooks_small/backend/app/src/test/kotlin/brooks/backend/app/memory/MemoryCreateTest.kt`, `memory/MapTest.kt`, and `Brooks_small/backend/db/src/test/kotlin/brooks/backend/db/VaultTest.kt` provide focused test definitions.

**Status reconciliation.** `Brooks_small/README.md` says scaffold as of October 3 and nothing deployed. `ISA.md` and source have advanced beyond that: identity, map and portions of creation backend exist, but end-user camera/sharing/unlock claims remain open. `Brooks_prequel/PROJECT_DOCUMENTATION.md` is dated April 6 and reports placeholder routes/mobile not runnable; later source includes many additional pages and an Android shell, so do not reuse its old status wholesale. Neither repository's breadth proves current complete operation.

**Skills demonstrated.** Geospatial APIs, access control, privacy-aware response shapes, Kotlin/Compose/KMP, Java/Spring/Next, native/web boundaries, contract tests, and deliberate architectural revision.

**Best visitor demonstration.** A 45–60 second story about leaving a memory for someone at a place: coarse map → invitation → remote/nearby access states → photo reply. Use an isolated, explicitly labeled simulation for the full proposed experience and pair it with a short recording of the actually implemented generation. A small “what changed between versions” panel can explain why the successor moved trust decisions to signed evidence and a database vault. Never imply a browser location slider proves physical-presence security.

**Gaps before presentation.** Choose the showcased generation, verify one real flow, obtain consent for imagery, and explain Boris's motivation and ownership. Do not advertise spoof-proof location or a finished Android unlock flow. `Brooks_prequel/backend/guide/src/main/java/com/brooks/guide/service/GuidePurchaseService.java:89` constructs a purchase with provider `mock` and immediately marks it `COMPLETED`; that path cannot substantiate real paid checkout, even though other purchase code exists.

### Geolander: broaden AI booking into a complete rental product story

**Problem and user.** A traveler needs to choose a suitable car, understand dates and price, and reach an operator who can confirm availability. The operator needs editable fleet/pricing content and usable booking requests. This joins public product design and real operational concerns.

**Strongest newly missing source.** Under `Geolander/Geolander_WordPress/wp-content/plugins/geolander-core/includes/`, `class-glc-pricing.php` implements seasonal, rental-duration pricing; its opening comment explains per-day season blending for a trip. `class-glc-booking.php:117` exposes quote behavior and `:152` validates checkout, customer details, and rate limits before invoking a gateway. `class-glc-gateways.php` logs `booking_request` records, implements a WhatsApp gateway, and contains a BOG iPay adapter. Presence of that adapter is not evidence payments are active. The custom theme is `wp-content/themes/geolander`; `patterns/car-page.php`, `assets/js/trip-planner.js`, and `inc/strings-{locale}.php` show product UI beyond a stock theme.

`Geolander/Geolander_WordPress/tests/booking-state.test.mjs:22` tests out-of-order quote protection; further tests cover stale failures, form recovery, submitted quote versus later edits, and avoiding customer/reference fields in analytics. `tests/quote-engine.php`, `tests/price-store.php`, `tests/trip-planner.php`, and `tests/seo-regression.php` define additional checks. `README.md` describes seven locales and a quote → logged request → WhatsApp handoff; source includes the corresponding gateway and localized string files. `includes/class-glc-ai.php` repeatedly distinguishes a request from confirmation/payment, a useful product truth to preserve.

**Other implementations.** `Geolander/geolanderWeb15022026/src/lib/actions/bookings.ts:79` validates bookings, checks overlapping bookings/blocked dates, computes seasonal prices and coupons, and supports file/database branches. `src/lib/permissions.ts` contains authenticated-user/admin checks. Its `src/app/api/webhooks/stripe/route.ts:3` is explicitly future implementation and returns 501. `README.md` calls the storage/auth migration hybrid; no online-payment completion should be inferred from the route name.

**Operations chapter already partly featured.** `Geolander/Geolander_Telegram_Bot/src/handlers/telegram_bot.py` actually sequences vision extraction → Sheets write → DOCX generation → Telegram document/reminder reply. `src/services/vision.py`, `sheets.py`, `contracts.py`, and `models.py` separate those concerns. `tests/test_models.py`, `test_sheets.py`, and `test_contracts.py` define normalization, ambiguous-date, sheet-location and generated-document checks. There is no human review step between extraction and the Sheets write in the inspected handler; do not claim one.

**Skills demonstrated.** Custom PHP/WordPress product development, Next server actions, pricing/domain logic, multilingual UI, asynchronous UI correctness, structured content/SEO, third-party authentication/storage, Python vision and document automation.

**Best visitor demonstration.** Let the visitor choose a fictional car and dates, cross a season boundary, change handover details, and inspect the itemized quote. Finish with a simulated WhatsApp request and corresponding operator record. Show “request received—availability requires confirmation.” Add a short separate synthetic screenshot → structured booking → contract walkthrough. Present the website and bot as related workflows; no automatic link between them was established by this analysis.

**Gaps.** Identify the authoritative current platform, verify language/mobile/quote behavior, and collect real design decisions and operational feedback. No deployed URL, conversion uplift, booking volume, payment completion, or turnaround savings were independently verified. Prefer the custom WordPress story if current status supports it; avoid three separate cards for the website rewrites.

### TimeLeft: the clearest personal utility

**Problem and user.** A Windows user wants to see how much of a calendar event has elapsed without opening a calendar. The README's product boundary is unusually precise: taskbar progress, a pie icon, a tooltip, and a small panel.

**Source evidence.** `TimeLeft/src/Model.cs:54` computes running/overtime/idle states from an injected time, selects the event ending soonest, excludes all-day/declined/cancelled/free events, and returns the next redraw boundary. `src/GoogleAuth.cs:60` reads DPAPI-encrypted tokens; `:116` implements PKCE/loopback consent. `src/MainForm.cs`, `src/CalendarClient.cs`, `src/IconPainter.cs`, and `src/Taskbar.cs` cover the actual Windows/calendar surface. `tests/Tests.cs:24` exercises the 12:15-of-12:00–13:00 example; later assertions cover overlap, exclusions, thresholds, and overtime.

**Status.** `README.md` and `ISA.md` record local screenshots and 28 passing arithmetic checks; these were not rerun. They also explicitly describe the Windows 11 moved/pinned-button limitation: the executable icon may replace the live pie, while taskbar progress stays live. Do not hide this limitation or claim general Windows verification.

**Skills demonstrated.** Small-product judgment, pure time modeling, native Windows integration, OAuth/PKCE, local encrypted storage, failure-state design, minimal dependency delivery.

**Best visitor demonstration.** A clock scrubber from 12:00 through 13:05 updates a faithful simulated taskbar button and tooltip. Toggles for overlapping events and stale calendar data reveal edge-case care. Pair it with a 15-second native recording so the visitor knows what exists on Windows. No Google sign-in is needed for the portfolio simulation.

**Gaps.** Ask Boris why this mattered to his routine; avoid inventing a diagnosis or claiming improved productivity. Verify a current native recording, explain setup cost, and distinguish a personal working utility from a distributed supported product.

### Camora ERP: strongest additional business workflow

**Problem and user.** An operator needs to reconcile purchases across Poster and rs.ge, understand supplier obligations, and account for bank/cash activity without losing source differences.

**Evidence.** `Camora/camora_erp/backend/src/main/java/ge/camora/erp/module/reconciliation/ReconciliationEngine.java:35` accepts source records; subsequent code applies mappings/exclusions, aggregates with `BigDecimal`, and emits matched/discrepancy/unmatched results. `module/supplierdebt/SupplierDebtService.java` integrates source ledgers, bank transaction caches, rs.ge purchases and cash-ledger changes. `frontend/src/AppRoutes.tsx:23` wires dashboard, purchase reconciliation, sales analysis, cash flow, bank analysis, supplier debts, and mapping pages. Test definitions include `backend/src/test/java/ge/camora/erp/module/reconciliation/ReconciliationEngineTest.java`, `module/supplierdebt/SupplierDebtServiceTest.java`, and `frontend/src/pages/PurchaseReconcilePage.test.tsx`.

**Status.** Substantial implemented product. `ISA.md` lists outstanding live bank/rs.ge checks and phone-width verification; its audit is not proof that every integration is operating today. AGENTS' “no dedicated frontend test runner yet” statement conflicts with the now-present frontend test files and should not be copied into portfolio claims.

**Demo.** Load two fictional purchase sources, expose a supplier alias causing a discrepancy, approve a mapping, and watch the reconciled total and supplier view change with a visible source trail. Include one genuinely unresolved case. Skills: reconciliation, precision, mappings, finance UI, integration boundaries. Gap: confirm production status and one defensible outcome; distinguish this supplier-purchase workflow from 9T's financial statements.

### Telegram Order Bot: show language and uncertainty, not just “AI”

**Problem and user.** Distribution staff receive inconsistent Georgian-language orders in group messages and need structured rows without repeatedly resolving customer/product aliases.

**Evidence.** `Telegram_bot/src/workflows/pipeline.py:49` processes messages; around line 86 it checks duplicate processing, around 200 it checks matching confidence, around 229 it invokes optional AI fallback, and around 281 it creates clarification requests or order results. The workflow depends on separate parsing, fuzzy matching, repeat-order, and clarification components. `tests/test_regressions.py` defines successful batch return, unresolved-customer clarification, customer-only orders, and unmatched phrase handling; `tests/test_parser.py` covers decimal/comma quantities and units; `tests/test_runtime_customer_aliases.py` checks runtime aliases.

**Status.** More than a prompt wrapper; source supports a real intake pipeline. README “production-grade” is an assertion, not measured evidence. Local Sheets availability, concurrency behavior, retention and deployed usage were not verified.

**Demo.** Choose between three synthetic Georgian messages: clear, abbreviated, and ambiguous. Reveal parsed customer/product/quantity, highlight the uncertain phrase, let the visitor resolve it, and show one resulting row. Replaying the same message demonstrates the duplicate state. Add English explanation beside Georgian input. Skills: localization, parsing, confidence/clarification UX, integration, idempotency. Gap: confirm it is used and who maintains catalogs; do not imply it is already connected to Order App simply because the domain overlaps.

### Block RealEstate: substantive experiment, not just the template README

**Problem and user.** A prototype models property issuance, verified holders and periodic rent claims. The contract README remains a generic Hardhat sample, but custom code is present.

**Evidence.** `block_RealEstate/contract/contracts/identity/IdentityRegistry.sol`, `registry/PropertyRegistry.sol`, and `factory/PropertyFactory.sol` establish custom domain contracts. `contracts/token/PropertyToken.sol:72` checks pause/frozen/verified sender and recipient rules. `contracts/distribution/RentDistributor.sol:115` checks distribution existence, prior claims, proof, and total bounds; it uses Merkle proofs and reentrancy protection. `RentDistributor.t.sol` defines valid/invalid proof, double-claim, unauthorized-publish and total-exceeded tests; `IdentityRegistry.t.sol` includes role/registration tests and fuzz input. `block-realestate-frontend/src/app/claims/page.tsx` and `admin/distributions/page.tsx` align with the README's browser-generated proof workflow.

**Status.** Custom contract/frontend implementation; no deployed chain state, independent contract audit, real assets, returns, legally enforceable ownership, or customers established. Two repositories form one story. `offblockchain` was empty at the visible level.

**Demo.** Use fictional assets and a local/test-chain recording: register a test holder → issue tokens → publish a distribution → claim once → show double claim rejected. A portfolio simulation can show the same lifecycle without wallet setup. Skills: domain constraints, authorization, Solidity, proofs, transaction UX. Gap: explain why this was worth exploring and what was learned; avoid legal/security/investment claims.

### RS.GE declarations agent: engineering research with real boundaries

**Problem and user.** Help a Georgian taxpayer assemble declaration figures with explicit sources, review, and human control.

**Evidence.** `RS.GE_Agent/packages/declarations/src/compute.ts` and `rules.ts` contain declaration computation/rules modules. `packages/second-check/src/check.ts` independently checks computed figures and leaves disagreements open. `packages/review/src/gate.ts` wraps the core gate with tenant-scoped consumption of an approval token so it cannot simply be replayed. `packages/portal/src/driver.ts`, `real-page.ts`, and `handover.ts` implement browser-side pieces. `test/second-check-property.test.ts` defines generated-input arithmetic checks; `test/portal-real-adapter.test.ts` asserts enabling prerequisites and refusal; `test/review-gate.test.ts` exercises gated operations.

**Status.** README's “runtime skeleton” is behind source. Conversely, `ISA.md` still records live-form/withholding/VAT prerequisites and real payment checks. It also says the current loop requires an Anthropic key even though other vendor keys can be accepted/stored elsewhere. Do not advertise a generally available, completed multi-provider tax-filing assistant.

**Demo.** A fictional declaration shows source → calculated field → independent check → editable discrepancy → review. Demonstrate that a stale/replayed approval cannot proceed, and label the entire scene synthetic. Skills: exact arithmetic, tenant boundaries, approval protocols, browser automation and user control. Gap: finish and verify the relevant real-world form paths before making filing claims; this report does not assess the legal correctness of any rule.

### gamtsvaneba: supporting visual craft, with an honest contact boundary

**Evidence.** `gamtsvaneba/src/App.tsx:14` registers reorderable business sections and wraps them in a language provider. `src/contexts/LanguageContext.tsx` holds Georgian/English UI; `src/modules/Gallery.tsx` and `Services.tsx` provide content modules. `src/modules/LeavesBackground.tsx` implements pointer-following/requestAnimationFrame motion with listener cleanup. `src/modules/Contact.tsx:9` prevents submission and sets a thank-you message; the inspected handler sends nothing. `package.json` has dev/build/preview scripts and no test script.

**Demo.** A short responsive page preview with language switching, gallery, service navigation and optional leaf animation. Explain one specific typography/local-language/layout decision. Skills: visual implementation, localization, configurable content, animation. Gap: obtain actual rendered screenshots and check motion/accessibility/mobile behavior; source does not prove those qualities. Describe the form as unfinished unless completed elsewhere. The modular section registry is not microservices architecture, despite that analogy in README.

### BachmannLogi: publish as discovery and design, if included

`Berlin/BachmannLogi/README.md` explicitly says DISCOVER, no application code. `demo/README.md` explicitly labels the HTML views design exploration with fabricated numbers and describes unavailable/partial data markers. `demo/assets/shell.js`, `demo/assets/tokens.css`, and `demo/pages/` are the documented prototype structure. Do not publish private company payroll/cash findings from the source documents.

Best demonstration: navigate the synthetic customer → warehouse → cost-centre prototype, explaining one decision the available data supports and one it cannot support. This shows business questioning, information design and refusal to fabricate certainty. It is not a shipped ERP or evidence of recovered revenue. The domain may broaden business experience but adds less personal range than Brooks or TimeLeft.

## Existing featured work: retain evidence, correct the scope

### 9T ERP

`9_tones/9T_erp/backend/src/main/java/ge/ninetones/erp/ingestion/ImportService.java:83` stores/imports uploads, rejects already-ingested hashes, and creates fresh parse runs for retries while preserving the source record. `statements/AuditReviewService.java` persists human verdicts with a finding snapshot. `statements/BalanceSheetService.java`, `IncomeStatementService.java`, `CoveringEngine.java`, and `month/MonthResultService.java` establish a broader financial implementation than the README's slice-1 upload status. Next pages exist at `frontend/app/statements/page.tsx`, `audit/page.tsx`, `ledger/page.tsx`, and `month/page.tsx`.

Tests include `backend/src/test/java/ge/ninetones/erp/ingestion/StreamingUploadIntegrationTest.java`, `RunAuthorityIntegrationTest.java`, `statements/CoveringEngineTest.java`, and `month/MonthResultIntegrationTest.java`. Real-export regression tests may skip without private data, as AGENTS/README state; a green run elsewhere would need its skip context.

Best demo: fictional import → data-quality issue → source row → statement line → human review decision. This substantiates financial traceability. Do not imply every bank import and reconciliation function is complete: ISA has open bank/month claims, and the presence of a page is not functional verification. **Never link this private repository publicly or use real exports**; its AGENTS expressly forbids that. A synthetic isolated demonstration is the suitable artifact.

### Optimo

`Optimo/src/core/SyncEngine.ts` orchestrates stores and reconciles interrupted runs; `src/adapters/wolt/WoltBatchPlanner.ts` plans capped delta/enforcement batches and merges accepted snapshots; `src/adapters/glovo/GlovoAdapter.ts:207` records rehearsal changes without sending and `:251` processes job reports. `src/control/ControlPlaneRepository.ts` and `src/routes/dashboard.ts` support operator state and controls. `src/__tests__/controlPlaneRepository.test.ts` defines conflict-preserving migration, atomic fan-out jobs, restart persistence, and edit-during-sync cases. `woltBatchPlanner.test.ts` and `glovoAdapter.test.ts` define batch, report/replay, freeze, and rehearsal behavior.

Best demo: change a fictional stock value → preview Wolt/Glovo effects → surface conflicting SKU mapping → resolve only that product → inspect confirmed versus pending outcome. Include one frozen manual change. This demonstrates engineering depth better than a provider-logo wall. ISA still has Glovo live/rehearsal onboarding and operational edge cases; source and tests do not establish both channels as fully deployed today. Use the actual version's supported outcomes, not a blanket “perfect inventory sync.”

### Tasty ERP and its related folders

`ERP/Tasty_erp_new/payment-service/src/main/java/ge/tastyerp/payment/service/PaymentReconciliationService.java` calculates bank/cash payment totals and debt using `BigDecimal`. `payment-service/src/test/java/ge/tastyerp/payment/service/DebtServiceParityTest.java`, `DebtExclusionFreshnessTest.java`, and `PaymentReconciliationServiceTest.java` define meaningful debt/freshness checks. `waybill-service/src/test/java/ge/tastyerp/waybill/service/InventoryMovementServiceTotalsTest.java` and `RsGeSoapClientChunkGridTest.java` cover different inventory/API concerns. `PROJECT_ANALYSIS_REPORT.md` describes meat-distribution sales/payments/waybill integration; architecture/deployment labels there remain documentation claims.

Best demo: fictional opening debt + period waybills − bank/cash payments → customer balance → the unmatched payment that prevents silent agreement. Keep it distinct from 9T statement audit and Camora purchase reconciliation. `ERP/tasty_sal_app_2` is related implementation material; `ERP/9Tones_erp` serves the same 9T business name but contains distinct source. Do not count every implementation as a separate customer/product or assert a migration chronology without Boris's confirmation.

### Order App

`Order_app/backend/src/main/java/ge/orderapp/service/OrderService.java:45` creates structured orders and tracks actual Telegram send results. `CustomerService.java:151` handles customer locations/boards and appends them to Sheets. Tests include `backend/src/test/java/ge/orderapp/service/CustomerServiceBoardPersistenceTest.java` and `OrderServiceExportCsvTest.java`. `security/AuthenticationService.java` uses `SessionManager`; README explicitly describes in-memory sessions, restart logout and multi-instance constraints.

Best demo: manager chooses a fictional customer/location → assembles order → sees delivery/send status → exports CSV. Explain the structured workflow advantage. Do not portray it as the same application as `Telegram_bot`, nor imply their integration without evidence. Session limitations should inform any scale/architecture claim.

### Waybill/MCP family

`MCPWaybill/src/tools/get-waybills.ts`, `src/services/soap-client.ts`, `xml-parser.ts`, and `src/utils/waybill-analytics.ts` show direct tool-to-SOAP/analytics work. `WaybillMCP/mcp-server/src/services/backend-client.ts` and `src/index.ts` show a different backend-proxy structure; its README lists both lookup and mutating tools. `rs.ge_plugin/plugins/rs-ge/mcp-server/src/service.ts:67` implements `callReadOperation`; line 71 rejects operations outside the read-only allowlist, whose logic is in `src/catalog.ts`.

Best demo: one synthetic natural-language request → tool arguments → SOAP/API response normalization → useful table with provenance. Show a refused write in the read-only plugin if that is the version presented. Do not describe the older management-capable server as inherently read-only. Installer speed/size percentages and “production-ready” wording in READMEs were not independently established. One version/evolution story is more credible than separate cards for rs.ge, WaybillMCP, MCPWaybill, Waybill_mistral and the plugin.

### Fina/Wolt integration as supporting breadth

`Voulez-vous/wolt/wolt-sync-system/src/core/sync.ts`, `core/state.ts`, `adapters/fina.ts`, `adapters/wolt.ts`, and `utils/woltRateLimiter.ts` establish a separate Fina/Wolt implementation. `tests/unit/sync.test.ts:283` defines the important failure case: a failed inventory phase must not advance saved stock; around line 311 it tests missing-feed grace. README explicitly says availability/stock only, no price sync. A failed-second-phase replay is a strong technical demo alongside Optimo. Do not transfer Optimo pricing claims to this service.

## Claim corrections worth carrying into the portfolio review

| Tempting claim | Evidence-based replacement |
|---|---|
| “Several social apps: Tinder City, Twitter…” | Those roots are empty here; Brooks is the actual source-backed social/product work |
| “Three separate Brooks products all finished” | One evolving family with materially different implementations and unfinished successor phases |
| “Brooks proves a person is physically present” | The inspected prequel path compares request coordinates; the successor implements stronger evidence pieces but its full experience remains incomplete |
| “Brooks checkout proves paid purchases” | One inspected guide checkout explicitly uses `mock` completion; verify the specific payment flow before claiming payment operation |
| “Geolander is just an AI booking bot” | Custom rental website/pricing/admin work exists, including a substantial WordPress rebuild, plus a separate booking bot |
| “Geolander online payment is live” | Next Stripe webhook returns 501; WordPress BOG adapter exists, but activation/success was not verified |
| “A Geolander request confirms a reservation” | The implemented handoff creates a request; operator availability/payment confirmation remains separate |
| “All AI booking results are reviewed before writing” | Inspected Python handler writes to Sheets directly after vision extraction |
| “Greenscape has a working enquiry submission” | The handler only changes a thank-you message; phone/email links are separate working link behavior |
| “BachmannLogi is a shipped ERP” | Discovery research and a synthetic HTML prototype |
| “RealEstate is legally compliant/audited real ownership” | Prototype identity/token/distribution mechanics with tests; no external legal/security/asset evidence |
| “RS.GE declarations agent is ready for every supported tax form/provider” | Implemented components and guardrails, with explicit real-form and provider/release limits |
| “All marketplace integrations are production proven” | Adapters/tests/rehearsal exist; current provider-specific live status still needs evidence |
| “Tests pass” / “X% faster” / “saved Y hours” | Only publish dated results or measurements actually collected, with their conditions and skipped checks |

## What to collect from Boris before final selection

These are unresolved evidence questions, not assumed facts:

1. Which Brooks experience is he committed to now, and what personal experience made the physical-place constraint matter? Which generation can he demonstrate today?
2. Is Geolander his business, client work, a partnership, or a personal prototype; which implementation currently serves users; what did he personally design/build/operate?
3. Why did TimeLeft need to exist for him, and which trade-off makes him proud of its small scope?
4. For the enterprise projects, what operational decision became possible, who uses the system, and can one user validate the change without exposing business records?
5. What was designed or written by Boris, collaborators, external libraries, and AI assistance? Distinguish product/domain decisions, implementation and operations without inventing sole authorship.
6. Which work can be shown publicly, and which requires a synthetic reconstruction? For 9T the repository rule already requires private treatment.

For each published case study, collect one first-person reason for building it, one concrete user task, one difficult decision with a rejected alternative, a truthful status/date, and a short demonstration with a visible result and failure state. Add a measured outcome only when a measurement or attributable user statement exists. The most distinctive supported collection is an accounting/integration flagship, Brooks or Geolander as a contrasting major story, and TimeLeft as a personal vignette.
