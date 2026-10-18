# Portfolio web research: five directions for Boris

Research date: 2026-10-17. Scope: primary-source web research and proposed presentation concepts. This document does not select projects from the APPS directory, establish Boris's personal motivations, implement prototypes, or change application code. Project examples below are conditional demonstration recipes, not claims about existing applications.

## Recommendation and evidence standard

Build a portfolio around a clear point of view about software, supported by a few inspectable projects. Give each featured project a short explanation, a meaningful demonstration, and an optional technical account. Distinctiveness should come from the work Boris chooses, the problems he cares about, and the interactions that explain them.

This is a synthesis, not a measured claim that one design increases hiring or sales. Awwwards supplies evidence of recognized design craft. Its published evaluation weights are design 40%, usability 30%, creativity 20%, and content 10%; these are not measurements of a portfolio's effectiveness with employers or clients. [Awwwards evaluation system](https://www.awwwards.com/about-evaluation/)

NN/g recommends selecting work aligned with future goals, presenting a small set of detailed case studies, and explaining the problem, contribution, decisions, and result. Its advice draws on UX hiring research, so applying it to software engineering is an explicit adaptation. [NN/g: 5 Steps to Creating a UX-Design Portfolio](https://www.nngroup.com/articles/ux-design-portfolios/)

My provisional preference is direction 2, **Product demo gallery**, with the deeper explanations from direction 3. It would let visitors experience useful software and then inspect the reasoning behind it. That preference must be revisited after the project inventory and interview: a backend specialist, product founder, creative developer, and financial systems consultant need different leading evidence.

## What the first-party examples actually demonstrate

These are useful references, not an objective ranking of the world's best portfolios. Observations concern accessible page content and the creators' explanations; they are not claims that every interaction was tested.

| Reference | Directly observed evidence | Transferable lesson | Boundary |
| --- | --- | --- | --- |
| [Dennis Snellenberg](https://dennissnellenberg.com/) and [TWICE case](https://dennissnellenberg.com/work/twice) | The homepage states his role and lists selected work with services. TWICE identifies his interaction/development role, credits the designer, and links to the live work. | Let visitors quickly identify the work and its author; make individual contribution explicit. | The relatively sparse case text would need more engineering reasoning for Boris's technical projects. |
| [Dennis on Awwwards](https://www.awwwards.com/dennissnellenberg/) and [TWICE on Awwwards](https://www.awwwards.com/sites/twice) | His profile lists recognized work. TWICE is marked Site of the Day, March 31, 2024, with references to its work, case content, and project detail elements. | Presentation of project details can itself receive careful design attention. | TWICE is an agency site, not a personal developer portfolio; recognition does not establish commercial outcomes. |
| [Brittany Chiang](https://brittanychiang.com/) | A specific professional introduction leads into experience, projects, and writing. Project entries explain functionality and connect to external artifacts. | A visitor should understand what software does before needing to decode its technology stack. | No Awwwards recognition is asserted here; published popularity figures were not independently verified. |
| [Rauno Freiberg's Craft](https://rauno.me/craft) | The work collection distinguishes prototypes, production links, and essays. | Label the maturity and kind of evidence visitors are opening. | A prototype does not prove production reliability. |
| [Devouring Details](https://devouringdetails.com/) and its [Awwwards entry](https://www.awwwards.com/sites/devouring-details) | The creator describes an interactive reference manual, prototypes, and downloadable components. Awwwards records an Honorable Mention on July 29, 2025. | Pair a visible behavior with the principles and implementation that explain it. | This is a commercial educational product linked from a personal portfolio. Paid content was not purchased or reviewed. |
| [Paco Coursey](https://paco.me/) and [Craft](https://paco.me/craft) | Projects have concise descriptions; the Craft collection groups interaction examples. A personal section explains present interests. | Production work, focused experiments, and personal interests can be distinct but connected. | Current employment and project adoption are not evaluated here. |
| [Bartosz Ciechanowski: Mechanical Watch](https://ciechanow.ski/mechanical-watch/) | The article explains a mechanism through staged demonstrations, adjustable parameters, color references, and a global animation pause. | Make an otherwise hidden system understandable through controlled interaction. | This is an explanatory essay, not a hiring portfolio study. |
| [Josh W. Comeau: Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/) | The author presents technical explanations with interactive examples. | Let readers test the claim or relationship being explained. | Interactive teaching is a precedent, not proof that every project needs a custom simulation. |
| [Bruno Simon](https://bruno-simon.com/) | The site invites visitors to explore a drivable world. It exposes input instructions, quality settings, behind-the-scenes material, devlogs, and source links. | The portfolio can be a substantial work sample when its medium matches the creator's specialty. | This demanding experience is not automatically appropriate for a business software audience. |
| [Lynn Fisher's work](https://lynnandtonic.com/work/), [archive](https://lynnandtonic.com/archive/), and [2025 refresh case study](https://lynnandtonic.com/thoughts/entries/case-study-2025-refresh/) | The work spans personal interests and web experiments. The archive preserves multiple versions; the refresh essay explains the concept and implementation. | Personal curiosity becomes credible when it produces artifacts and documented decisions. | Her specific annual redesign ritual and visual treatment should not become Boris's borrowed identity. |

For historical Awwwards context, its [2019 archive listing](https://www.awwwards.com/websites/%23993333/?page=61) identifies Bruno Simon Portfolio with Developer Award and Site of the Year labels. This is evidence about the historical submission, not an award claim for the current live version. The individual submission page could not be fetched reliably.

## Five distinct concepts to choose between

The layouts, palette applications, and demo scripts here are original proposals. References establish the underlying approach; they are not templates to reproduce. The existing repository guidance favors slate, emerald, and sapphire, so these concepts can be explored within that palette before considering a separate identity change.

### 1. Editorial journal — “Why I build”

**Primary signal:** Boris has judgment, a coherent direction, and stories worth reading.

**References:** [Dennis's selected work](https://dennissnellenberg.com/), his [TWICE case](https://dennissnellenberg.com/work/twice), and [Lynn's documented refresh](https://lynnandtonic.com/thoughts/entries/case-study-2025-refresh/). Awwwards context comes from [TWICE's recognized case presentation](https://www.awwwards.com/sites/twice).

**Proposed design:** A spacious page with a strong typographic hierarchy, numbered project chapters, restrained sapphire rules, and emerald evidence labels. A brief personal thesis leads into three substantial stories. The opening image is a real project artifact with a caption explaining its significance. Ordinary scrolling and direct links preserve fast navigation.

**Concrete demo to review:** The homepage introduces one question Boris cares about. Selecting a project opens a chapter with the problem, his contribution, a before/after workflow, and an inline demonstration. A visitor can expand one decision to see the alternative considered, the constraint, and the evidence behind the choice.

**How projects appear:** A useful result leads each case. Annotated screenshots or a short recording demonstrate the workflow; an optional engineering note explains one consequential decision.

**Best fit:** Consulting, business-facing development, financial technology, or roles where explaining decisions matters.

**Tradeoff:** Writing and evidence quality carry the concept. If the material is generic, typography alone will not make it distinctive.

### 2. Product demo gallery — “Try what I make”

**Primary signal:** Boris builds software whose usefulness visitors can experience.

**References:** [Rauno's Craft collection](https://rauno.me/craft), [Devouring Details](https://devouringdetails.com/), and [Brittany's project descriptions](https://brittanychiang.com/). The [Devouring Details Awwwards entry](https://www.awwwards.com/sites/devouring-details) establishes recognition for the related interactive product, not for Boris's proposed layout.

**Proposed design:** A slate workspace with a few generous product panels. Each panel includes a plain-language problem, one real interface, and one named action such as “Reconcile an example payment.” Emerald indicates completed steps; sapphire indicates selectable paths. Visitors open one demo at a time.

**Concrete demo to review:** Select a project, load a prepared fictional scenario, complete a short task, and inspect the changed output. Three visible controls provide “Try the task,” “Watch the walkthrough,” and “Read the case.” After completion, the interface explains what happened and identifies the part Boris built.

**How projects appear:** Show one complete value-producing path per flagship application. A reset returns the scenario to its starting state. Demonstrate an important validation or recovery state after the main path when it adds evidence.

**Best fit:** Full-stack applications, tools, dashboards, workflow automation, and products with strong observable behavior.

**Tradeoff:** A credible demo needs prepared data, stable behavior, and a useful task. A decorative interface reconstruction must be labeled a simulation; it cannot establish that the underlying system works.

### 3. Systems explorer — “See how it works”

**Primary signal:** Boris understands dependencies, failure, and technical tradeoffs.

**References:** [Bartosz's staged mechanism explanation](https://ciechanow.ski/mechanical-watch/), [Josh's interactive technical guide](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/), and [Paco's concise project index](https://paco.me/). These are first-party technical precedents; no Awwwards award is claimed for them.

**Proposed design:** A legible technical notebook with an ordinary project index and optional system diagrams. A request or business event becomes the unit of exploration. Diagrams have named components, a legend, an equivalent text sequence, and a clear connection to a user result.

**Concrete demo to review:** Open a project and trigger a sample event. Step through validation, persistence, downstream work, and the resulting interface. Toggle one simulated failure, observe the recovery, and open a note explaining the design choice. The diagram stops while visitors read.

**How projects appear:** Place the user outcome before the architecture. Back a system explanation with a reproducible request/response example, representative test evidence, or a measured benchmark that names its conditions. Clearly distinguish an illustrative trace from an observed trace.

**Best fit:** Backend services, integrations, infrastructure, data pipelines, and complex operational systems.

**Tradeoff:** A technical map can become a wall of jargon. Every visible component must help answer how the software achieves a relevant result. Attractive simulated telemetry cannot prove production operation.

### 4. Personal world — “Explore what drives me”

**Primary signal:** Boris's interests form a recognizable, coherent identity.

**References:** [Bruno's explorable portfolio](https://bruno-simon.com/), [Lynn's interest-driven projects](https://lynnandtonic.com/work/), and [Paco's personal introduction](https://paco.me/). Bruno's historical Awwwards listing is linked above; the current experience was reviewed independently.

**Proposed design:** An illustrated or spatial map based on Boris's actual interests, established during the interview. Places represent questions he pursues, with projects as evidence at each destination. A conventional “Selected work” index remains immediately available. The first version could use lightweight HTML/SVG; 3D is justified only if it demonstrates a skill Boris wants to sell.

**Concrete demo to review:** Choose an interest on the map, read a short first-person explanation, then open a related project and complete its central task. Return to the map to see another connection. The same content is available as a readable list on mobile and with reduced motion.

**How projects appear:** Each place joins three facts: a personal motivation, a software artifact, and a decision the artifact enables. Personal details must be specific and supplied by Boris, rather than inferred from folder names.

**Best fit:** Multidisciplinary work and a career narrative genuinely shaped by several connected interests.

**Tradeoff:** Invented symbolism can obscure the work. Choose this only if the metaphor explains Boris more clearly than a direct introduction would.

### 5. Experimental workshop — “Watch me investigate”

**Primary signal:** Boris has curiosity, taste, and the discipline to turn questions into working experiments.

**References:** [Lynn's version archive](https://lynnandtonic.com/archive/), her [concept-to-implementation account](https://lynnandtonic.com/thoughts/entries/case-study-2025-refresh/), and [Paco's interaction studies](https://paco.me/craft). [Bruno's technical notes](https://bruno-simon.com/) supply a further example of explaining an ambitious personal artifact.

**Proposed design:** A workshop index of short investigations, each centered on one question. An experiment has a working control, a prediction, an observable result, and a concise reflection. Slate surfaces, sapphire annotations, and emerald findings provide continuity without borrowing the references' identities.

**Concrete demo to review:** Open a small experiment, change a parameter, compare the result, then reveal the implementation decision and limitation. A separate “Shipped work” link connects experimental skill to a substantial project. The homepage features one signature experiment rather than running many animations simultaneously.

**How projects appear:** Clearly separate experiments, prototypes, and production work. Publish an instructive failed approach where it demonstrates sound judgment. Connect an experiment to a real product improvement when evidence supports the connection.

**Best fit:** Creative development, interaction engineering, visualization, developer tools, and teaching through software.

**Tradeoff:** Many charming fragments can leave visitors uncertain whether Boris can finish a product. Keep completed applications prominent and give each experiment an explicit purpose.

### Comparison

These are editorial judgments, not empirical scores or implementation estimates.

| Direction | Visitor's main action | Strongest evidence | Main content requirement | Relative demonstration effort |
| --- | --- | --- | --- | --- |
| 1. Editorial journal | Read a clear project story | Decisions and outcomes | Strong writing and authentic artifacts | Moderate |
| 2. Product demo gallery | Complete a useful task | Working product behavior | Prepared scenarios and reliable demos | Moderate to high |
| 3. Systems explorer | Trace an event and change a condition | Technical reasoning and recovery | Accurate system explanations and reproducible evidence | High |
| 4. Personal world | Follow a personal interest into a project | Identity connected to useful work | A truthful personal narrative | High if spatial/3D; lower with a simple illustrated map |
| 5. Experimental workshop | Manipulate and compare | Curiosity and implementation craft | Focused experiments with reflections | Moderate to high |

## A clear answer to “How should I demonstrate projects?”

**Recommended format:** Show a specific person facing a specific problem; let the visitor perform the smallest meaningful task that resolves it; reveal the resulting change; then explain Boris's contribution and the evidence that supports it.

Use three levels of detail: a project summary, a task demonstration, and a deeper case study. This adapts progressive disclosure: prioritize essential information and make specialized detail available on request. [NN/g: Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)

The following demonstration package is my proposed application of that principle and the first-party precedents above. Its timings and content sizes are working design targets, not researched universal rules.

1. **Summary:** Name the user, problem, project status, and Boris's role. Add one real output and a descriptive link. A practical target is something understandable in roughly 15 seconds.
2. **Task:** Provide a prepared scenario that reaches a meaningful result in about 30–90 seconds. Show the starting state and clearly explain what the visitor is trying to achieve.
3. **Result:** Show the changed state and why it matters. If there is a measured outcome, include the measurement's provenance. If there is no outcome measurement, say what the demo proves and what remains unvalidated.
4. **Case:** Explain a meaningful constraint, a considered alternative, the chosen approach, and a limitation. Include relevant screenshots, a technical artifact, and credits. This extends NN/g's case-study structure to engineering work. [NN/g portfolio guidance](https://www.nngroup.com/articles/ux-design-portfolios/)
5. **Fallback:** Provide a user-controlled recording or annotated screenshots alongside the interactive version. Identify recordings, simulations, and live demonstrations distinctly.

### Choose the demonstration according to the project

These are conditional recipes for the later repository audit. Feature names must be replaced with capabilities actually verified in the chosen project.

| Project type | Visitor task | What the result demonstrates | Useful supporting artifact |
| --- | --- | --- | --- |
| Operational application or ERP | Follow a fictional order through its supported workflow | Consistency between the action and resulting records/status | State transitions, role boundaries, and a relevant test |
| Financial model or dashboard | Change an assumption and compare the affected outputs | Understanding of the relationship between inputs and decisions | Assumption definitions and a reproducible calculation; outcomes clearly labeled illustrative |
| Integration or automation | Process one prepared event and inspect its output | Correct mapping, validation, and any supported duplicate/failure handling | Sanitized request/response, event sequence, and recovery evidence |
| AI application | Run a prepared input and inspect an output against a stated criterion | The application's actual useful capability and known failure modes | A small disclosed evaluation set, examples of failures, and measured latency/cost only if recorded |
| Developer tool or infrastructure | Complete a real setup/task, or inspect a recorded deployment/recovery | Reproducibility and operational reasoning | Public-safe configuration excerpt, measured conditions, and a reproducible command |
| Visualization or interaction study | Change one parameter and compare the result | Understanding of a relationship and craft in communicating it | Explanation of the mechanism and its limitations |

For demonstrations requiring private accounts, payments, or sensitive records, my recommendation is a prepared fictional scenario that preserves the important behavior. If recreating the backend would misrepresent the work, use a labeled recording and explanatory artifacts instead. These are presentation recommendations, not claims that every source portfolio uses account-free demos.

### Evidence must match the claim

Keep production results, controlled measurements, estimates, and illustrative calculations separate. A faster demo does not establish time saved across a business; passing tests do not establish continuous uptime; a simulated failure animation does not establish tested recovery. A performance comparison should identify the versions, device/environment, dataset, method, and measurement date. These are proposed reporting rules for Boris's portfolio.

## What to add beyond project cards

The following additions are proposed content, informed by the examples; they require Boris's own answers and artifacts.

| Addition | Why it belongs | Concrete presentation |
| --- | --- | --- |
| A concise personal thesis | Gives the work a coherent purpose | One sentence naming the problems Boris wants to solve, supported by selected projects |
| A specific account of motivation | Makes passions inspectable | Explain a recurring real-world question and link to something built to investigate it |
| Current direction | Makes goals explicit | State the work Boris wants to do next and connect it to an ongoing investigation |
| Contribution and collaboration | Establishes ownership | Name responsibilities, collaborators, and what Boris personally delivered for each case |
| One decision worth discussing | Demonstrates judgment | Present the constraint, an alternative, the choice, and the consequence |
| One limitation or failed approach | Demonstrates reflection | Explain what failed, how it was detected, and what changed |
| A compact lab or writing collection | Makes sustained curiosity visible | Publish a few useful experiments or explanations connected to the main work |
| A clear next action | Converts interest into an appropriate conversation | Describe the desired collaboration and provide a direct contact path |

Paco's introduction and Lynn's work index provide precedents for connecting interests with concrete output; Rauno's collection provides a precedent for differentiating experiments from production. Those observations support the content strategy, but they do not establish what Boris's interests or future goals are. [Paco](https://paco.me/), [Lynn](https://lynnandtonic.com/work/), [Rauno](https://rauno.me/craft)

## Performance and accessibility constraints for every concept

These apply to the eventual design, not as claims about the current portfolio or the example sites.

- Keep project identity, purpose, and navigation available before loading optional demos. Use poster images and user-controlled video loading. Do not lazy-load a hero image/video that is the Largest Contentful Paint candidate; defer below-the-fold media instead. [web.dev: Lazy loading video](https://web.dev/articles/lazy-loading-video)
- Target LCP at or below 2.5 seconds, INP at or below 200 milliseconds, and CLS at or below 0.1 at the 75th percentile, evaluated separately for mobile and desktop. Use lab checks during development and field measurements when sufficient real traffic exists. These are Google's published thresholds, not measured results for this project. [web.dev: Web Vitals](https://web.dev/articles/vitals)
- Make project selection and demonstrations usable with a keyboard. Do not require mouse-only hover or spatial navigation for essential content. WCAG 2.1.1 is Level A and has an exception for functions whose underlying input depends on the path of movement; an ordinary portfolio index should not depend on that exception. [W3C: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- Honor reduced-motion preferences and provide a way to disable nonessential interaction animation. The cited animation criterion is Level AAA; this is a deliberate design target, not a claim that it is a Level AA requirement. [W3C: Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
- Provide pause/stop/hide for applicable automatically starting movement lasting more than five seconds alongside other content. Auto-updating information has its own control requirement without that five-second exception. [W3C: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- Caption prerecorded synchronized audio/video where required; meaningful audio information should be available visually. A transcript is useful but does not generally replace synchronized captions. [W3C: Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html)

## Questions for the project-selection interview

These are proposed prompts for the subsequent grilling interview, not answers inferred from the websites.

1. Who is the primary visitor, and what exact opportunity should the portfolio produce?
2. Which three things should that person remember about Boris after leaving?
3. Which project best supports work Boris wants to do again, and which impressive project would attract work he no longer wants?
4. For each candidate, what did Boris personally build, what can be shown, and what evidence can someone inspect?
5. What single task would let a visitor understand each application's value without a spoken explanation?
6. Which decisions distinguish the work from a competent tutorial implementation?
7. Which personal interest has repeatedly produced actual work, rather than only appearing in biography text?
8. What outcome is measured, what is only estimated, and what is still unknown?
9. What should the visitor still understand if they skip animation, video, and the interactive demo?
10. Which of the five directions best expresses the desired next chapter, and what tradeoff is Boris willing to accept to achieve it?

## Limitations and verification

- Applicable AGENTS.md files were checked at the repository, docs directory, and ancestor locations; none were found. Existing CLAUDE.md guidance was read. Only this research file was added.
- The wider APPS directory was not audited in this research task. No named project is ranked or described as production-ready here.
- Research used primary publisher pages, creator-owned sites, and official W3C/web.dev guidance. Third-party roundup claims were not used as evidence.
- Several individual Awwwards pages and the portfolio category landing page timed out or were inaccessible through the research tool. Accessible publisher pages included its evaluation system, Dennis's profile, TWICE, and Devouring Details. The Bruno historical archive was available through the search index; its individual submission page remained unavailable.
- No award is asserted for Brittany, Paco, Bartosz, Josh, or Lynn in this report. A recognized creator's profile is not evidence that every version of their personal website won an award.
- HTML content and first-party descriptions were reviewed. No complete visual/browser interaction audit, mobile device test, performance benchmark, accessibility conformance assessment, source-code audit of the reference sites, or conversion study was performed. Award media were not treated as proof of current live behavior.
- The five alternatives are research-backed concepts and concrete demonstration storyboards, not implemented visual demos. Their effectiveness for Boris must be evaluated against the interview and actual project evidence.
- Source pages can change. Dates and statuses above reflect the fetched page content on the research date. A creator's claims about adoption or business impact have not been independently validated.
