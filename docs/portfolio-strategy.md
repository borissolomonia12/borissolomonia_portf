# Portfolio strategy and interview brief

Prepared 2026-10-17. This document preserves the initial research and alternatives. The subsequent interview selected and confirmed the direction described in the update below and the consolidated narrative brief.

Update 2026-10-18: the interview has since selected 9T ERP as the leading project, Optimo and Brooks as the other principal stories, Product bench (E) with Follow one record (B), and a Brooks scene about receiving a memory from someone important at a meaningful place. The current consolidated decisions are in [portfolio-narrative-brief.md](portfolio-narrative-brief.md). Recommendations below preserve the research-stage alternatives and should not override those later choices.

## Provisional recommendation

Use **three substantial project stories, one personal utility, and a small lab**. My current preference is **Product bench (E)** as the main experience, with **Follow one record (B)** as the technical reading layer and personal writing from **Field journal (C)**.

The inspected work offers specific evidence of financial domain knowledge, integration engineering, and deliberate product choices. That is more useful material than a broad technology list. The recommendation is conditional on the audience: a personal-product direction could justify **City of ideas (D)**; teaching could make **Decision lab (A)** the stronger opening.

A possible unifying question is: **How can software make something difficult to see understandable and actionable?** Money, operational events, place-based memories, and time offer possible examples. This is an interpretation of the artifacts, not a claim about Boris's motivation. The interview must confirm or reject it.

Evidence: [web research](portfolio-web-research.md), [project source analysis](portfolio-project-evidence.md).

## What the current portfolio needs

The implementation was read and opened locally. Sources include src/pages/HomePage.tsx, ProjectsPage.tsx, WorkPage.tsx, src/data/portfolio.ts, caseStudies.ts, controlSystem.ts, src/components/FinanceFlow.tsx, CareerTimeline.tsx, and config/portfolio-assets.json.

- The homepage targets buyers of finance automation through its opening line, service list, integration strip, and contact action. Whether that is the right audience remains a decision.
- Six products are already named: 9T ERP, Tasty ERP, WaybillMCP, Optimo Sync, Order App, and AI Booking Assistant. More equally weighted cards would not solve the absence of visible project behavior.
- The existing /boris-control-system route is a useful synthetic analytics exhibit. Typed data, calculations, filters, drawers, and test definitions provide a foundation. Keep it distinct from a real ERP or client outcome.
- The configured 9T and Order App images are sign-in screens. Replace leading evidence with a public-safe task, annotated output, or recording when those assets are prepared.
- WaybillMCP and AI Booking use architecture diagrams. Add a request, output, and failure case to demonstrate utility.
- Homepage explanatory prose is labeled proof, but is not a dated measurement or independently verified business result. Strengthen it with a specific task, contribution, and evidence.
- The career timeline still contains 2025 plans and 2026 expansion language. Reconcile them with current work and goals. Role and achievement statements were not independently verified here.
- There is much more about the customer's workflow than Boris's own motivations, learning, and desired future work. This is the largest content gap relative to the requested personal portfolio.

## Proposed selection: why and exactly how

This ranks portfolio value, not software quality. Source inspection establishes implementation evidence; no sibling apps, tests, integrations, or deployments were executed.

| Placement | Project | Why it earns space | Visitor task and visible result |
| --- | --- | --- | --- |
| Flagship 1 | 9T ERP, or Camora when better aligned with the audience | Financial judgment, arithmetic, traceability, review | Import fictional records, discover an exception, inspect its source row, and follow supported review into a financial view |
| Flagship 2 | Optimo | Stateful synchronization and operational control | Change fictional stock, preview provider changes, resolve a mapping, inspect confirmed/pending results |
| Flagship 3A | Brooks | Distinctive product vision: place, memory, privacy, architectural evolution | Explore synthetic remote/nearby access states, then watch the implemented generation |
| Flagship 3B | Full Geolander platform, alternative to Brooks | Broader customer-facing work: pricing, multilingual content, handoff, operator concerns | Choose a fictional car/dates spanning a pricing season, inspect quote, create simulated booking request |
| Personal vignette | TimeLeft | Restraint: a precise personal inconvenience becomes a small native tool | Scrub time across an event and inspect elapsed share, overtime, and stale-data states |
| Supporting exhibit | Telegram Order Bot | Georgian language, uncertainty, clarification, duplicate handling | Resolve an ambiguous fictional message, inspect the order, replay it |
| Engineering lab | One Waybill/MCP generation or read-only rs.ge plugin | Useful tooling and integration boundaries | Inspect a synthetic request, tool arguments, normalized response, and version-specific refusal |
| Optional lab | Block RealEstate or RS.GE declarations agent | Specialized exploration relevant to future goals | Inspect a synthetic lifecycle and refusal case, labeled experimental |

Choose the third flagship based on work Boris wants to do again. Camora, Tasty and 9T are distinct, but three ERP stories may add less range than one strong financial story plus a contrasting personal product. Related implementations belong in an evolution section.

### Finance demonstration

Start with a small fictional dataset and one question, such as why a balance does not reconcile. Expose an actual supported issue, inspect the original row and rule, follow the affected statement line, and record a supported reviewer decision. End with what changed and what remains unresolved.

The 9T repository expressly prohibits public publication of its repository and real exports. Use an isolated synthetic exhibit or approved recording; do not offer private source as a public link. The portfolio's existing analytics exhibit is a separate illustrative model.

### Optimo demonstration

Start with one fictional product, stock value, and provider mappings. Preview a change; reveal a conflicting/missing mapping; freeze the affected product; resolve it; inspect accepted, pending, and failed outcomes. Show a supported recovery case and explain why saved state does not advance incorrectly.

The Product bench sketch demonstrates only an invented mapping/replay interaction. It does not call Optimo or prove its guarantees. A full exhibit must match the chosen supported version. Provider onboarding and current deployment were not verified.

### Brooks demonstration

Introduce Boris's real reason for tying memories to places. Show a fictional invitation and coarse location; compare remote/nearby states in a labeled simulation. Pair that with a recording of a chosen implemented generation, then explain one architectural change and its constraint. Publish a clear working-now/still-exploring boundary.

Earlier source compares request coordinates for proximity. The successor has stronger evidence/vault components but unfinished user flows. A slider explains the idea; it does not demonstrate secure physical presence. Do not combine features from different generations into a fictitious completed product.

### Geolander demonstration

Choose a fictional vehicle and dates spanning a pricing season. Inspect an itemized quote, change handover details, and end with “request received; availability requires confirmation.” Show the operator request separately. Add the booking bot as an operations chapter: synthetic screenshot to structured booking/document output.

The WordPress implementation is substantial; other versions have different scope. The authoritative platform remains unconfirmed. Do not imply live payment, confirmed availability, or automatic website-to-bot integration without evidence.

### TimeLeft demonstration

Show a faithful simulated taskbar button beside a clock. An event from 12:00 to 13:00 at 12:15 yields 25% elapsed and 45 minutes left. Scrub through overtime and idle; toggle overlapping events and stale data. Pair with a short native recording and a note about its deliberately small scope.

Native implementation and model-test evidence exist; recorded tests were not rerun. Explain the documented Windows moved/pinned-icon limitation. Ask why Boris wanted the tool rather than inventing a productivity outcome.

## The answer to “How should I demonstrate them?”

**Person and problem → prepared task → visible result → Boris's contribution → consequential decision → inspectable evidence.**

This adapts [NN/g's case-study guidance](https://www.nngroup.com/articles/ux-design-portfolios/) to software, combined with controlled interactive explanation from [Bartosz Ciechanowski](https://ciechanow.ski/mechanical-watch/) and [Josh W. Comeau](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/). It is a design recommendation, not research proving conversion uplift.

Use three reading depths: short summary, focused task, optional technical case. [Progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/) supports prioritizing essentials and exposing specialist detail on request.

Working editorial targets are a 15-second summary and a 30–90-second task; those are proposed constraints, not universal researched benchmarks. Offer annotated screenshots or a user-controlled captioned recording. Identify live demos, fixture modes, simulations, recordings, and prototypes distinctly.

Each case needs the user/problem, status/date, contribution and collaborators, relevant AI assistance, one constraint and rejected alternative, one limitation, and a meaningful test/example/artifact. Results need provenance: dated observations, measurements, attributed feedback, or an honest statement that impact is unmeasured.

A test definition is not a passing result; simulated recovery is not uptime evidence; illustrative figures are not business ROI.

## Five reviewable design directions

Open [the local concept gallery](http://127.0.0.1:5173/docs/portfolio-directions.html). These are original sketches with working illustrative interactions, not production redesigns.

| Choice | Signature and interaction | Suitable work | Trade-off | Reference pattern |
| --- | --- | --- | --- | --- |
| A. Decision lab | Blue scientific workspace; change collections and compare cash/profit | Finance, teaching, investigation | Needs faithful models and assumptions | [Bartosz](https://ciechanow.ski/mechanical-watch/), [Josh](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/) |
| B. Follow one record | Indigo trace; inspect source, match, decision | ERP, integration, MCP/backend | Can become abstract without a user/output | Interactive systems explanation, applied to these projects |
| C. Field journal | Lilac/burgundy typography; expand decisions/evidence | Consulting, teaching, thoughtful products | Requires authentic concise writing | [Maggie Appleton](https://maggieappleton.com/), [Dennis's project credits](https://dennissnellenberg.com/work/twice) |
| D. City of ideas | Illustrated map; visit finance, memory, learning | Brooks, multidisciplinary identity | Exploration adds effort; retain direct access | [Bruno Simon](https://bruno-simon.com/) |
| E. Product bench | Practical tool; repair mapping and replay event | Operational products and workflows | Fixture polish must not imply production proof | [Rauno's Craft](https://rauno.me/craft), [Devouring Details](https://www.awwwards.com/sites/devouring-details) |

The web report's numbered concepts map to the gallery as follows: A → experimental/explanatory workshop; B → systems explorer; C → editorial journal; D → personal world; E → product gallery.

Awwwards recognizes [Devouring Details](https://www.awwwards.com/sites/devouring-details) and [TWICE](https://www.awwwards.com/sites/twice). TWICE is an agency project associated with Dennis, not his personal homepage. Do not transfer award status to another site/version. Historical Bruno references and research limitations are documented in the web report.

The lesson I take from the sources is to connect the memorable interaction to the creator's specialty. An interaction explaining Boris's actual work would supply more relevant evidence than an unrelated visual effect. That is synthesis, not an objective ranking of the world's best sites.

### Concept tokens

Exploration palettes only; existing application design constraints were not changed.

| Concept | Colors | Type roles | Layout |
| --- | --- | --- | --- |
| A | #dcebf2 sky, #163d59 ink, #7a3f63 plum, #f6fbfe paper, #bcd2df rule, #a96b84 cash | Georgia display, Segoe UI body, Consolas data | Thesis beside financial experiment |
| B | #172b4d navy, #e6eefb white, #b7c6f0 accent, #203859 panel, #5f78a0 rule, #c3cef5 selected | Segoe UI display/body, Consolas trace | Outcome beside record inspector |
| C | #efe7ee lilac, #512f47 ink, #9d4561 accent, #fcf8fb paper, #d5c6d1 shade, #c6aec0 rule | Georgia display/quote, Segoe UI body | Personal thesis beside decision document |
| D | #e7e6f6 mist, #353b6a ink, #89534f dusk, #d5d9ef map, #b2c4e5 river, #59538f pin | Segoe UI display/body, Georgia emphasis | Introduction beside thematic map |
| E | #f2f2ed gray, #3c443b ink, #9e4b21 rust, #ffffff white, #c9cdc3 rule, #e0eee5 state | Segoe UI display/body, Georgia emphasis, Consolas events | Product promise beside operational task |

Their structures come from financial explanation, lineage, judgment, place, and task completion. A and E share an introduction/task arrangement but differ in purpose: understanding a relationship versus completing a workflow.

## Additional content to make it personal

1. **Why I keep building:** one true incident or recurring frustration linked to an artifact.
2. **Now and next:** dated interests, desired work, and the collaboration Boris wants.
3. **A teaching artifact:** cash/profit model, Georgian parsing explanation, or another original lesson.
4. **A decision worth discussing:** immutable inputs, synchronization state, presence/privacy, or TimeLeft's small scope.
5. **An honest evolution:** why one product changed architecture and which constraints remained.
6. **A human result:** approved feedback or observation with context; use a credible task if impact is unmeasured.
7. **A small lab:** two or three artifacts linked to interests, distinguished from production work.

[Maggie](https://maggieappleton.com/), [Paco](https://paco.me/), and [Lynn](https://lynnandtonic.com/work/) offer precedents for linking interests, writing, experiments, and work. They supply approaches, not a personality to copy.

## Interview design tree

The grill-me wrapper points to the grilling workflow. Three root choices are open:

1. Primary audience and desired opportunity.
2. Actual motivation and what Boris wants to be known for.
3. Publication boundaries.

After those, the next frontier is project mix, visual preference, personal meaning/contribution, and authoritative project versions. Later rounds settle demonstration scope, evidence, story, and effort. Do not ask Boris to discover facts already available in source.

First-round questions already sent:

- Who should the portfolio persuade first: employers, clients, or product collaborators? Recommendation: one primary audience chosen from the opportunity actually wanted.
- Which motivation fits: understanding businesses, making useful products, or investigating difficult technology? Recommendation: explain it through a real example; source themes are hypotheses.
- What may be public? Recommendation: synthetic demonstrations and individual approval for client identities. 9T's private-source/data boundary is already explicit.

The final design choice should follow review of the gallery and connection to these root choices. The actual redesign remains pending the interview.

## Verification and handoff

### Interview record — round 1

User answers: “1. employment in recent tech 2. brooks, finance erp, optimo 3. yes 4. yes”.

- Primary outcome: employment in modern technology. Specific role family remains open; do not interpret this as a confirmed AI-only role.
- Projects the user wants to pursue: Brooks, Finance ERP, Optimo. This establishes preference, not personal origin stories or a specific ERP implementation.
- Interpreting answer 3 as acceptance of the recommended synthetic public demonstrations and individual approval for client identities; it is not blanket permission to publish client material.
- Interpreting answer 4 as acceptance of E (Product bench) with B (Follow one record) for technical depth.
- Still open: target role, personal reasons behind each selected project, individual contribution/AI/collaboration boundaries, authoritative Brooks generation and Finance ERP implementation.
- The project mix and visual direction are working choices. Application redesign has not started.

### Interview record — round 2 (2026-10-18)

User answers: “5. financial manager /full stack engineer 6. it brings scaled deep emotional meaning to people, it makes people tied to places. Finance ERP matters to me because it removes analysis problems from people's life; it brings automation of operations that people mustnot be doing; 7. all 8. brooks 9. 9T ERP”.

- Target identity explicitly includes financial manager AND full-stack engineer. Do not substitute an AI-only engineering role or remove the finance-management identity.
- Brooks motivation, supplied by Boris: create deep emotional meaning at scale and connect people to places.
- Finance ERP motivation, supplied by Boris: remove analysis problems and automate repetitive operations people should not have to perform.
- Optimo remains selected; its separate personal motivation was not supplied. Operational automation is a possible connection, not a separately confirmed origin story.
- Ownership: Boris answered “all” to the problem/architecture/implementation/testing/operations scope. Record this as his account; do not invent collaborators, percentages, or an independently verified authorship audit.
- Brooks is the selected product; answer 8 does not resolve implementation generation. Establish product intent from source before asking a version question again.
- Finance flagship: 9T ERP, explicitly selected.
- Settled working direction: employment, financial manager/full-stack engineer, 9T + Optimo + Brooks, E main presentation with B technical depth, synthetic public demos.
- Next decisions: how prominently to present both professional identities; intended human takeaway and demo emphasis for each project; whether the existing control-system exhibit should serve as overview or project evidence.

### Interview record — round 3 (2026-10-18)

User answers: “10 building systems. 11.nostalgic, tied to the place. 12. all of that. 13. yes”.

- Preferred work is building systems. Present finance management and full-stack engineering as the combined capability behind that work, rather than assuming the user wants finance-only management or an AI-only role.
- Brooks emotional priority: nostalgia and attachment to place. Prefer a proposed return-to-a-place/memory scene over an unsupported social-discovery or travel-marketplace story.
- 9T should connect all three requested transformations: less repetitive analysis, trustworthy financial information, and better management decisions. Make that one causal workflow, not three competing demos.
- Interpreting answer 13 as accepting the proposed Optimo stock-change synchronization demonstration with a visible failure/recovery case. Do not invent a separate autobiographical origin story from “yes”.
- Retain E as the presentation direction and B as the deeper explanation layer.
- Prepare a concrete three-project narrative for review. Remaining meaningful choices concern the leading project and the specific nostalgic Brooks scene; avoid repeating settled role/project questions.

### Interview record — round 4 (2026-10-18)

User answers: “14. 9T 15. B”.

- 9T ERP leads the portfolio.
- Brooks's first scene is a memory left by someone important, revealed when the recipient reaches the meaningful place.
- This explicitly supersedes the research-stage recommendation to lead Brooks with a future-self memory.
- The three-project narrative and E/B presentation direction are consolidated in portfolio-narrative-brief.md.
- No further editorial question is currently identified. Final shared-understanding confirmation remains before any application redesign.

### Interview completion (2026-10-18)

Boris answered “yes” to question 16, confirming that the consolidated direction captures his intent. The grilling interview is complete.

The agreed brief is portfolio-narrative-brief.md: financial manager/full-stack engineer focused on building systems; 9T ERP leads; Optimo demonstrates integration and recovery; Brooks evokes nostalgia through a memory from someone important at a meaningful place; E supplies the main presentation and B the technical depth.

Research, project analysis, five concept demos, design selection and the narrative brief are delivered. Application redesign and deployment have not been performed. Do not reopen settled choices without a material reason or a user change.

### Artifact verification

- Added documents and a standalone concept gallery under docs; existing app source was not edited.
- Opened current homepage and synthetic analytics route in a browser.
- Checked keyboard switching across all concepts, finance range calculation, trace decision, journal disclosure, map selection, and simulated sync/replay.
- Checked all five layouts at 390px without horizontal overflow. Desktop screenshots were captured; selected desktop/mobile screenshots were visually reviewed.
- No gallery JavaScript errors were reported. Reduced-motion emulation was enabled for a smoke check. This is not a comprehensive accessibility, device, performance, or pointer audit.
- No builds or project test suites were run for these documents/standalone HTML. No sibling project was executed or changed. Current production operation was not verified.
- Preview: http://127.0.0.1:5173/ ; process session 44628 in this task. Nothing was deployed.
