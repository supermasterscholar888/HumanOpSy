# CLAUDE.md — HumanOpSy (Biohack OS)
Version: 5 | Last updated: 2026-10-03

## 0. How to use this file
- Read order for any new session: this file, README.md, the last entry of docs/SESSION_LOG.md, docs/OPEN_QUESTIONS.md, and then only the documents your task needs.
- You have no memory of earlier conversations. The repository is the source of truth. If a chat message conflicts with the repository, say so instead of guessing.
- This file summarizes the documents so you can orient quickly. It does not replace them. If this file and a document disagree, the document wins, unless a newer amendment supersedes it (see section 14). Whoever changes a document must update this file in the same session.
- Labels used below: "closed" means decided and not to be reopened without strong justification. "Owner decided" means the owner stated it but it is not yet written into the documents. "Claude proposal" or "unconfirmed" means it is only a suggestion. "TBD" means it was never decided.

## 1. Project in 5 lines
1. HumanOpSy (product name: Biohack OS) is an AI-powered "Human Operating System": an intelligence layer that observes, remembers, predicts, reasons, explains and adapts to one person, so it can recommend the highest-value next action.
2. Its universal model is six capability domains, a per-user "Digital Twin" (the system's running model of one person), and eight user-facing layers that map to capability targets.
3. It serves individuals worldwide (not India-only) with no capability loss or only minor, lifestyle-manageable loss. Whether minors are in scope is TBD (OQ-014).
4. It is not a habit tracker, health/fitness/nutrition app, coaching app, wearable dashboard, generic chatbot or medical device. It never diagnoses or treats.
5. The owner is a solo student founder with no team and no budget. The project is in the documentation and architecture phase and no production code exists.

## 2. Owner, tools and workflow
- The owner is a student with no professional experience yet and builds with AI assistance. Explain engineering choices in plain language and give reasons. The owner calls the product a SaaS product, but the business model is paused (section 10).
- The owner wants honest criticism, not agreement. Answers should be detailed but written in clear, complete sentences. The owner has said that fragments, arrows and shorthand make responses hard to understand.
- Tools: claude.ai chat is used for documentation, architecture and planning. Claude Code is used for building code from finalized documents. The owner also discusses ideas with another AI tool (ChatGPT) and pastes its output or a compressed prompt. Engage with the reasoning in those pastes and challenge it.
- Repository: github.com/supermasterscholar888/HumanOpSy, public as of 2026-10-03 (personal-details cleanup is parked, OQ-025). The owner commits through the GitHub web interface and started with no GitHub experience, so explain git steps plainly if asked.
- Claude chat cannot push to GitHub or read private repositories. It reads files from links that the owner pastes into the chat. Raw links have the form `https://raw.githubusercontent.com/supermasterscholar888/HumanOpSy/main/PATH`, where PATH is the file path. Normal GitHub file pages have also worked recently, so either form can be pasted. Fetches sometimes fail with server errors, and only links that appear in the chat can be opened. If a fetch fails, say so and ask the owner to paste the text. Never reconstruct a document from memory.
- A separate side thread explored funding options for the project (Indian government schemes, accelerators and fellowships). It is not part of the product specification and is not stored in the repository. The one-line summary is in docs/SESSION_LOG.md.

## 3. Current phase and status
- Complete (version 1.0): documents 01 to 05, the README and Amendment C (document 06, approved 2026-10-03). A plain-language dictionary PDF exists (repository location TBD).
- The Product Bible review: on 2026-10-03 the owner confirmed all ten review points. Amendment C records the progression decisions and is authoritative. The edits it requires in documents 01, 02 and 04 have not been applied yet.
- In progress: docs/07_amendment_d_scope_and_vision.md is a DRAFT awaiting owner review. It is not authoritative until approved. It covers the coach removal, parked items, global scope, explanation depth, the scope classification and corrections.
- Pending: the consolidation pass (apply Amendments C and D to documents 01 to 04 and the README, producing version 1.1), a revision of document 05, the technical architecture spec, the screen design document, the capability-protocol library, the knowledge graph spec and the build sequence.
- The prototype is an outdated demo of the old habit-list model and must not be used as a base for production.

## 4. Repository map and document index
Structure: README.md and CLAUDE.md at the root; docs/ for the numbered documents, SESSION_LOG.md and OPEN_QUESTIONS.md; prototype/ for the demo.
- README.md: overview, document index, dependency map, session protocol. Partly outdated (OQ-023).
- docs/01_product_bible_v1.md: constitutional product document. Sections: 1 vision, 2 design principles, 3 twelve pillars, 4 user journey, 5 personalization, 6 progression, 7 AI philosophy, 8 future ecosystem, 9 non-negotiable rules, 10 weaknesses. Status: version 1.0, amended by C (approved) and D (draft); edits not yet applied. Depends on nothing.
- docs/02_architecture_v1.md: intelligence architecture. Starts with Appendix A (seven amendments to document 01), then Parts 1 to 12 and a final critique. Status: version 1.0, with known errors (OQ-020). Depends on 01.
- docs/03_human_capability_framework_v1.md: constitutional capability model. Contains the definitions, six domains, hierarchy, maturity model, goal mapping, life stages, Digital Twin representation, decision logic, ten constitutional principles and four self-identified challenges. Status: version 1.0. Depends on 01 and 02.
- docs/04_amendment_b_layer_capability_reconciliation.md: authoritative for layer progression and unlock evidence. Status: version 1.0, amended by Amendment C (its unlock architecture and Layer 3 fallback are superseded). Depends on 01, 02 and 03.
- docs/05_critical_threshold_layer_v1.md: the Safety Filter's numeric thresholds. Status: version 1.0, first draft, NOT physician-reviewed. Depends on 02 and 03.
- docs/06_amendment_c_progression_model.md: Amendment C, progression model v2: layer visibility, eligibility and enrollment, Steady State, baseline placement, counted days and effective compliance, day modes for disruptions, one regression ladder, returning users. Status: version 1.0, APPROVED 2026-10-03, authoritative over documents 01, 02 and 04 where they conflict. Depends on 01 to 05.
- docs/07_amendment_d_scope_and_vision.md: Amendment D, scope and vision: coach marketplace removed, parked items, global by design with regional adapters, explanation depth on demand, the full scope classification, corrections to documents 02 and 03. Status: version 0.1, DRAFT awaiting owner approval. Depends on 01 to 06.
- docs/SESSION_LOG.md: append-only history of working sessions. Created 2026-10-03.
- docs/OPEN_QUESTIONS.md: every unresolved question, conflict and known error, with IDs. Created 2026-10-03.
- prototype/biohack_os.jsx: single-file React demo. Details in section 12.

## 5. Core model (from document 03; closed)
Hierarchy: Capability Domain, then Sub-capability, then Metric, then Protocol, then Habit, then Action. "Skill" is not a level; it is an observable expression of sub-capability development.
Definitions (document 03 section 2 has 18 terms; "Identity" was requested but never defined, OQ-026):
- Capability: a universal dimension along which a human develops, declines or maintains function. Sub-capability: a measurable facet of a domain.
- Capacity: the current functional level of a sub-capability. Potential: the estimated individual ceiling.
- Goal: a temporary, personal desired outcome. Life objective: a longer-horizon version of a goal.
- Habit: a behavior repeated until it needs little effort. Protocol: a structured set of habits and interventions aimed at one sub-capability. Intervention: a specific action, substance or technology that affects a sub-capability.
- Metric: a measurable proxy for a sub-capability. Outcome: the observed result of a protocol. Milestone: a meaningful qualitative shift in a trajectory.
- Skill: a practiced competence. Knowledge: encoded information. Behavior: any observable action. State: a transient condition. Trait: a stable disposition. Performance: actual output in a specific context.
Six domains and their sub-capabilities:
- Biological Regulation: Metabolic Regulation, Neuroendocrine Regulation, Immune Regulation, Autonomic Balance, Cellular Integrity.
- Physical Capacity: Force Production, Endurance, Structural Integrity, Motor Coordination, Physical Resilience.
- Cognitive Capacity: Information Processing, Learning and Plasticity, Attentional Regulation, Executive Function, Interoception.
- Psychological Regulation: Emotional Regulation, Stress Tolerance, Motivational Architecture, Identity Coherence, Cognitive-Affective Flexibility.
- Restorative Capacity: Sleep Architecture, Physical Recovery, Cognitive Recovery, Circadian Entrainment, Stress Recovery Rate.
- Social Capacity: Attachment and Bonding, Communication Capacity, Empathic Accuracy, Cooperative Function, Social Positioning.
Maturity stages, applied to each sub-capability separately: Fragile (small disruptions cause big drops and recovery is slow), Stable (holds up in ordinary life), Robust (performs under real challenge and recovers fast), Antifragile (improves in response to appropriate stress).
Dependency graph: Biological Regulation is the substrate for everything. Restorative Capacity is the universal developmental enabler. Physical and Cognitive Capacity are parallel domains with broad cross-effects. Psychological Regulation decides whether other capabilities are deployed. Social Capacity develops alongside Psychological Regulation.
Constitutional principles (document 03 section 11): I the framework is discovered, not invented; II capabilities are universal and protocols are personal; III goals define priorities, not progression; IV development has no finish line; V interventions serve capabilities and never define them; VI every recommendation traces to a sub-capability; VII uncertainty must be communicated; VIII the framework applies unchanged across all ages; IX the dependency graph must be respected; X the framework is the shared language of every component.
Digital Twin fields per sub-capability: current capacity (as a distribution on a 0 to 100 scale), potential ceiling, trajectory, rate of improvement or decline, historical trend, prediction, evidence, confidence, uncertainty, dependencies and protocol history.

## 6. The eight layers (documents 01, 04 and 06)
Layers are the user-facing names for eight capability-profile targets. Habit lists are default protocols and are not the definition of a layer; two users on the same layer can receive different habits. Document 02 Part 6 also gives internal capability labels for Layers 1 to 4 (Circadian Competence, Metabolic Baseline, Micronutrient Sufficiency, Hormonal Optimization). The user-facing names below stay.
Under Amendment C (approved): windows count "counted days" (days that are not excluded; a day with no log and no declaration counts as zero); a user may stay at any layer (Steady State); layers ahead are readable but cannot be started without evidence of readiness; and a layer that becomes Ready is offered once, not forced.
1. Survival Basics. Domains: Biological Regulation, Restorative Capacity. Targets: wake-time variation of 45 minutes or less over 14 days, average sleep of 7.5 hours or more, morning energy of 3 out of 5 or more. Unlock: 80% over 7 counted days. No bloodwork.
2. Structural Foundation. Domains: Physical Capacity, Biological Regulation, Psychological Regulation. Targets: regular movement, protein of 1.2 g/kg or more, regular meal timing, less compulsive stimulation. Unlock: 80% over 10 counted days.
3. Micronutrient Fix. Domain: Biological Regulation. Targets: vitamin D 30 ng/mL or more, ferritin 15 ng/mL or more, B12 300 pg/mL or more, fasting glucose under 100 mg/dL, CRP under 3 mg/L, TSH in range. Bloodwork is required, and nobody starts Layer 4 without it (Amendment C replaced the conditional advancement in document 04). Unlock: 80% over 14 counted days.
4. Hormonal Optimization. Domains: Biological Regulation, Physical Capacity. Targets: cortisol rhythm, HRV trend not declining over 21 days, resistance training established, energy and motivation of 3.5 out of 5 or more. Testosterone bloodwork is recommended, not mandatory. Unlock: 80% over 21 counted days.
5. Cognitive Stack. Domains: Cognitive Capacity, Restorative Capacity. Targets: sustained focus of 90 minutes or more, self-rated focus of 3.5 out of 5 or more, good cognitive recovery. Unlock: 80% over 21 counted days.
6. Advanced Biohacking. All domains. Targets: HRV data literacy, glucose responses logged for at least 30 meals, one comprehensive bloodwork panel confirming Layer 3 targets. Unlock: 82% over 30 counted days.
7. Longevity Mode. Domains: Biological Regulation (Cellular Integrity), Physical, Cognitive. Targets: VO2max tested or estimated, 40 minutes or more of Zone 2 cardio, adequate sleep-stage data. Unlock: 82% over 30 counted days.
8. Frontier Protocols. All domains at Robust to Antifragile. Entry from Layer 7: 85% over 45 counted days plus a comprehensive assessment. No ceiling and no completion state. Many protocols here are weekly or monthly, not daily; Amendment C scores them against their own cadence.
Eligibility and unlock (documents 04 and 06): behavioral evidence (effective compliance, meaning the average share of each day's prescribed plan completed over the window) plus capability evidence. High compliance without capability evidence triggers a protocol review, not advancement. Each layer has a single threshold; verified data (labs, wearables) counts as stronger evidence.
Layer statuses (internal): Ahead, Ready, Active, Provisional, Established, Rebuilding. Steady State is a user-level choice. By default one frontier layer is active at a time.
Placement: onboarding is a baseline assessment. Placement is provisional with a confirmation window of 7 days for Layers 1 and 2 and 14 days for Layer 3 and above. Without bloodwork, placement stops at "Layer 3, unconfirmed".
Disruptions: the user, the AI or sensors can declare a disrupted day; AI and sensor proposals count for scoring only after the user confirms. Day modes are Full, Reduced and Recovery. Completing an adapted plan counts as a full day, and the disruption is still recorded. Days on which no plan was possible are excluded, with the window stretching by at most 20%.
Regression ladder (Amendment C section 10.2): Notice after 7 counted days below 60%; Stabilize after 14; Rebuild after 21; Step back only after 30 counted days with weakened evidence and no recovery trend. History is never erased. After more than 14 days away the user is re-baselined for 14 days with no automatic demotion.
Maintenance: capabilities achieved at earlier layers must be kept at Stable or above. If one drops, a Maintenance Alert is raised whatever the current layer. The Protocol Generator builds a minimum maintenance set.

## 7. Product principles, rules and pillars (document 01)
Design principles: 1 biological truth over engagement; 2 sequence over speed; 3 mechanism over instruction; 4 precision over comprehensiveness; 5 identity over motivation; 6 adaptation over rigidity; 7 honesty over comfort; 8 privacy as infrastructure; 9 no unnecessary gamification; 10 every screen must justify its existence. Principle 2 was revised by Amendment C (evidence before starting, nobody forced to advance). Principle 3 is revised by the Amendment D draft (mechanism available, never imposed).
Non-negotiable rules: 1 no one starts a layer's interventions without evidence of readiness, and no one is required to start any layer (revised by Amendment C); 2 never contradict a user-reported medical condition without acknowledging it and advising a physician; 3 every core habit needs a documented, peer-reviewed mechanism; 4 at most two unsolicited notifications per day; 5 biological data only personalizes that user's own experience, except for explicit opt-in anonymized research; 6 no cosmetic gamification; 7 every AI response is grounded in the user's actual data; 8 the free tier includes Layers 1 and 2 (parked with the business model, and to be re-examined because users can be placed above Layer 1); 9 regression is always surfaced honestly; 10 the Knowledge Base cites sources.
Twelve pillars: Identity System, Health Profile System, Habit Engine, Layer Progression System, Protocol Engine, AI Coach, Analytics Engine, Knowledge Base, Notifications and Accountability, Subscription and Business Model (parked), Community System (deferred), Admin and Content Platform.
Eight weaknesses and their status: 1 layer boundaries (resolved by Amendment C); 2 habit verification (partly addressed by Amendment C section 7.7, otherwise open); 3 returning users (resolved by Amendment C); 4 supplement access (open, reshaped by regional adapters); 5 non-daily habits in Layers 7 and 8 (resolved for tracking by Amendment C); 6 mental health blind spot and Layer 0 (open, OQ-010); 7 social isolation (deferred); 8 revenue versus science (parked).
User journey as documented: discovery, signup, onboarding (six screens, under four minutes, currently placing everyone at Layer 1), first week, first layer completion, three months, one year, long-term member. Onboarding was revised by Amendment C into a baseline assessment with provisional placement.
AI roles as documented: Coach, Teacher, Planner, Accountability Partner, Analyst. The AI must never diagnose, advise stopping prescribed medication, call a possibly medical symptom "normal", give motivational filler, repeat advice that already failed, ignore the user's stated constraints, or claim certainty it does not have.

## 8. Intelligence architecture (document 02)
- Biology Intelligence Engine: answers "what is the highest-value action this person should take next?" It has seven components: State Estimator, Intervention Evaluator, Constraint Resolver, Protocol Generator, Outcome Predictor, Safety Filter and Explanation Generator.
- Confidence has three parts: state confidence, intervention confidence and outcome confidence. Users see calibrated language: "likely" above 70%, "may" for 50 to 70%, "possible" for 30 to 50%, "some evidence" below 30%.
- Digital Twin domains: Biology (hormonal, nutritional, cardiovascular and metabolic), Behavior (sleep, activity, stimulation), Identity, Psychology, Lifestyle, Medical History and Medications, Protocol and Compliance History, Biomarker Time Series, Seasonality and Circadian. Every field carries a value, a confidence, a last-updated time and a decay rate. Contradictory signals are never silently discarded; they are held as hypotheses until resolved.
- Human State Model: a probability vector over states such as Peak Performance, Growing, Plateauing, Burnout, Overtraining, High Stress External, Illness Recovery, Travel Mode, Low Motivation and High Compliance Consolidation. States are inferred, not observed.
- Decision Engine priorities, highest first: 0 safety; 1 critical biological deficit; 2 foundation integrity; 3 current layer requirements; 4 one within-layer adjustment; 5 predictive intervention. Question strategy: at most one clarifying question per turn, it must be specific, and it must be able to change the recommendation.
- Knowledge Graph: a versioned property graph. Edges carry strength, confidence, evidence tier and valid-from and valid-until times, so superseded science is kept, not deleted.
- Memory has eight layers: working, episodic, semantic, procedural (what works for this person), pattern, identity, research and prediction memory.
- Prediction Engine has five streams: compliance, layer completion timing (survival analysis), burnout risk (logistic regression), protocol success probability and biological outcome trends. Every prediction is stored and later compared with the real outcome.
- Events: everything is an immutable event (behavioral, biological, cognitive and emotional, life, protocol and system events). Current state is always derived from the event history.
- Explainability: four depths (bottom line, why, mechanism, evidence) and seven questions every recommendation must answer (why this, why now, why not something else, which evidence, which user data, which assumptions, how confident), plus a statement of what would change the recommendation.
- Document 02 Appendix A: A1 the Digital Twin is first-class; A2 layers are capability targets; A3 event sourcing; A4 human state is a latent variable; A5 the Safety Filter is a hard constraint with veto power; A6 epistemic humility; A7 population knowledge and individual evidence are kept separate.

## 9. Safety (documents 01, 02 and 05)
- The AI never diagnoses, never advises stopping prescription medication, and never claims medical certainty. If a recommendation conflicts with a reported condition or medication, acknowledge it and advise seeing a physician.
- The Safety Filter runs independently of all other reasoning and has veto power. Tiers: 1 Emergency, 2 Critical, 3 Elevated Concern.
- Tier 1 (for example suicidal ideation or self-harm intent, intent to harm others, psychosis, acute mania, severe eating disorder with medical risk, acute medical emergency): suspend all protocols and coaching, give emergency or crisis information for the user's country (country data TBD, OQ-021), stay present and never end the conversation, and resume normal mode only after the user confirms they have been evaluated.
- Tier 2: pause layer progression, make the condition the sole focus, strongly recommend a clinician, and continue only protocols that are safe alongside it. Tier 3: raise priority, continue normally, recommend monitoring.
- Composite rules: three Tier 3 flags in Biological Regulation count as Tier 2; psychological, sleep and hormonal Tier 3 flags together count as Tier 2; BMI of 16.5 or less, or severe hormonal suppression, blocks resistance and high-intensity training.
- Headline thresholds in document 05 (first draft; document 05 is the only authority, so do not implement from this list): fasting glucose of 126 mg/dL or more on two measurements and vitamin D under 12 ng/mL are Tier 2; average sleep under 5 hours for 7 or more days is Tier 2; ferritin under 10 ng/mL is Tier 2; BMI of 16.5 or less is Tier 2; a PHQ-9-equivalent score of 15 or more for over 2 weeks is Tier 2; any suicidal ideation is Tier 1.
- Supplement doses must not exceed established safe upper limits without explicit medical-supervision acknowledgment.
- Scope: no or minor capability loss only. A loss is major (out of scope) if it meets two or more of four criteria: it prevents independent living; specialist care is the only viable primary intervention; over half of a sub-capability's range is permanently lost; clinical coordination would be the main relationship. Examples: amputation, spinal cord injury, advanced neuromuscular disease, severe organ failure, moderate to severe dementia, active psychosis, eating disorders needing inpatient care, active cancer treatment. Minor loss (in scope, with adapted protocols) includes vitamin and mineral deficiencies, Type 2 diabetes managed by lifestyle, subclinical hormone issues, PCOS, mild anaemia, mild to moderate joint problems, ADHD, early mild cognitive impairment, managed sleep apnea, and mild to moderate depression or anxiety alongside clinical care. "Minor" does not mean ignored. The full classification is written in the Amendment D draft, section 7 (OQ-022), pending approval.
- All document 05 thresholds MUST be reviewed by a qualified physician before any launch. Crisis flows must be reviewed by a human and tested before release.

## 10. Decisions
CLOSED (do not reopen without strong justification):
- Layers are capability targets, not habit lists, and habit lists are personalized default protocols.
- Goals set priorities, never progression. The same framework applies to every goal and life stage.
- Six domains are the minimal complete set, and no seventh exists.
- The dependency order in section 5 must be respected.
- Data is event-sourced and immutable (the conflict with erasure rights is open, OQ-027).
- The eight layer names stay as the user-facing structure, and internally the system reasons in capability language.
- Layer 3 needs objective bloodwork evidence, and Layer 8 has no completion state.
- Every recommendation traces to a sub-capability, uncertainty is always communicated, and there is no cosmetic gamification.
- The Safety Filter is independent and can veto any output.
- Scope is no or minor capability loss.
APPROVED 2026-10-03 AND AUTHORITATIVE (Amendment C, document 06):
- Users are never forced to advance and may stay at a layer (Steady State). Layers ahead are readable in view-only mode, but their interventions cannot be started without evidence of readiness. A Ready layer is offered once and not repeated within 30 days.
- No streaks. Progress is effective compliance over counted days plus capability evidence. A missed day with no declaration counts as zero, and the thresholds already tolerate ordinary misses.
- Anyone (the user, the AI or sensors) can declare a disrupted day. AI and sensor proposals count only after the user confirms. Adapted plans (Full, Reduced, Recovery) count as full days. The disruption is still recorded.
- Onboarding is a baseline assessment with provisional placement (7 days for Layers 1 and 2, 14 days for Layer 3 and above), capped at "Layer 3, unconfirmed" without bloodwork. Conditional advancement past Layer 3 no longer exists.
- One regression ladder (7, 14, 21 and 30 counted days), re-baselining after 14 days away, one threshold per layer with verified data counting as stronger evidence, and non-daily protocols scored by their own cadence.
- One active frontier layer at a time by default.
OWNER CONFIRMED, WRITTEN ONLY IN THE AMENDMENT D DRAFT (binding intent until Amendment D is approved):
- Remove the coach marketplace, the coach tier and the mentorship track. Referral to doctors stays.
- Subscription and business-model work is paused. The community platform is deferred. Corporate wellness, the third-party API and the research platform are parked.
- The product is global. Country-specific labs, laws, units and crisis lines go behind regional adapters.
- Deep explanations appear only when the user asks.
- Steps, sedentary time and heart rate may later inform rest advice. The first build relies on user input.
PARKED (do not design around these yet): pricing and tiers (P-1), community features (P-2), corporate wellness, the third-party API, the research platform, and cleanup of personal details in public files (P-3, OQ-025: the owner chose to take no action).
REMOVED FROM THE VISION: the coach marketplace.
CLAUDE PROPOSALS AWAITING APPROVAL: the nine items in section 11 of the Amendment D draft (OQ-032).

## 11. Known conflicts, errors and open questions
The full list with IDs is in docs/OPEN_QUESTIONS.md. OQ-001 to OQ-008 and OQ-028 to OQ-030 are resolved. Do not treat any recommendation there as a decision until the owner confirms it. Summary:
- Awaiting the owner or open: OQ-027 (erasure rights versus immutable events), OQ-031 (how out-of-scope users are told), OQ-032 (approval of Amendment D), OQ-033 (first launch regions and languages).
- Conflicts between documents: OQ-009 (BMI bands in document 05) is the only one left.
- Undecided design questions: OQ-010 to OQ-019, including the Layer 0 check, the screening instrument, experimental compounds such as peptides, alcohol, minors, how the six-domain profile becomes a simple daily screen, how the habit checklist relates to the single recommended focus, bloodwork access by country, and the tech stack.
- Corrections needed: OQ-020 errors in document 02, OQ-021 India-specific content, OQ-022 scope classification, OQ-026 the missing "Identity" definition (document 03 has 18 definitions, not 19). The Amendment D draft proposes fixes for these four. OQ-023 (README out of date) and OQ-024 (prototype) remain.

## 12. Tech stack and prototype
- Decided at design level (document 02): event sourcing, probabilistic (Bayesian) state estimation, a versioned property-graph knowledge graph, and the language model as a swappable component.
- TBD: production frontend and platform (document 01 describes a mobile app; native, cross-platform or web is undecided), backend, database, authentication, hosting, production LLM provider and model, wearable and lab integrations, analytics. The stack must be chosen in the technical architecture spec before Claude Code builds anything (OQ-019).
- Prototype (prototype/biohack_os.jsx): a single React file using recharts and lucide-react. It has onboarding, a Today tab (progress ring, habit checklist, unlock bar), a Progress tab (seven-day chart and layer map) and a Coach tab that calls the Anthropic API (claude-sonnet-4-6). State lives in memory and resets on refresh. It follows the old habit-list model. Its unlock rule averages only the days that were logged and unlocks after three logged days, which contradicts document 04. It hard-codes personal details about the owner in its AI prompt and layer text (OQ-025). Rebuild it; do not patch it.

## 13. Terminology and style
- Use the document 03 definitions consistently. Say "layer" for the eight user-facing stages and "capability profile target" for what a layer means internally. Do not call layers "stages". Say "protocol" for a structured set of habits and "habit" for a single repeated behavior.
- Say "Tier 1, 2 or 3" for safety levels and never mix them with layer numbers.
- Capitalize Digital Twin, Safety Filter, Decision Engine and Biology Intelligence Engine.
- Measurement units are inconsistent in document 05 (OQ-021). Show both unit systems when a value could be misread.
- User-facing copy is declarative and specific, not motivational (principle 5).

## 14. Working rules for AI collaborators
- Act as a critical reviewer and co-architect, not an executor. Challenge assumptions, say when an idea is unnecessary, risky, premature or over-engineered, and say why a good idea is good.
- For every proposal, check the documents first and state whether it is addressed, partially addressed or not addressed, citing document and section.
- Separate what the documents say, what can be inferred, the owner's assumptions, your recommendation and what is uncertain. Mark undocumented earlier decisions as unknown. Never invent requirements, decisions or history.
- Flag conflicts with existing documents before proceeding. The most recent amendment wins: document 04 supersedes document 01 section 6 and document 02 Part 6; document 05 supersedes any Safety Filter description without numeric thresholds. Appendix A of document 02 amends document 01.
- Never rewrite approved architecture unless the owner asks. Extend it through amendments.
- Prefer the simplest solution that meets documented needs. For each change, state the problem it solves, the cost, what it affects and whether to do it now or later.
- Do not reintroduce parked or removed items (coach marketplace, pricing, community) into new designs. Do not widen scope to major capability loss.
- Review format for owner points: Your Point; What the Documents Say; Assessment; What I May Be Missing; Recommendation (Implement / Implement with modifications / Defer / Do not implement); Impact on the Project; Documentation Changes; Open Questions.
- Do not put the owner's personal health, body or lifestyle details into repository files. Use generic example personas.

## 15. Handoff protocol and conventions
- Documents are finalized and committed before Claude Code builds from them. Code must not build from a document that is under review or has an unresolved conflict listed in docs/OPEN_QUESTIONS.md.
- When Code meets a design question, ambiguity or conflict, it adds an entry to docs/OPEN_QUESTIONS.md (document, section, question) and stops that part instead of guessing.
- Proposed rule, owner to confirm: Code does not edit documents 01 and 03 or any amendment; it proposes changes through OPEN_QUESTIONS.md.
- Proposed conventions, owner to confirm: new documents continue the numbering (06, 07 and so on); amendments are named like 06_amendment_c_progression_model.md; documents state their version and dependencies at the top; commit messages say what changed and why.
- Versioning: every file shows "Version: N | Last updated: date" in its first lines. Living files (README.md, CLAUDE.md, docs/SESSION_LOG.md, docs/OPEN_QUESTIONS.md) use whole numbers that rise by one each time the file changes. Numbered documents use major.minor: drafts are 0.x, an approved document is 1.0, a minor edit raises the second number, and a rewrite of the philosophy raises the first number and only happens when the owner asks. Numbered documents keep a change log at the bottom.
- Updating a file: replace the content at the same path and commit. Never delete and re-add a file, because git keeps every old version in the file's History. Only a major rewrite of a numbered document creates a new file (for example 01_product_bible_v2.md) and moves the old one to docs/archive/. Commit messages name the file and version, for example "CLAUDE.md v4: add versioning rules".
- Storage: README.md and CLAUDE.md sit at the repository root and must keep those exact names. docs/ holds the numbered documents, SESSION_LOG.md and OPEN_QUESTIONS.md. docs/archive/ holds superseded major versions. prototype/ holds code demos.
- Session start (chat): the owner pastes raw URLs for this file, README.md, the last entry of SESSION_LOG.md, OPEN_QUESTIONS.md and the documents the task needs, and states the session goal. Claude confirms what it understood before starting.
- Session end: outputs are committed, the README is updated, OPEN_QUESTIONS.md is updated, and a new entry is appended to docs/SESSION_LOG.md. Chat history is not stored; the log is. Claude chat drafts the entry and the owner pastes it in.

## 16. Next steps
1. RECOMMENDED NEXT TASK: the owner reviews the Amendment D draft (docs/07_amendment_d_scope_and_vision.md), answers OQ-032, and approves it. Then it is committed as authoritative.
2. Consolidation pass: apply the edits from Amendments C and D to documents 01, 02, 03 and 04 in one pass (each becomes version 1.1 with a change log), and update the README (OQ-023).
3. Revise document 05 (BMI bands, units, country crisis lines, alcohol threshold; OQ-009, OQ-013) and send it for physician review.
4. Work through the remaining design questions one at a time (OQ-010, OQ-011, OQ-012, OQ-018).
5. Write the technical architecture spec, including the stack decisions, OQ-027 and OQ-033.
6. Write the screen design document (OQ-015, OQ-016).
7. Only then start building with Claude Code.

## Version history
- Version 1 (2026-10-03): first short draft.
- Version 2 (2026-10-03): expanded to a full project brief.
- Version 3 (2026-10-03): recorded the owner's confirmations and the Amendment C draft.
- Version 4 (2026-10-03): added version numbers, versioning rules and storage structure; renamed the Amendment C file to remove "_v2".
- Version 5 (2026-10-03): Amendment C approved and recorded; Amendment D draft added; layers section rewritten; scope test corrected to "two or more criteria"; link format fixed.
