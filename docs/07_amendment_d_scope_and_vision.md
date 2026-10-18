# BIOHACK OS — AMENDMENT D
## Scope and Vision
File: docs/07_amendment_d_scope_and_vision.md | Version: 0.1 | Last updated: 2026-10-03
**Version 0.1 — DRAFT for owner review. Not authoritative until the owner approves it.**

Amends: Product Bible v1.0 (sections 1, 4, 5, 8 and 10; Principle 3; Pillars 2, 5, 6, 10 and 11; Rule 8); Architecture v1.0 (Parts 1, 2, 6, 11 and 12); Human Capability Framework v1.0 (section 2); README.
Depends on: documents 01 to 06.
Resolves: records OQ-002, P-1 and P-2; proposes resolutions for OQ-020, OQ-021, OQ-022 and OQ-026.

---

## 1. Purpose

Amendment C settled how users progress. This amendment settles what the product is, who it serves and where it operates. It records the owner's decisions on the vision, makes the product global by design, makes explanation depth a user choice, commits the scope classification to a document, and corrects known errors in documents 02 and 03.

## 2. Owner decisions implemented here

- The coach marketplace, the coach tier and the mentorship track are removed. Referral to doctors stays.
- Subscription and business-model work is paused. The community platform is deferred. Corporate wellness, the third-party API and the research platform are parked.
- The product is global, not India-specific. Country-specific labs, laws, units and crisis lines go behind regional adapters.
- Deep explanations appear only when the user asks.
- Scope is users with no capability loss or minor capability loss.

## 3. Summary of changes

| Topic | Before | After this amendment |
|---|---|---|
| Coaches | Marketplace, coach tier, mentorship track | Removed; clinical referral stays |
| 2035 vision | Ecosystem of coaches, enterprises, researchers and developers | A personal health intelligence for one individual |
| Corporate wellness, third-party API, research platform | Planned roadmap phases | Parked |
| Pricing and community | Pillars 10 and 11 | Parked and deferred |
| Country | India built into examples and integrations | Region-neutral core with regional adapters |
| Explanation depth | Inferred from behavior; every response cites mechanism | Chosen by the user; mechanism on request |
| Scope | Summary in the README only | Full classification in this amendment |
| Definitions | 18 terms; "Identity" missing | "Identity" added, giving 19 |
| Known errors | Skin tone inferred; unsupported B12 claim; typo | Corrected |

## 4. Vision and ecosystem

### 4.1 What is removed
- The coach marketplace and coach-built protocol stacks (Product Bible section 1, 2035 paragraph; section 8, Phase 4).
- The coach contribution note in Pillar 5 (Protocol Engine, future expansion).
- Coach access in the Pro and Elite tiers (Pillar 10).
- The mentorship track and the certification program (section 8, Phase 6). The certification program is removed as well, because rewarding the completion of all eight layers contradicts Principle IV of the Capability Framework ("development has no finish line") and Amendment C (users are never required to advance).
- "Human coaches remain valuable in the premium tier" (Architecture Part 1) and the Coach Marketplace section (Architecture Part 12).
- In Pillar 6, escalation to "human coaches or medical professionals" becomes escalation to medical professionals only.

The reason is the one the owner gave: the product is a personal optimizer, and anything that adds generic content next to it does not serve that purpose. Protocols are written only by the product and science team, which keeps Rule 3 (every core habit needs a documented mechanism) enforceable.

### 4.2 Clinical referral stays
When the Safety Filter or the AI decides that a user needs professional care, the product directs them to qualified clinical help: a doctor, a laboratory or emergency services, with information that is correct for their country. The product does not sell or broker that care. Formal clinical partnerships (Architecture Part 12, 2032 to 2036) were not decided and remain TBD.

### 4.3 What is parked
Corporate wellness, the third-party developer API and the research platform are parked. They stay in the documents marked "Parked by Amendment D" and nothing is designed around them. If a research use ever returns, Rule 5 still applies: biological data is used only to personalize that user's own experience, except with explicit opt-in consent for anonymized research.

### 4.4 Business model and community
Pillar 10, Rule 8 and Weakness 8 are parked. Pillar 11 and Weakness 7 are deferred. Three constraints are kept for when this work resumes:
- Progression cannot be purchased (as revised in Amendment C).
- Pricing must not depend on layer position, because users can be placed above Layer 1.
- Deferring the community is an accepted retention risk, because social accountability strongly predicts whether people keep up habits. Social Capacity stays a measured capability.

### 4.5 Replacement text for the 2035 paragraph
"In 2035, Biohack OS is a longitudinal personal health intelligence. It brings together many sources of data for one person, such as wearables, laboratory results and, later, genetics and other biomarkers. It adapts as that person moves through life stages, explains every recommendation, and refers the person to qualified clinical care whenever their situation requires it. Its value is personalization for one individual, not content for the many."

## 5. Global by design

### 5.1 Principle
The core system is region-neutral. Anything that depends on a country is supplied by a regional adapter, and nothing country-specific is hard-coded in the core.

### 5.2 What varies by country
Units and laboratory reference ranges; how laboratory tests can be ordered; supplement and drug availability and legal status, including brand names; emergency numbers and crisis lines; health-data privacy and consent law; the age of consent for minors; languages; dietary and cultural customs; wearable and app ecosystems; and whether the product counts as a wellness service or a medical device.

### 5.3 Regional adapters
A regional adapter is a versioned package that supplies the items in section 5.2 for one country or region. A qualified local expert reviews each adapter before the product is offered there. The Architecture already uses adapters for data sources (Part 12), and regional adapters follow the same pattern.

### 5.4 Locale in the Digital Twin
The Lifestyle domain gains three fields: jurisdiction, preferred units and preferred language.

### 5.5 Units
Measurements are stored with their original value and unit. Thresholds are defined in one canonical unit with documented conversion factors, and results are shown in the user's preferred units. The Safety Filter's contraindication database uses active-ingredient names, not brand names, because brands differ by country.

### 5.6 Launch gate (proposal)
The product is not offered in a region until its adapter contains verified emergency and crisis information and has passed local legal review. Until then, the Tier 1 flow cannot be trusted to give correct help.

### 5.7 Examples that mention India
India-specific text in the documents becomes labeled as an example, or is replaced. The places are listed in section 10. Which regions and languages come first is not decided (OQ-033). How Layer 3 works where bloodwork needs a doctor's order or is expensive remains open (OQ-017).

## 6. Explanation depth on demand

### 6.1 Rule
Mechanism is always available and never imposed. This replaces the body of Principle 3 ("Mechanism Over Instruction"), whose name stays.

### 6.2 The four depths
The four explanation levels of Architecture Part 11 stay: the bottom line, the reason, the mechanism and the evidence. By default the user sees the first two. The mechanism and the evidence appear when the user asks, or when the user sets a depth preference. The AI may offer to explain more, but it must not push, and offers are limited so that they do not become nagging.

### 6.3 Who decides
The user decides, through a depth setting. Inferred knowledge level may choose the starting default and nothing else. The setting is stored in the Digital Twin. Its wording is a screen design decision.

### 6.4 Safety is never hidden
Contraindications, warnings and advice to see a doctor always appear in the first two levels, whatever the depth setting.

### 6.5 Traceability stays
Every claim still traces to a documented source (Rule 10) and every recommendation still traces to a sub-capability (Principle VI of the Capability Framework). Depth controls what is shown, not what is true.

## 7. Scope boundary (full classification)

Biohack OS currently serves users with no capability loss or minor capability loss. It does not currently serve users with major capability loss. The owner set this boundary "for now", and it should be reviewed again as the product matures.

### 7.1 The four criteria
A loss is major if it meets two or more of these:
1. It prevents basic independent functioning.
2. Specialist medical management is the only viable primary intervention, and lifestyle optimization is secondary or unsafe without clinical oversight.
3. More than half of a sub-capability's functional range is permanently lost.
4. Serving the person would require clinical coordination as the primary relationship, not merely as a referral channel.
A loss that meets one criterion or none is minor.

### 7.2 Major capability loss (out of scope), by domain
- Physical Capacity: limb amputation, spinal cord injury, advanced ALS or muscular dystrophy, severe multiple sclerosis with significant motor loss, severe COPD or pulmonary fibrosis with more than 50% functional loss, heart failure requiring device support.
- Biological Regulation: active cancer treatment, severe autoimmune disease in an acute systemic flare, complete adrenal insufficiency, Type 1 diabetes requiring intensive medical management as the primary intervention, advanced untreated HIV, severe organ failure.
- Cognitive Capacity: moderate to severe dementia, severe traumatic brain injury with lasting functional loss, severe intellectual disability.
- Psychological Regulation: active psychosis or untreated schizophrenia, acute severe eating disorder requiring inpatient monitoring, severe treatment-resistant depression requiring inpatient care, active severe mania.
- Restorative Capacity: severe untreated narcolepsy with cataplexy, a complete circadian rhythm disorder requiring specialist treatment.

### 7.3 Minor capability loss (in scope, with adapted protocols), by domain
- Physical Capacity: mild to moderate joint problems such as osteoarthritis or tendinopathy, recovery from minor surgery or injury, mild to moderate chronic back pain, mild to moderate obesity, reduced range of motion from a sedentary life or a recoverable injury.
- Biological Regulation: Type 2 diabetes in lifestyle management, vitamin and mineral deficiencies, subclinical hormonal imbalances (such as low-normal testosterone, or mild hypothyroidism on stable medication), PCOS, mild to moderate metabolic syndrome, mild iron-deficiency anaemia, mild to moderate inflammatory conditions.
- Cognitive Capacity: ADHD, early mild cognitive impairment, post-viral cognitive effects with an improving trajectory, stress-related cognitive impairment, age-related slowing without dementia.
- Psychological Regulation: mild to moderate depression or anxiety alongside appropriate clinical care, burnout in recovery, adjustment disorders, mild to moderate PTSD with clinical support running in parallel.
- Social Capacity: social anxiety, loneliness or extended isolation, mild autism spectrum traits without major impairment of independent functioning.
- Restorative Capacity: mild to moderate insomnia, circadian disruption from shift work or travel, managed sleep apnea, stress-related sleep disruption.

### 7.4 What "minor" means
Minor does not mean ignored. A user with managed Type 2 diabetes receives protocols calibrated for insulin sensitivity. A user with ADHD receives a protocol structure that accounts for attentional dysregulation. Minor means the product can be the primary guide, with clinical referral for monitoring.

### 7.5 Borderline cases (proposal)
When it is unclear whether a condition is minor or major, the product asks the user to confirm with their clinician before it starts any protocol the condition could affect. How out-of-scope users are told is still open (OQ-031).

## 8. Corrections to earlier documents

### 8.1 Errors in the Architecture document (OQ-020)
- Part 2 infers a user's skin tone from location. Skin type or sun-exposure habits must be stated by the user and never inferred.
- Part 6 says methylcobalamin is preferred for South Asian heritage because of MTHFR variants. The evidence does not support this, so the claim is removed. Which form of B12 to recommend is decided by the Protocol Generator from lab results and documented evidence.
- Part 2 says "Product Engine" where it means "Protocol Engine".

### 8.2 The missing definition of "Identity" (OQ-026)
Document 03 defines 18 terms, and "Identity" was never defined. Proposed definition: **Identity** is a person's stable sense of who they are, including their values, roles and self-concept, as the person states it. The system treats identity as user-stated and never infers it. It differs from Identity Coherence, which is a sub-capability measuring how stable and consistent that sense of self is, and from a Trait, which is a stable disposition. With this addition, document 03 has 19 definitions and the README's count becomes correct.

## 9. Effects on the rest of the system
- **Protocol library:** written and maintained only by the product and science team. Coaches contribute nothing.
- **Digital Twin:** new Lifestyle fields (section 5.4) and a depth preference.
- **Safety Filter:** contraindications use active-ingredient names, and emergency information comes from the regional adapter.
- **Critical Threshold Layer:** its units and crisis-resource wording are revised separately (document 05 revision, to be reviewed by a physician).
- **Knowledge Graph:** no coach node type is needed.
- **Notifications and analytics:** unchanged.
- **Roadmap:** the 2035 vision, Phases 4 to 6 and Architecture Part 12 shrink as described in section 10.

## 10. Exact edits to earlier documents
**Product Bible**
- Section 1, 2035 paragraph: replace with the text in section 4.5.
- Pillar 2: replace the named laboratories with "regional laboratory integrations (for example Thyrocare in India, Labcorp in the United States)".
- Pillar 5, future expansion: delete the coach-contribution sentence.
- Pillar 6: change the escalation text as in section 4.1.
- Pillar 10: add the banner "Parked by Amendment D"; remove coach access from the tiers and mark the rupee prices as an example.
- Pillar 11: add the banner "Deferred by Amendment D".
- Section 4, Stage 0: replace the India-specific search keyword with a neutral one; Stage 7: remove the community contribution.
- Section 8, Phases 4 to 6: remove the coach marketplace and the certification and mentorship track; mark corporate wellness, the research platform and the API ecosystem "Parked".
- Section 10: mark Weakness 4 as reshaped by regional adapters, Weakness 7 as deferred and Weakness 8 as parked.
- Principle 3 body and the Section 5 paragraph on explanation depth: replace with section 6.1.
- Rule 8: add "Parked by Amendment D".
**Architecture**
- Part 1: delete the sentence about human coaches in the premium tier.
- Part 2: replace the skin-tone inference with a user-stated field; label "Pune, India" and the named brands as examples; fix the typo; update Component 7 for section 6.
- Part 6: delete the MTHFR claim.
- Part 11: add the depth setting and section 6.4.
- Part 12: delete the Coach Marketplace section; mark the Research Platform and Third-Party Developer API parked; relabel the Indian laboratory integration as one example of a regional adapter; mark clinical partnerships TBD.
**Human Capability Framework:** add the definition in section 8.2 to section 2.
**README:** correct the items listed in OQ-023 and add a document index entry for each new file.
**Process:** these edits and those listed in Amendment C section 13 are applied together in one consolidation pass. Documents 01, 02, 03 and 04 then become version 1.1, each with a change log.

## 11. For owner confirmation
These decisions go beyond what the owner has already stated:
1. Remove the certification program as well as the mentorship track (section 4.1).
2. The wording of clinical referral, with formal clinical partnerships left TBD (section 4.2).
3. The replacement 2035 paragraph (section 4.5).
4. The launch gate: no region without verified emergency and crisis information (section 5.6).
5. Store measurements with their original unit and define thresholds in one canonical unit (section 5.5).
6. Default depth of two levels, with safety warnings always shown (sections 6.2 and 6.4).
7. The definition of "Identity" (section 8.2).
8. The borderline-case rule, and the "two or more criteria" test for major loss (sections 7.1 and 7.5).
9. Applying all edits in one consolidation pass that produces version 1.1 documents (section 10).

Open items: which regions and languages launch first (OQ-033), bloodwork access by country (OQ-017), minors (OQ-014), how out-of-scope users are told (OQ-031), and formal clinical partnerships (TBD).

## Change log
- Version 0.1 (2026-10-03): first draft, awaiting owner review. Becomes 1.0 when approved.
