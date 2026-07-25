[README.md](https://github.com/user-attachments/files/30376205/README.md)
# Biohack OS — HumanOpSy Repository

> **The world's first AI-powered Human Operating System.**
> Not a habit tracker. Not a health app. Not a coaching platform.
> The intelligence layer beneath all of those — continuously observing, learning, reasoning, and adapting for every individual human.

---

## What This Repository Is

This repository is the single source of truth for the Biohack OS project. Every architectural decision, every product principle, every system specification, and every piece of code lives here. Nothing exists in conversation history, email, or memory. If it is not here, it does not exist.

All future work builds from this repository. All future sessions with AI collaborators start by reading the relevant documents here. All outputs from working sessions get committed here before the session closes.

---

## Project Status

**Current phase:** Constitutional architecture complete. Foundation documents written and reconciled. Prototype built. Ready for technical architecture specification and engineering planning.

**Documents completed:** 5 architectural documents + 1 working prototype

**Documents pending:** Technical architecture spec, database schema, API design, screen design document, go-to-market and build sequence

---

## Document Index

Read documents in this order. Each depends on the ones before it.

---

### 01 — Product Bible v1.0
**File:** `docs/01_product_bible_v1.md`
**What it is:** The constitutional document of the product. Defines what Biohack OS is, why it exists, what problem it solves, and the rules that govern every future decision.
**Read this first.** Every other document traces back to the principles defined here.
**Key contents:**
- Product vision, mission, and 5–10 year roadmap
- 10 design principles (these are laws, not suggestions)
- 12 core product pillars with inputs, outputs, and dependencies
- Full user journey from first discovery to long-term member
- Personalization philosophy
- Progression philosophy
- AI philosophy
- Future ecosystem roadmap
- 10 non-negotiable rules
- 8 identified weaknesses and recommended fixes

**Note:** This document has two formal amendments. Amendment A is embedded in Document 02 (Architecture). Amendment B is Document 04. Both amend the Product Bible and are authoritative where they conflict with it.

---

### 02 — Human Operating System Architecture v1.0
**File:** `docs/02_architecture_v1.md`
**What it is:** The intelligence architecture. Defines how Biohack OS thinks, reasons, remembers, predicts, and adapts. The engineering blueprint for every AI system in the product.
**Depends on:** Document 01
**Key contents:**
- Appendix A — 7 essential amendments to the Product Bible (read before the rest)
- Part 1: What a Human OS actually is and how it differs from every competing category
- Part 2: Biology Intelligence Engine — the reasoning core with 7 internal components
- Part 3: Digital Twin Architecture — 9 biological and behavioral domains
- Part 4: Human State Model — 10 primary states as probability vectors
- Part 5: Decision Engine — priority hierarchy and trade-off resolution
- Part 6: Adaptive Layer System — capability-based progression (superseded in specifics by Document 04)
- Part 7: Knowledge Graph — node taxonomy, edge taxonomy, AI reasoning through the graph
- Part 8: Multi-Layer Memory System — 8 memory types with retention and decay rules
- Part 9: Prediction Engine — 5 concurrent prediction streams
- Part 10: Event-Driven Human Model — event taxonomy and cascade update rules
- Part 11: Explainability Engine — 7-question framework, layered depth model
- Part 12: Future Intelligence Roadmap — 2026 through 2036
- Final Section: 10 innovations, 10 technical challenges, 10 scientific challenges, 10 product risks, 10 competitive advantages, 5 likely wrong assumptions, final architectural critique

---

### 03 — Human Capability Framework v1.0
**File:** `docs/03_human_capability_framework_v1.md`
**What it is:** The universal model of human development. Defines the six fundamental capability domains that every human has at every life stage. This is the language that every component of Biohack OS speaks.
**Depends on:** Documents 01 and 02
**This is a constitutional document.** Nothing in the system may contradict the definitions, domains, or principles defined here.
**Key contents:**
- Opening challenges to the framework's own assumptions
- 19 precise, non-overlapping definitions (Capability, Goal, Protocol, Habit, Metric, Outcome, State, Trait, etc.)
- The 6 fundamental capability domains with full specification:
  - Domain I: Biological Regulation
  - Domain II: Physical Capacity
  - Domain III: Cognitive Capacity
  - Domain IV: Psychological Regulation
  - Domain V: Restorative Capacity
  - Domain VI: Social Capacity
- Explicit argument for why no seventh domain exists
- The capability dependency graph
- The 4-stage maturity model (Fragile → Stable → Robust → Antifragile)
- Goal Mapping Engine with 9 detailed examples
- Life Stage Adaptation across 8 life stages
- Digital Twin representation per sub-capability
- AI Decision Engine logic
- 100-year future expansion design
- 10 constitutional principles (immutable)
- 4 identified contradictions and challenges in the framework itself

---

### 04 — Amendment B: Layer-Capability Reconciliation
**File:** `docs/04_amendment_b_layer_capability_reconciliation.md`
**What it is:** Formal reconciliation of the 8-layer progression system (Product Bible) with the 6-domain capability framework (Document 03). The authoritative specification for how layer progression works.
**Depends on:** Documents 01, 02, 03
**Supersedes:** Product Bible Section 6, Architecture Document Part 6 where they conflict
**Key contents:**
- The two-level abstraction resolution (intelligence level vs. communication level)
- Full layer-capability mapping for all 8 layers:
  - Each layer's primary domains
  - Each layer's capability profile target in 6-domain language
  - What the default protocol habits serve
  - Unlock evidence required (behavioral + capability)
- Critical architectural decisions:
  - Layer names and user-facing descriptions are unchanged
  - Habit lists are default protocols, not layer definitions
  - Layer 3 requires bloodwork as objective evidence (first layer where self-report is insufficient)
  - Layer 8 has no ceiling, no Layer 9, and no completion state
- Updated unlock architecture (behavioral evidence + capability evidence + no-evidence-no-advancement rule)
- Maintenance protocol expressed in capability language

---

### 05 — Critical Threshold Layer v1.0
**File:** `docs/05_critical_threshold_layer_v1.md`
**What it is:** The quantitative implementation of the Safety Filter. Defines the specific measurable thresholds at which sub-capabilities trigger safety-first system behaviors.
**Depends on:** Documents 02 and 03
**This document must be reviewed by a qualified physician before product launch.**
**Key contents:**
- Three-tier threshold architecture:
  - Tier 1 — Emergency (all protocol recommendations suspended, immediate escalation)
  - Tier 2 — Critical (layer progression paused, sole system focus on this condition)
  - Tier 3 — Elevated Concern (elevated priority, monitoring, clinical referral recommended)
- Specific thresholds for every measurable sub-capability across all 6 domains
- Notable thresholds: vitamin D <12 ng/mL → Tier 2; fasting glucose ≥126 mg/dL → Tier 2; average sleep <5hrs for 7+ days → Tier 2; suicidal ideation → Tier 1 immediate
- Three composite threshold rules (biological cascade, psychological-biological convergence, physical capacity safety gate)
- System communication guidelines per tier
- Scope definition: Major vs. Minor capability loss (Biohack OS currently serves Minor only)

---

### Prototype — Biohack OS React App
**File:** `prototype/biohack_os.jsx`
**What it is:** Working prototype of the Biohack OS interface. Demonstrates the layer progression system, daily habit tracking, 7-day progress visualization, and AI coach integration.
**Status:** Functional prototype. Reflects the old 8-layer habit-list model, not the capability-based architecture defined in Documents 03 and 04. Requires redesign to align with current architecture.
**Current features:**
- 3-step personalised onboarding
- Daily habit checklist with layer-specific accent colors
- Progress ring showing daily completion percentage
- 7-day bar chart with 80% unlock threshold visualization
- Layer progression map across all 8 layers
- AI coach tab with Claude API integration and 4 quick-start questions per layer
- Layer unlock ceremony screen
- In-session state persistence

---

## Dependency Map

```
01_product_bible
        │
        ├──── 02_architecture (contains Amendment A to Product Bible)
        │            │
        │            └──── 03_capability_framework
        │                          │
        │                          ├──── 04_amendment_b (reconciles 01 + 03)
        │                          │
        │                          └──── 05_critical_threshold_layer
        │
        └──── prototype (reflects pre-03 architecture, needs update)
```

**Amendment authority:** Where documents conflict, the most recent amendment is authoritative. Document 04 supersedes Product Bible Section 6 and Architecture Part 6. Document 05 supersedes any Safety Filter description that lacks quantitative thresholds.

---

## Scope Boundaries

**Biohack OS currently serves:**
Users with no capability loss, or minor capability loss (Type 2 diabetes in management, vitamin deficiencies, subclinical hormonal imbalances, mild-moderate joint problems, ADHD, mild-moderate depression alongside clinical care, mild-moderate anxiety, burnout recovery, managed sleep apnea, social anxiety, early-stage mild cognitive impairment, and similar conditions where lifestyle optimization is a primary intervention).

**Biohack OS does not currently serve:**
Users with major capability loss (limb amputation, spinal cord injury, advanced neuromuscular disease, severe organ failure, moderate-severe dementia, active psychosis, acute severe eating disorders requiring inpatient care, active cancer treatment, and similar conditions where specialist medical management is the only viable primary intervention).

This scope boundary will be revisited in a future architectural phase.

---

## Working Session Protocol

Every session with an AI collaborator (Claude, ChatGPT, or other) must follow this protocol.

**Session opening:**
Share this README and any documents relevant to the session's scope. State clearly what the session goal is. The AI confirms its understanding of the current project state before any work begins.

**During the session:**
AI collaborators are expected to proactively raise concerns, challenge assumptions, propose improvements, and identify gaps — not just execute instructions. If a proposed direction conflicts with an existing document, this must be flagged before work proceeds.

**Session closing:**
Every output produced must be committed to this repository before the session closes. Conversation history is not a substitute for committed documents. If it is not committed, it does not exist.

**Context sharing:**
When working between multiple AI collaborators, full conversation context (question + AI response + discussion + final prompt) should be shared rather than compressed summaries. Information loss in compression creates architectural drift.

---

## Key Architectural Decisions on Record

The following decisions have been made and should not be reopened without strong justification.

**Capability framework over stage-based progression.** Layers represent biological capability targets, not habit lists. Two users on the same layer may have completely different protocols.

**Goals define priorities, not progression.** The six capability domains are universal. Goals create a vector through the capability space. They do not create new domains or reorder the dependency graph.

**Event sourcing as data foundation.** All biological data is immutable once recorded. Current state is always derived from the event history.

**Eight layer names are permanent user-facing structure.** The narrative arc they provide is architecturally valuable and should not be removed.

**Layer 3 requires bloodwork.** Behavioral compliance alone is insufficient to confirm micronutrient sufficiency. Objective evidence is required.

**Layer 8 has no completion state.** Human development has no finish line. The system never communicates that Biohack OS is complete.

**Six capability domains are the minimal complete set.** Every candidate for a seventh domain either reduces to an existing domain or is an emergent property of their interaction. This has been argued explicitly in Document 03.

**Major capability loss is out of scope for the current phase.** The architecture, Safety Filter thresholds, and protocol system are designed for users with no or minor capability loss.

---

## What Comes Next

The following documents have not yet been written and represent the next phase of architectural work.

**Technical Architecture Specification** — Database schema, API design, service boundaries, infrastructure decisions, and build sequence. Translates the intelligence architecture into engineering specifications.

**Screen Design Document** — Every screen, state, interaction, and transition the user experiences. Must solve the communication problem: how does a six-dimensional capability profile translate into a two-minute morning check-in?

**Go-to-Market and Build Sequence** — What to build first, in what order, with what stack, to get from the current prototype to a real product with real users.

**Capability-Protocol Library** — The structured content layer mapping sub-capabilities to specific protocols, habits, metrics, and interventions. The content foundation for the Protocol Generator.

**Knowledge Graph Specification** — Full node and edge taxonomy with evidence ratings, ready for implementation.

---

*This README is a living document. Update it every time a new document is committed or a significant architectural decision is made. The README is the first thing every future session reads. Keep it accurate.*
