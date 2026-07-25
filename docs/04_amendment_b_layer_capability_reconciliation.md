# BIOHACK OS — PRODUCT BIBLE AMENDMENT B
## Layer-Capability Framework Reconciliation
**Version 1.0 — Architectural Reconciliation Document**
*Amends: Product Bible v1.0 (Sections 3 and 6) and Architecture Document v1.0 (Part 6)*
*Depends on: Human Capability Framework v1.0*
*This amendment is authoritative where it conflicts with earlier documents.*

---

## Purpose

The Product Bible v1.0 defined eight progression layers as habit lists with compliance-based unlock thresholds. The Human Capability Framework v1.0 subsequently established that layers must represent biological capability targets, not habit lists, and that the Protocol Generator creates personalized habit sets for each individual from those targets.

These two descriptions are not contradictory in philosophy — they were always intended to produce the same system. They are, however, inconsistent in language and structure. Any engineer, AI system, or future contributor reading both documents without this reconciliation would find conflicting specifications.

This amendment resolves that inconsistency permanently. It defines the authoritative relationship between the two systems and re-expresses every layer in capability-framework language.

---

## The Resolution — Two Levels of Abstraction

Biohack OS operates simultaneously at two levels of abstraction. They must never be confused.

**The Intelligence Level (internal):** The system reasons in the language of the Human Capability Framework — six domains, sub-capabilities, maturity stages (Fragile/Stable/Robust/Antifragile), capability profiles, and evidence-based unlock criteria. This is the language of the Digital Twin, the Biology Intelligence Engine, the Decision Engine, and the Knowledge Graph. No user ever needs to see this language directly.

**The Communication Level (user-facing):** The system presents progress in the language of the eight layers — names, narratives, milestone moments, and the sense of a journey with stages. This is the language of the interface, the AI coach's explanations, and the Progress tab. The eight layers provide the identity arc and motivational narrative that a raw capability profile cannot provide.

The relationship is: **the eight layers are the user-facing names for eight specific capability profile targets.** Each layer specifies a required capability profile. The Protocol Generator creates a personalized set of habits and interventions to help each individual user reach that profile. The habit list is not the layer — it is the protocol for this person to achieve the layer's capability target.

This means two users on the same layer may receive completely different habit lists, while working toward the same capability target. Both are correctly described as "on Layer 3." The layer is defined by what the person is building, not by how they are building it.

---

## Layer-Capability Mapping

The following table and descriptions define each layer's capability profile — the internal target that the system is actually working toward when a user is on that layer.

---

### Layer 1 — Survival Basics
**User-facing description:** Establishing the biological foundation.
**Primary domains:** Biological Regulation, Restorative Capacity
**Capability profile target:**
- Biological Regulation / Autonomic Balance → Stable (HRV in healthy range for age and sex; resting HR appropriate)
- Biological Regulation / Metabolic Regulation → Stable (adequate caloric intake, no severe nutritional depletion)
- Restorative Capacity / Circadian Entrainment → Stable (consistent wake time ±45 minutes; melatonin phase appropriate)
- Restorative Capacity / Sleep Architecture → Stable (total sleep ≥7.5 hours average; self-reported sleep quality ≥3/5)

**Default protocol habits serve:** Circadian entrainment (consistent wake time, morning light exposure), metabolic sufficiency (regular meals, adequate hydration), and autonomic regulation (sleep duration).

**Unlock evidence required:**
- Behavioral: 80% compliance average over 7-day rolling window (minimum 5 days logged)
- Capability: Self-reported morning energy ≥3/5 average over 7 days; sleep consistency ≤45-minute variance in wake time over 14 days
- No bloodwork required at this layer

**Maintenance requirement when advancing:** Wake time consistency and sleep duration maintained. These are monitored as Biological Regulation and Restorative Capacity maintenance sub-capabilities for all future layers.

---

### Layer 2 — Structural Foundation
**User-facing description:** Building the behavioral and metabolic structure.
**Primary domains:** Physical Capacity, Biological Regulation, Psychological Regulation
**Capability profile target:**
- Physical Capacity / Endurance → Stable (regular cardiovascular activity sustainable without excessive fatigue)
- Physical Capacity / Structural Integrity → Stable (no significant pain or movement limitation from sedentary lifestyle)
- Biological Regulation / Metabolic Regulation → Stable to Robust (protein intake ≥1.2g/kg; meal timing establishing insulin rhythm)
- Psychological Regulation / Motivational Architecture → Stable (sustained behavioral execution without daily volitional effort for Layer 1 behaviors; reduced compulsive stimulation-seeking)

**Default protocol habits serve:** Physical capacity base (movement), metabolic structure (protein, meal timing), dopamine receptor sensitivity recovery (screen time reduction).

**Unlock evidence required:**
- Behavioral: 80% compliance average over 10-day rolling window
- Capability: Self-reported post-meal energy stable (not crashing after meals); subjective improvement in baseline enjoyment of non-stimulating activities; no joint pain from current movement level
- No bloodwork required at this layer

---

### Layer 3 — Micronutrient Fix
**User-facing description:** Resolving the invisible deficiencies.
**Primary domains:** Biological Regulation
**Capability profile target:**
- Biological Regulation / Neuroendocrine Regulation → Stable (vitamin D ≥30 ng/mL; thyroid function within reference range; testosterone appropriate for age and sex)
- Biological Regulation / Immune Regulation → Stable (ferritin ≥15 ng/mL; CRP <3 mg/L)
- Biological Regulation / Metabolic Regulation → Stable (B12 ≥300 pg/mL; fasting glucose <100 mg/dL)

**Architectural note — this layer requires objective evidence.** Layer 3 is the first layer where self-reported compliance alone is insufficient to confirm capability achievement. The critical micronutrient deficiencies this layer targets are invisible without direct measurement. Bloodwork is required — not optional — for Layer 3 unlock. This is a non-negotiable departure from behavioral-compliance-only unlock criteria.

**Default protocol habits serve:** Direct deficiency correction (D3+K2, magnesium glycinate, iron if indicated), gut health supporting absorption (fiber), and the bloodwork event that provides objective evidence.

**Unlock evidence required:**
- Behavioral: 80% compliance average over 14-day rolling window
- Capability (objective evidence required): Bloodwork confirming target ranges met for vitamin D, ferritin, B12, and fasting glucose. If bloodwork is unavailable, the AI may grant conditional advancement with an explicit flag that Layer 3 is unconfirmed and bloodwork is the highest-priority pending action.
- TSH within reference range (thyroid assessment)

---

### Layer 4 — Hormonal Optimization
**User-facing description:** Activating the anabolic and recovery hormonal system.
**Primary domains:** Biological Regulation, Physical Capacity
**Capability profile target:**
- Biological Regulation / Neuroendocrine Regulation → Stable to Robust (testosterone optimized through behavioral and supplemental means; cortisol rhythmicity established — higher morning, declining through day; HPA axis not chronically activated)
- Biological Regulation / Autonomic Balance → Robust (HRV trend improving over 21 days; cold stress response and recovery appropriate)
- Physical Capacity / Force Production → Stable (resistance training established without excessive recovery demand)
- Physical Capacity / Physical Resilience → Stable (performance maintained under mild physiological challenge)

**Default protocol habits serve:** Testosterone optimization (resistance training, ashwagandha, dietary fat adequacy), cortisol modulation (cold exposure, stress management), inflammatory reduction (dietary quality).

**Unlock evidence required:**
- Behavioral: 80% compliance average over 21-day rolling window
- Capability: HRV trend non-declining over 21 days; subjective energy and motivation ≥3.5/5 average; testosterone bloodwork recommended but not mandatory if behavioral evidence is strong

---

### Layer 5 — Cognitive Stack
**User-facing description:** Building the neurological performance layer.
**Primary domains:** Cognitive Capacity, Restorative Capacity
**Capability profile target:**
- Cognitive Capacity / Attentional Regulation → Stable to Robust (ability to sustain focused work for ≥90 minutes without compulsive distraction-seeking; self-reported focus quality ≥3.5/5)
- Cognitive Capacity / Information Processing → Stable (working memory and processing capacity not chronically impaired by sleep deprivation or nutritional deficit)
- Restorative Capacity / Cognitive Recovery → Stable (attentional capacity partially restored by mid-day rest; no chronic cognitive fatigue by early afternoon)

**Default protocol habits serve:** Direct cognitive substrate support (L-Tyrosine, creatine), attentional capacity training (deep work blocks), cognitive recovery (NSDR).

**Unlock evidence required:**
- Behavioral: 80% compliance average over 21-day rolling window
- Capability: Self-reported sustained focus duration ≥90 minutes on most days; cognitive performance self-assessment ≥3.5/5; reduction in compulsive task-switching behavior

---

### Layer 6 — Advanced Biohacking
**User-facing description:** Introducing precision biological monitoring and optimization.
**Primary domains:** All six domains, with emphasis on measurement infrastructure
**Capability profile target:**
- All primary sub-capabilities from Layers 1–5 at Stable or Robust
- Biological Regulation / Autonomic Balance → Robust (HRV baseline established; daily HRV provides actionable signal)
- Physical Capacity / Physical Resilience → Robust (performance maintained under heat, cold, or metabolic challenge)
- Biological Regulation / Cellular Integrity → Stable (glucose response logged; awareness of metabolic patterns)

**Architectural note on Layer 6:** This layer is qualitatively different from previous layers. Its primary capability target is the establishment of a data-driven self-monitoring practice — the user is developing the ability to use biological feedback as real-time input to their own decisions. This is a meta-capability: the ability to observe, interpret, and respond to one's own biological data. It is expressed within the Cognitive Capacity domain (interoception) and the Biological Regulation domain (autonomic monitoring).

**Default protocol habits serve:** Data collection infrastructure (HRV tracking, glucose response logging), thermal adaptation (sauna, red light), precision biological feedback loops.

**Unlock evidence required:**
- Behavioral: 82% compliance average over 30-day rolling window (higher threshold reflecting greater protocol complexity)
- Capability: Demonstrated HRV data literacy (user can interpret their own HRV signal); glucose response patterns logged across at least 30 meals; at least one comprehensive bloodwork panel with all Layer 3 targets confirmed in optimal range

---

### Layer 7 — Longevity Mode
**User-facing description:** Optimizing for biological age trajectory.
**Primary domains:** Biological Regulation (Cellular Integrity), Physical Capacity, Cognitive Capacity
**Capability profile target:**
- Biological Regulation / Cellular Integrity → Stable to Robust (oxidative stress markers within healthy range; epigenetic age assessment recommended; NAD+ pathway support active)
- Physical Capacity / Endurance → Robust (VO2max in healthy range for age; Zone 2 cardiovascular base established)
- Cognitive Capacity / Learning and Plasticity → Stable (active neuroplasticity maintenance through deliberate learning or meditative practice)
- Restorative Capacity / Sleep Architecture → Robust (deep sleep and REM phases tracked and within healthy ranges; cognitive performance well-maintained the morning after sleep)

**Default protocol habits serve:** Cellular integrity support (NMN/NR), cardiovascular longevity foundation (Zone 2 cardio), neuroplasticity maintenance (meditation), sleep architecture optimization (sleep stage tracking).

**Unlock evidence required:**
- Behavioral: 82% compliance average over 30-day rolling window
- Capability: VO2max tested or estimated; Zone 2 cardio sustainable at conversational pace for ≥40 minutes; sleep stage data showing adequate deep sleep proportion; biological age assessment recommended

---

### Layer 8 — Frontier Protocols
**User-facing description:** Operating at the leading edge of human optimization science.
**Primary domains:** All six domains at Robust to Antifragile
**Capability profile target:**
- All primary sub-capabilities from Layers 1–7 at Robust or approaching Antifragile
- Biological Regulation / Cellular Integrity → Robust to Antifragile (autophagy pathways actively supported; comprehensive biomarker panel within optimal ranges)
- Physical Capacity → Antifragile in at least two sub-capabilities
- Cognitive Capacity → Robust across all sub-capabilities
- Psychological Regulation → Robust across all sub-capabilities (stress tolerance, motivational architecture, identity coherence all functioning under significant challenge)

**Architectural note on Layer 8:** This layer has no ceiling and no unlock. There is no Layer 9. Layer 8 is the continuous refinement space — the user is not progressing toward a next target; they are deepening mastery across all domains simultaneously. The system's role changes at Layer 8 from guiding progression to supporting continuous optimization within a highly developed capability profile. The product never communicates "you have completed Biohack OS." It communicates "you have reached the frontier. The frontier continues to move."

**Default protocol habits serve:** Autophagy activation (extended fasting), comprehensive biological monitoring (full biomarker panel), experimental protocol documentation (peptide log), frontier cold adaptation (ice bath protocol). These are tracked differently from previous layers — not all are daily habits. Some are weekly or monthly protocols.

**Unlock evidence required (to enter Layer 8 from Layer 7):**
- Behavioral: 85% compliance average over 45-day rolling window
- Capability: Comprehensive biological assessment confirming all Layer 3–7 capability targets; VO2max, muscle mass, cognitive function, and sleep architecture all documented and within Robust range for age and sex

---

## Updated Unlock Architecture

The unlock system operates in three components that now work together:

**Behavioral Evidence (all layers):** Rolling compliance average above threshold for minimum window. Demonstrates habit establishment and protocol execution.

**Capability Evidence (layers 3+):** Objective or subjective evidence that the capability target is being approached or achieved — not just that the habits are being performed. Behavioral evidence without capability evidence at Layer 3+ indicates the protocol may not be producing the intended biological outcome and should trigger a protocol review.

**No Evidence, No Advancement:** If behavioral compliance is high but capability evidence contradicts the target (e.g., 90% compliance on Layer 3 habits but bloodwork shows vitamin D still at 12 ng/mL after 14 weeks), the system does not advance the layer. It investigates why the protocol is not producing the expected outcome — malabsorption, insufficient dose, confounding condition — and adjusts before considering advancement.

---

## Maintenance Protocol — Capability Language

When a user advances from Layer N to Layer N+1, the maintenance requirement is now expressed in capability terms rather than habit terms.

**The principle:** The capability targets achieved at each layer must be maintained as the user advances. The system monitors the relevant sub-capabilities continuously. If a maintained sub-capability falls below its Stable threshold, the system enters a Maintenance Alert for that sub-capability, regardless of current layer.

**The minimum maintenance protocol** is generated by the Protocol Generator as the minimum intervention set required to maintain each previous layer's capability targets at Stable or above. This set will vary by individual (based on which habits have consolidated into automatic behavior vs. which still require deliberate effort) and will typically be significantly smaller than the full protocol for that layer.

---

## What This Amendment Does Not Change

The eight layer names, the user-facing descriptions, the narrative arc, the unlock ceremony design, the layer color system, and the progression announcement design are unchanged. These are communication-level decisions that serve the user's experience and identity development. This amendment changes only the internal definition of what each layer means and what evidence is required to confirm it.

---

*This amendment is now the authoritative specification for layer progression in Biohack OS. It supersedes the layer descriptions in Product Bible v1.0 Section 6 and Architecture Document v1.0 Part 6 where they conflict.*
