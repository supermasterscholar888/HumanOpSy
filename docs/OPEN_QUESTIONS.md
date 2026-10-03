# OPEN QUESTIONS
Version: 4 | Last updated: 2026-10-03

This file lists every unresolved question, conflict between documents, and known error in the Biohack OS project. Each item has a stable ID that other files can refer to.

How to use it:
- Claude chat and Claude Code both add new entries here instead of guessing. An entry names the document and section, states the question, and records the status.
- A "Claude recommendation" is only a suggestion. It becomes a decision when the owner confirms it.
- When an item is resolved, move it to the Resolved section with the date and the document that records the decision. Do not delete it, and do not reuse its ID.
- Status values: Awaiting owner, Open, Known error, Parked, Resolved.

---

## A. Awaiting the owner

### OQ-027 — Immutable events versus rights to erase personal data
- Source: Architecture Appendix A3 and Part 10 (events are immutable); the global scope decision; Amendment C draft section 12.
- Status: Open.
- Question: Laws such as the GDPR and India's DPDP Act give people rights to have their data erased. How can the product keep an immutable event history and still let users delete their data?
- Note: Possible approaches include encrypting each user's events so that deleting the key makes them unreadable, or allowing user-requested deletion as a controlled exception. Neither is decided. This should be settled in the technical architecture spec before any storage design.

### OQ-028 — Unanswered disruption proposals
- Source: Amendment C draft section 9.2.
- Status: Awaiting owner.
- Question: When the AI or sensors propose a disrupted day and the user never confirms or rejects it, what happens?
- Draft default: The day is scored against the plan that was actually shown to the user.

### OQ-029 — Numeric defaults in Amendment C
- Source: Amendment C draft sections 5.3, 6.5, 7.5 and 10.
- Status: Awaiting owner. These can be tuned later with real usage data.
- Values: late declaration of an excluded day within 3 days; excluded days may stretch a window by at most 20%; offers do not repeat within 30 days; a user is "returning" after more than 14 days away; the regression ladder at 7, 14, 21 and 30 counted days and the 60% line.

### OQ-030 — Approval of the Amendment C mechanisms
- Source: Amendment C draft section 15 (eleven items).
- Status: Awaiting owner. The amendment is not authoritative until approved.

### OQ-031 — How out-of-scope users are told
- Source: Amendment C draft section 6.3; the scope boundary in CLAUDE.md section 9.
- Status: Open.
- Question: When intake shows major capability loss, what does the product say and offer? For example, it could explain that the product is not designed for their situation, point to clinical care, and perhaps allow read-only education.

## B. Conflicts between documents

### OQ-006 — Regression rules
- Source: Product Bible section 6 versus Architecture Part 6. Amendment B is silent.
- Status: Open.
- Question: Product Bible section 6 warns after 7 days below 60% and enters regression mode after 14 days with a 7-day recovery window. Architecture Part 6 uses 7, 14, 21 and 30 days, with demotion at 30. Which applies, and how does it interact with the owner's "no reset streak" decision?
- Note: The Amendment C draft (section 10.2) proposes one graduated ladder that replaces both versions. Pending owner approval (OQ-030).

### OQ-007 — Layer 8 evidence window
- Source: Product Bible Pillar 4 (30 days) versus Product Bible section 6 and Amendment B (45 days).
- Status: Open. Amendment B is authoritative, so 45 days applies until changed. The Amendment C draft confirms 45 counted days (section 11), pending approval.

### OQ-008 — Verified versus self-reported thresholds
- Source: Product Bible Weakness 2 (75% verified, 85% self-reported) versus Amendment B (flat 80%).
- Status: Open. The Amendment C draft (section 7.7) proposes not adopting the 75% / 85% split and using one threshold with verified data counting as stronger evidence. Pending approval.

### OQ-009 — BMI bands in the Critical Threshold Layer
- Source: Document 05, Metabolic Regulation Tier 3 (BMI 16.5 to 18.0) versus Structural Integrity Tier 3 (BMI 18.5 or less).
- Status: Open.
- Question: Why does the Metabolic band stop at 18.0 when the standard underweight cutoff is 18.5? A user at exactly 18.0 sits on the edge.
- Claude recommendation (unconfirmed): Extend the Metabolic Tier 3 band to 18.5 and re-check every threshold for similar gaps.

## C. Undecided design questions

### OQ-010 — Layer 0 mental-readiness assessment
- Source: Product Bible Weakness 6.
- Status: Open. No later document adopts or rejects it. Document 05 covers psychological thresholds but not an intake screen.

### OQ-011 — Screening instrument for psychological thresholds
- Source: Document 05, Psychological Regulation ("PHQ-9 equivalent", "GAD-7 equivalent").
- Status: Open. The documents do not say which instrument or questions the app would use.

### OQ-012 — Policy for experimental compounds
- Source: Amendment B Layer 8 (peptide log); Product Bible roadmap.
- Status: Open.
- Question: What should the product do about compounds that are unapproved or restricted in some countries, such as research peptides? The options are to exclude them, to give information only, or to allow logging only with clinician involvement. No option has been chosen.

### OQ-013 — Threshold for repeated heavy alcohol use
- Source: Product Bible review, point 9; Document 05 has no alcohol threshold.
- Status: Open. The system needs a rule for when repeated heavy drinking should trigger a safety response.

### OQ-014 — Are minors in scope?
- Source: Human Capability Framework section 7 covers children and teenagers; the Product Bible does not say whether the product serves them.
- Status: Open. Rules on consent and health data for minors differ by country.

### OQ-015 — Turning the six-domain profile into a simple daily screen
- Source: Human Capability Framework, closing challenge 1 (the communication problem).
- Status: Open. This must be solved before the screen design document.

### OQ-016 — Habit checklist versus single recommended focus
- Source: Human Capability Framework section 9 (one primary focus per day) versus the habit checklist in the Product Bible and prototype.
- Status: Open. The relationship between the two is not defined.

### OQ-017 — Bloodwork access by country
- Source: Amendment B (Layer 3 requires bloodwork); global scope decision.
- Status: Open. In some countries bloodwork needs a doctor's order or is expensive. The documents do not say how Layer 3 works there.

### OQ-018 — Remaining Product Bible weaknesses
- Source: Product Bible section 10.
- Status: Open. Weakness 2 (habit verification), 3 (returning users), 4 (supplement access) and 5 (non-daily habits in Layers 7 and 8) are unresolved. Weakness 1 is covered by OQ-004, Weakness 6 by OQ-010, and Weaknesses 7 and 8 are parked.

### OQ-019 — Production tech stack
- Source: CLAUDE.md section 6.
- Status: Open. Frontend and platform, backend, database, authentication, hosting and the production language model are all undecided. They must be chosen in the technical architecture spec before Claude Code builds.

## D. Corrections to existing files

### OQ-020 — Errors in the Architecture document
- Status: Known error. Not yet fixed.
- Part 2 infers a user's skin tone from their location. Skin type should be stated by the user, never inferred.
- Part 6 says methylcobalamin is preferred for South Asian heritage because of MTHFR variants. The evidence does not support this, and it breaks the rule that claims need documented science.
- Part 2 says "Product Engine" where it means "Protocol Engine".

### OQ-021 — India-specific content
- Source: global scope decision.
- Status: Known error. Not yet fixed.
- India is built into Product Bible Pillar 10 (prices in rupees), the discovery stage keyword, Weakness 4 (Indian brands), Architecture Part 2 (a Pune example), and Part 12 (Indian labs as the first integration). Document 05 mixes measurement units and has no country handling for crisis lines.

### OQ-022 — Scope classification is not in a committed document
- Status: Known error. Not yet fixed.
- The four criteria and the longer lists of major and minor capability loss exist only in chat. CLAUDE.md section 7 holds a condensed version, and the README holds a shorter one. The README also wrongly says document 05 contains the scope definition. Commit the full classification into Amendment D.

### OQ-023 — README is out of date
- Status: Known error. Not yet fixed.
- The document 05 entry claims a scope definition it does not contain.
- The "What Comes Next" list is stale.
- The status says the project is ready for the technical architecture spec, but the open Product Bible review blocks that.
- The Product Bible entry lists subscription, community and coach marketplace features that are now parked or removed.
- The decisions and scope sections lack global scope, optional advancement and no reset streaks.
- The index is missing CLAUDE.md, SESSION_LOG.md, OPEN_QUESTIONS.md and the dictionary PDF.
- The session protocol does not mention Claude Code.

### OQ-024 — Prototype
- Status: Known error. Not yet fixed.
- The prototype follows the old habit-list model. Its unlock rule unlocks after only three logged days and ignores days that were not logged, which contradicts Amendment B's five-day minimum. It should be rebuilt, not patched, once the documents are final.

### OQ-025 — Owner's personal details in a public repository
- Source: personal details about the owner appear in Product Bible section 5 and Weakness 6, in Document 05 (Metabolic Regulation), and in the prototype (its AI prompt and layer text). This entry deliberately does not repeat them.
- Status: Open. The repository is currently public.
- Problem: Editing the files will not remove the earlier text from the repository's commit history.
- Options: (a) replace those passages with a generic example persona, and recreate the repository with the cleaned files if removing the history matters; (b) make the repository private, which stops Claude chat from fetching raw URLs unless the owner pastes documents or uses an authenticated integration.
- Claude recommendation (unconfirmed): Option (a), because the workflow depends on public raw URLs and generic personas are better documentation anyway. The owner should decide how much the existing history matters.

### OQ-026 — Document 03 has 18 definitions, not 19, and "Identity" is missing
- Source: Human Capability Framework section 2; the README and earlier summaries say "19 definitions".
- Status: Known error. Not yet fixed.
- Problem: The original brief asked for 19 terms including "Identity". Document 03 defines 18 terms (it added "Sub-Capability" but never defined "Identity"). "Identity" is used elsewhere: the Digital Twin Identity domain, Product Bible principle 5, and the Identity Coherence sub-capability.
- Claude recommendation (unconfirmed): Add a definition of "Identity" in Amendment D, keeping it distinct from Identity Coherence, and correct the count in the README.

## E. Parked by owner decision
- P-1 Subscription and business model (Product Bible Pillar 10, Rule 8, Weakness 8, Architecture critique 6). When work resumes, pricing must not depend on layer position, because users can be placed above Layer 1. The principle that progression cannot be purchased stays.
- P-2 Community platform (Product Bible Pillar 11, Weakness 7, Architecture critique 4). Deferring it accepts a retention risk, because social accountability strongly predicts whether people keep up habits. Social Capacity remains a measured capability and is unaffected.

## Resolved

### OQ-001 — Resolved 2026-10-03
Decision: Yes. Users can read about layers ahead of them in view-only mode, and the app blocks them from starting those layers. Recorded in the Amendment C draft, section 5.1.

### OQ-002 — Resolved 2026-10-03
Decision: Corporate wellness, the third-party API and the research platform are parked. Referral to doctors stays (review point 1). Formal clinical partnerships (Architecture Part 12) were not addressed separately and remain undecided. To be recorded in Amendment D.

### OQ-003 — Resolved 2026-10-03
Decision: The user, the AI or sensors can declare a disrupted day. When the AI or sensors declare one, it is confirmed with, or communicated to, the user. Recorded in the Amendment C draft, section 9.2. The follow-up question about unanswered proposals is OQ-028.

### OQ-004 — Resolved 2026-10-03
Decision: Yes. Provisional placement after onboarding, with a confirmation period of 7 to 14 days. Without bloodwork, placement stops at "Layer 3, unconfirmed". Recorded in the Amendment C draft, section 6.

### OQ-005 — Resolved 2026-10-03
Decision: Amendment C is written first. The owner left the choice to Claude, who recommended C.

## Version history
- Version 1 (2026-10-03): first list, OQ-001 to OQ-025.
- Version 2 (2026-10-03): added OQ-026 and made OQ-025 neutral.
- Version 3 (2026-10-03): resolved OQ-001 to OQ-005 and added OQ-027 to OQ-031.
- Version 4 (2026-10-03): added version numbers.
