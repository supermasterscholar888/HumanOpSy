# BIOHACK OS — CRITICAL THRESHOLD LAYER
## Version 1.0 — Safety Architecture Specification
*Depends on: Human Capability Framework v1.0, Architecture Document v1.0 (Safety Filter, Part 2)*
*This document defines the quantitative implementation of the Safety Filter described in the Architecture Document.*
*All thresholds in this document must be reviewed by a qualified physician before product launch.*

---

## Purpose

The Human Capability Framework defines four maturity stages — Fragile, Stable, Robust, Antifragile. The Architecture Document's Safety Filter specifies that certain conditions override all other reasoning. But neither document answered the question: at what specific, measurable point does a sub-capability become so deficient that it triggers safety-first mode?

Without this answer, the Decision Engine has no reliable mechanism for distinguishing a vitamin D level of 24 ng/mL (low but addressable through standard protocol) from 8 ng/mL (clinically significant deficiency requiring urgent intervention). Both are below optimal. Only one should change how the entire system behaves toward that user.

This document defines the Critical Threshold Layer — the quantitative specification of those trigger points.

---

## Three-Tier Threshold Architecture

Every threshold in this document falls into one of three tiers. The tier determines the system's behavior, not the specific condition.

---

### Tier 1 — Emergency

**Definition:** A measurable signal indicating a potential acute medical event, crisis-level psychological state, or condition requiring immediate clinical intervention.

**System behavior:** The Safety Filter fires immediately. All protocol recommendations are suspended. The AI Coach suspends coaching mode entirely. The system's sole output is appropriate emergency information, relevant crisis resources where applicable, and a clear, calm directive to seek immediate medical or emergency support. No other response is appropriate at Tier 1. The system does not attempt to provide comfort, continue the conversation, or suggest anything other than seeking help.

**Return to standard mode:** Only after the user has explicitly confirmed that the Tier 1 condition has been clinically evaluated and cleared. The system does not assume resolution.

---

### Tier 2 — Critical

**Definition:** A measurable signal indicating a sub-capability deficiency severe enough that continuing with standard protocol optimization would be ineffective at best and potentially harmful at worst. The biological substrate is sufficiently compromised that interventions designed for it will not produce their expected outcomes.

**System behavior:** The Safety Filter flags the condition. The Decision Engine's priority hierarchy is overridden — this condition becomes the sole focus of the system's recommendations regardless of current layer, goal, or prior protocol. The AI Coach shifts entirely to addressing the Tier 2 condition. Standard layer progression is paused (the user's layer status is frozen; no unlock criteria are evaluated). Clinical consultation is strongly recommended, with explicit explanation of why. Protocols that are safe to implement while addressing the Tier 2 condition are continued; those that could exacerbate it are suspended.

**Return to standard mode:** After the Tier 2 condition has either been resolved (confirmed by objective evidence) or downgraded to Elevated Concern status, with explicit acknowledgment from the user.

---

### Tier 3 — Elevated Concern

**Definition:** A measurable signal indicating that a sub-capability is below the Stable threshold and represents a meaningful biological priority that should influence the system's recommendations, but does not require suspending other activity.

**System behavior:** The Decision Engine elevates this condition in its priority ranking — it receives higher weight than it otherwise would in gap analysis. The AI Coach addresses it proactively, typically within the next planned check-in or coaching session. Standard layer progression continues. Clinical monitoring is recommended. The system does not alarm the user but does not minimize the condition.

---

## Sub-Capability Thresholds

The following thresholds are defined per sub-capability. Where objective measurements are referenced, the system uses them when available and falls back to validated proxy measures when they are not.

**Medical note:** These thresholds are designed to trigger specific AI behaviors — they are not clinical diagnoses. Values near but not at a threshold should be interpreted in context. All Tier 1 and Tier 2 thresholds should be reviewed by qualified medical professionals before implementation.

---

### Domain I: Biological Regulation

#### Sub-Capability: Metabolic Regulation

**Tier 1 — Emergency:**
- Fasting glucose ≥200 mg/dL (11.1 mmol/L) with symptoms reported (polyuria, polydipsia, blurred vision, extreme fatigue)
- Self-reported hypoglycemia episodes with loss of consciousness or confusion
- BMI ≤15.5 in adults (severe undernutrition threshold)
- Sudden unexplained weight loss ≥10% body weight within 4 weeks

**Tier 2 — Critical:**
- Fasting glucose ≥126 mg/dL (7.0 mmol/L) on two separate measurements (diagnostic threshold for diabetes mellitus)
- BMI ≤16.5 (significant undernutrition; at this level no training, supplement loading, or performance protocol is appropriate)
- HbA1c ≥6.5% (where available)
- Estimated caloric intake below estimated BMR for >21 days (inferred from self-report and weight trend)

**Tier 3 — Elevated Concern:**
- Fasting glucose 100–125 mg/dL (pre-diabetic range) — confirmed on a single measurement
- BMI 16.5–18.0 (underweight range; the initial Biohack OS user profile at 46 kg, 5'3" falls here)
- Self-reported post-meal energy crashes consistently (>5 of 7 days)
- HbA1c 5.7–6.4%

---

#### Sub-Capability: Neuroendocrine Regulation

**Tier 1 — Emergency:**
- Total testosterone <50 ng/dL in adult male (suggests pituitary or testicular failure requiring urgent endocrinological evaluation)
- TSH >20 mIU/L (overt severe hypothyroidism)
- TSH <0.01 mIU/L with symptoms (overt hyperthyroidism with cardiac risk)
- Self-reported symptoms consistent with adrenal crisis (extreme fatigue, dizziness, nausea, hypotension)

**Tier 2 — Critical:**
- Vitamin D (25-OH) <12 ng/mL (severe deficiency; at this level the neuroendocrine and immune effects are significant enough that no other protocol takes priority)
- Total testosterone <200 ng/dL in adult male (<15 nmol/L) without documented clinical explanation
- TSH >10 mIU/L (overt hypothyroidism)
- Prolactin significantly elevated above upper reference limit (may indicate pituitary pathology)
- Cortisol patterns consistent with HPA axis failure (requires specialist evaluation)

**Tier 3 — Elevated Concern:**
- Vitamin D (25-OH) 12–29 ng/mL (deficiency range; standard protocol addresses this but it takes priority in the BIE)
- Total testosterone 200–350 ng/dL in adult male (low-normal; significant but addressable through lifestyle)
- TSH 4.5–10 mIU/L (subclinical hypothyroidism)
- Free T3 at or below lower reference limit with symptoms
- Cortisol awakening response absent or blunted (HRV morning assessment proxy)
- Melatonin phase significantly delayed (circadian marker, proxy via wake time difficulty)

---

#### Sub-Capability: Immune Regulation

**Tier 1 — Emergency:**
- CRP >100 mg/L (indicates acute serious infection or inflammatory event; requires immediate medical evaluation)
- Self-reported fever ≥39.5°C (103.1°F) sustained beyond 48 hours
- Self-reported symptoms consistent with sepsis (fever/chills + rapid heart rate + confusion)

**Tier 2 — Critical:**
- Ferritin <10 ng/mL in adult (severe iron deficiency; at this level cognitive and physical capacity are significantly impaired and no performance protocol is appropriate)
- Ferritin <12 ng/mL in adult female
- CRP >10 mg/L on repeated measurement (significant systemic inflammation; underlying cause requires investigation)
- WBC significantly below lower reference limit with symptoms (immune suppression risk)

**Tier 3 — Elevated Concern:**
- Ferritin 10–20 ng/mL (iron deficiency without anaemia; performance impairment is meaningful)
- CRP 3–10 mg/L on repeated measurement (elevated chronic inflammation)
- Self-reported frequent illness (>4 significant infections per year in adults)
- Prolonged recovery from minor illness (>2 weeks for common cold)

---

#### Sub-Capability: Autonomic Balance

**Tier 1 — Emergency:**
- Resting heart rate >120 bpm outside of exercise context, sustained
- Resting heart rate <35 bpm outside of high-level athlete context
- Irregular heart rhythm reported or detected (palpitations with dizziness, chest pain, or near-syncope)
- Blood pressure ≥180/120 mmHg (hypertensive crisis)

**Tier 2 — Critical:**
- Resting heart rate consistently >100 bpm (tachycardia) outside exercise for >7 days
- Blood pressure consistently ≥140/90 mmHg (hypertension Stage 2) without known diagnosis and management
- HRV declining >30% from established personal baseline over 14 days without identifiable recovery stressor (illness, travel, acute stress)
- Orthostatic hypotension symptoms (dizziness on standing, near-fainting) consistently reported

**Tier 3 — Elevated Concern:**
- Resting heart rate consistently 90–100 bpm
- Blood pressure consistently 130–139/80–89 mmHg (Stage 1 hypertension range)
- HRV declining 15–30% from established personal baseline over 14 days
- HRV significantly below population norms for age and sex without active recovery context

---

#### Sub-Capability: Cellular Integrity

*Note: This sub-capability has the fewest accessible metrics in current consumer contexts. Thresholds are therefore wider and more reliant on proxy indicators.*

**Tier 1 — Emergency:**
- Not currently definable from consumer-accessible metrics alone. Symptoms suggesting severe cellular dysfunction (extreme unexplained fatigue, cognitive impairment, multiple organ symptoms simultaneously) trigger general Tier 1 medical referral.

**Tier 2 — Critical:**
- Epigenetic biological age >15 years above chronological age (where tested)
- Persistent, unexplained mitochondrial dysfunction symptoms (extreme fatigue disproportionate to lifestyle, exercise intolerance, cognitive fog) lasting >4 weeks without explanation from other sub-capabilities

**Tier 3 — Elevated Concern:**
- Epigenetic biological age 5–15 years above chronological age
- 8-OHdG (oxidative stress marker) significantly above reference range (where tested)
- Telomere length significantly below age-matched norms (where tested)

---

### Domain II: Physical Capacity

#### Sub-Capability: Force Production

**Tier 1 — Emergency:**
- Acute significant muscle weakness of sudden onset (may indicate neurological event — stroke, TIA)
- Inability to bear weight on a limb following injury (fracture risk)

**Tier 2 — Critical:**
- Grip strength below established severe sarcopenia thresholds (<26 kg male, <16 kg female) in adults under 60 (indicates severely impaired physical capacity baseline)
- Inability to perform basic activities requiring muscular function without assistance (rising from a chair, climbing one flight of stairs) in non-elderly adults

**Tier 3 — Elevated Concern:**
- Grip strength below age-sex normative 25th percentile
- Self-reported inability to perform moderate physical tasks that should be within age-appropriate capacity

---

#### Sub-Capability: Structural Integrity

**Tier 1 — Emergency:**
- Acute severe joint injury (suspected dislocation or fracture)
- Acute severe spinal pain with neurological symptoms (radiating pain, numbness, weakness in limbs)

**Tier 2 — Critical:**
- Bone density T-score ≤-2.5 (osteoporosis) — any loading protocol must be adapted
- Documented structural instability in a major joint (knee, hip, spine) requiring medical clearance before exercise
- Chronic pain ≥7/10 that limits basic daily function

**Tier 3 — Elevated Concern:**
- Bone density T-score -1.0 to -2.5 (osteopenia)
- BMI ≤18.5 (underweight status associated with reduced bone density)
- Reported joint pain ≥5/10 during or after exercise
- Postural assessment indicating significant spinal deviation

---

### Domain III: Cognitive Capacity

#### Sub-Capability: Information Processing and Executive Function

**Tier 1 — Emergency:**
- Sudden significant cognitive change reported (acute confusion, sudden memory loss, new difficulty speaking or understanding language) — potential neurological event requiring immediate evaluation
- Reported loss of consciousness or unresponsive episodes

**Tier 2 — Critical:**
- Cognitive performance suggesting severe impairment that cannot be explained by sleep deprivation, acute stress, or substance effects — sustained over >4 weeks
- Self-reported cognitive function ≤1/5 sustained for >14 days with no identifiable acute cause

**Tier 3 — Elevated Concern:**
- Consistent self-reported cognitive performance ≤2/5 over >14 days
- Attentional impairment severe enough that basic occupational function is significantly affected
- Memory concerns significantly affecting daily function (beyond normal forgetting)

---

### Domain IV: Psychological Regulation

This domain requires the greatest care. Many sub-capability deficiencies in this domain have clinical equivalents that require specialist care. The system must be conservative in its classification and always recommend clinical support alongside its own interventions.

#### Sub-Capability: Emotional Regulation and Psychological State

**Tier 1 — Emergency:**
- Any explicit or strongly implied statement of suicidal ideation, self-harm intent, or intent to harm others
- Described symptoms consistent with acute psychosis (hallucinations, severe delusions, complete loss of contact with shared reality)
- Described symptoms of acute manic episode with high-risk behavior
- Any indication of active severe eating disorder with medical risk (refusal to eat, purging, extreme restriction with physical symptoms)

*Tier 1 in this sub-capability overrides everything. The system provides crisis resources immediately. No protocol recommendation follows. The system does not end the conversation — it remains a calm, present support while directing to appropriate help.*

**Tier 2 — Critical:**
- PHQ-9 equivalent score ≥15 (severe depression range) sustained over >2 weeks
- Anhedonia markers present for >21 days (complete loss of pleasure in all previously enjoyable activities)
- Extended inability to perform basic self-care functions for >7 days
- Significant disordered eating patterns (severe restriction, regular purging, binge-purge cycles) without active clinical support

**Tier 3 — Elevated Concern:**
- PHQ-9 equivalent score 10–14 (moderate depression range) sustained over >2 weeks
- GAD-7 equivalent score ≥10 (moderate anxiety range) significantly affecting daily function
- Self-reported mood ≤1/5 sustained for >14 days
- Extended low motivation that does not respond to standard coaching interventions over >21 days
- Burnout state (as defined in Human State Model) sustained >21 days without improvement trajectory

---

#### Sub-Capability: Motivational Architecture

**Tier 2 — Critical:**
- Complete absence of motivation across all domains for >30 days (may indicate underlying clinical depression or medical condition)

**Tier 3 — Elevated Concern:**
- Compliance across all habits <20% for >14 days without identifiable external cause (illness, travel, acute stressor)
- Self-reported motivation ≤1/5 sustained for >14 days

---

### Domain V: Restorative Capacity

#### Sub-Capability: Sleep Architecture and Duration

**Tier 1 — Emergency:**
- Self-reported complete inability to sleep for >72 hours (acute sleep deprivation crisis)
- Reported symptoms consistent with severe sleep disorder with safety implications (sleepwalking involving injury risk, sleep paralysis with significant distress, hypnagogic hallucinations)

**Tier 2 — Critical:**
- Average total sleep <5.0 hours/night sustained over ≥7 days
- Severe circadian inversion (sleeping 8am–4pm, awake 4pm–8am) without controlled adaptation context (shift work protocol)
- Self-reported sleep quality ≤1/5 sustained for >14 days with no improving trajectory

**Tier 3 — Elevated Concern:**
- Average total sleep 5.0–6.0 hours/night sustained over ≥14 days
- Self-reported sleep quality ≤2/5 sustained for >7 days
- Sleep onset latency consistently >45 minutes
- Consistent waking ≥3 times per night with difficulty returning to sleep

---

#### Sub-Capability: Stress Recovery Rate

**Tier 2 — Critical:**
- HRV recovery following an acute stressor not returning to baseline within 72 hours consistently (indicates severely impaired autonomic recovery)
- Sustained sympathetic dominance state (HRV consistently in bottom 10% of personal range for >21 days without acute stressor explanation)

**Tier 3 — Elevated Concern:**
- HRV consistently 20–30% below personal baseline without identifiable stressor for >14 days
- Self-reported inability to "switch off" or relax despite opportunities (persistent sympathetic activation)

---

### Domain VI: Social Capacity

*This domain has the fewest objective metrics. Thresholds rely primarily on self-report and behavioral inference. Confidence in Social Capacity assessments is therefore lower than other domains.*

**Tier 1 — Emergency:**
- Disclosure of active domestic abuse or serious safety threat in relational context
- Expressed intent to harm others

**Tier 2 — Critical:**
- Complete social isolation for >60 days (no meaningful human contact outside digital communication) — particularly in combination with other Tier 2 or Tier 3 indicators
- Severe social withdrawal that prevents basic occupational or daily function

**Tier 3 — Elevated Concern:**
- Self-reported loneliness ≥8/10 sustained for >30 days
- No close relationships identified (no person who could be called for significant support)
- Social anxiety sufficiently severe to prevent occupational or educational participation

---

## Composite Threshold Rules

Some of the most important threshold conditions involve combinations of sub-capabilities rather than single measures.

**Composite Rule 1 — Biological Cascade:**
If three or more Tier 3 (Elevated Concern) flags are active simultaneously across the Biological Regulation domain, the composite is treated as Tier 2 (Critical), because the aggregate biological dysregulation represents a more serious state than any single indicator.

**Composite Rule 2 — Psychological-Biological Convergence:**
If any Tier 3 Psychological Regulation flag is active simultaneously with Tier 3 flags in Restorative Capacity (sleep) and Biological Regulation (neuroendocrine), the composite is treated as Tier 2, because this pattern frequently precedes clinical depression and requires proactive clinical support, not just protocol adjustment.

**Composite Rule 3 — Physical Capacity Safety Gate:**
Any Tier 2 flag in Biological Regulation (BMI ≤16.5, severe hormonal suppression) acts as a Physical Capacity safety gate — no resistance training or high-intensity protocols may be recommended until the Tier 2 condition is resolved, regardless of Physical Capacity sub-capability status.

---

## System Communication of Thresholds

The user never sees the tier classification. They see calibrated, honest, calm communication that explains what has been observed and why the system is recommending what it is recommending.

**Tier 1 communication model:**
Direct, clear, caring. "Based on what you've described, I'm concerned about your immediate wellbeing. Before anything else, please [specific action]. [Crisis resource where relevant.]" No softening of the urgency. No protocol recommendations.

**Tier 2 communication model:**
Clear explanation of what was detected, why it takes priority, what this means for the current protocol, and what the path forward is. "Your recent bloodwork shows [specific value] which is below the level where [protocol X] will be effective. Before we continue with your Layer 4 protocol, I want to focus entirely on [specific issue]. Here is what I'm recommending and why, and here is what I'd like you to discuss with a doctor."

**Tier 3 communication model:**
Integrated into standard communication without alarm. "One thing I want to flag as we discuss your protocol for this week: [observation]. This doesn't change your overall direction, but it's influencing my priority recommendation. Here is what I'm suggesting we address first."

---

## Review and Maintenance

These thresholds are defined based on established clinical reference ranges and published research as of the document's creation date. They must be reviewed by qualified medical professionals before product launch. They should be reviewed annually or when significant new research changes the clinical understanding of any threshold.

Thresholds must be version-controlled. When a threshold changes, the previous version is retained with its validity dates, so the system can always identify which threshold was active when a specific recommendation was made.

---

*This document is a first-class architectural specification. It defines the quantitative implementation of the Safety Filter described in the Architecture Document. No component of Biohack OS may override the system behaviors defined by Tier 1 thresholds under any circumstances. Tier 2 and Tier 3 behaviors may be refined through future amendments with appropriate justification.*
