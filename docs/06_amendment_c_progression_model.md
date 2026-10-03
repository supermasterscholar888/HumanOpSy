# BIOHACK OS — AMENDMENT C
## Progression Model v2
File: docs/06_amendment_c_progression_model.md | Version: 0.1 | Last updated: 2026-10-03
**Version 0.1 — DRAFT for owner review. Not authoritative until the owner approves it.**

Amends: Product Bible v1.0 (Principle 2, Rule 1, sections 4 and 6, Pillars 3 and 4, Weaknesses 1, 3 and 5); Architecture v1.0 (Part 6 and Part 10); Amendment B (unlock architecture).
Depends on: documents 01 to 05, especially Capability Framework Principles III, IV and IX.
Resolves: OQ-001 to OQ-005 (owner answers recorded), and proposes resolutions for OQ-006, OQ-007 and OQ-008.
Once approved, this amendment is authoritative wherever it conflicts with documents 01, 02 and 04.

---

## 1. Purpose

The Product Bible treated progression as a one-way ladder: complete a layer, receive the next, never skip. Review by the owner showed that this design has five problems. It forces users to advance when they may be satisfied where they are. It places everyone at Layer 1 whatever they already do. It judges progress by a percentage that a missed day or a disrupted day can damage. It contains two conflicting versions of how regression works. And it has no way to adapt a single day to a hangover, an illness or a day spent away from home.

This amendment replaces the one-way ladder with a model built on evidence and user choice. The eight layer names, the capability targets of Amendment B and the Safety Filter are unchanged.

## 2. Owner decisions implemented here

The owner reviewed ten points and the process on 2026-10-03 and agreed to all of them, together with the modifications proposed in the review.
- Users are never forced to advance and may stay at a layer they are satisfied with.
- Progress is judged by evidence, and a missed or disrupted day does not reset it. There are no reset-to-zero streaks.
- Onboarding assesses the user's level so people are not forced through layers they do not need.
- The daily plan adapts to acute disruptions and to the time left in the day, without penalizing progression. Steps, sedentary time and heart rate may later inform rest advice.
- Users can read about layers ahead of them in view-only mode, while the app blocks them from starting those layers.
- Anyone can declare a disrupted day: the user, the AI or sensors. When the AI or sensors declare one, the user is told and confirms it.
- Placement after onboarding is provisional, with a 7 to 14 day confirmation period.
- Amendment C is written first.

The other review decisions (coach marketplace removed, business model paused, community deferred, global scope, depth on demand) belong to Amendment D.

## 3. Summary of changes

| Topic | Before | After this amendment |
|---|---|---|
| Moving up | Automatic path; unlock ceremony; no skipping | Eligibility is earned by evidence; starting a layer is the user's choice |
| Staying put | Not addressed | Steady State is a normal, respected choice |
| Layers ahead | Locked | Readable in view-only mode; interventions cannot be started |
| Starting point | Everyone begins at Layer 1 | Baseline assessment places the user, provisionally |
| Streaks | Internal "streak data" | No streak is kept or shown; consistency over counted days |
| Missed or disrupted days | Not addressed | Adapted plans, day modes, excluded days |
| Regression | Two conflicting versions | One graduated ladder in section 10 |
| Layer 8 window | 30 or 45 days | 45 counted days |
| Verified versus self-reported | 75% versus 85% | One threshold per layer; verified data counts as stronger evidence |
| Non-daily protocols | Treated as daily checkboxes | Scored by their own cadence |
| Returning users | Not addressed | Re-baselining after a long absence |

## 4. New vocabulary

These terms are used only inside the progression model. They do not change the definitions in document 03.
- **Visibility:** a user can read about a layer.
- **Eligibility:** the evidence shows the user is ready for a layer.
- **Enrollment:** the user chooses to start a layer's interventions.
- **Placement:** the starting position assigned after the baseline assessment.
- **Confirmation window:** the period during which placement is checked against observed behavior.
- **Prescribed plan:** the set of items the system asks of a user on a given day.
- **Day mode:** Full, Reduced or Recovery. It decides how large the prescribed plan is.
- **Counted day:** any day that is not an excluded day. Days with no log are counted as zero.
- **Excluded day:** a day the user declares as one on which no plan could be followed.
- **Effective compliance:** the average share of the prescribed plan completed, over a window of counted days.

Layer statuses (internal names; user-facing wording is a screen design decision):
- **Ahead:** visible, not startable.
- **Ready:** eligible, not yet chosen.
- **Active:** the user is working on it.
- **Provisional:** placed by assessment, awaiting confirmation.
- **Established:** the capability target is met and maintained.
- **Rebuilding:** earlier evidence has weakened and is being re-established.

Steady State is a choice at the user level, not a layer status. It means "I choose to remain where I am."

## 5. Layer participation

### 5.1 Visibility
Every layer is readable from the first day. Previews explain the layer's purpose, its capability targets and which evidence would make the user eligible. Previews are labeled as not being a recommendation for that user yet. They exclude dosing, schedules and step-by-step instructions, because reading about a layer is safe, but acting on it before the body is ready is not.

### 5.2 Eligibility
A layer becomes Ready when the user's evidence meets that layer's targets, as defined in Amendment B and refined in sections 7 and 11. Eligibility also requires that every lower layer is Established, or Provisional while its confirmation window is running. It is withheld while any lower layer is Rebuilding, while a Tier 2 condition is active, and while the Safety Filter has blocked the layer's interventions.

### 5.3 Enrollment
The system never starts a layer on its own. When a layer becomes Ready, the system tells the user once what it involves and asks whether to begin. If the user declines or does not answer, the system does not repeat the offer for at least 30 days, unless the user asks or their goals change. Offers count toward the limit of two unsolicited notifications per day.

### 5.4 Steady State
A user may remain at any layer indefinitely. In Steady State the system keeps maintaining the user's established capabilities, keeps monitoring them, keeps running every safety check, and continues to improve sub-capabilities within the current layer's targets. Progress is shown as growth in capability maturity (Fragile, Stable, Robust, Antifragile), not as movement up layer numbers. The user's goals decide which layers are worth offering, in line with Principle III of document 03. A user whose goals are met at Layer 3 is not nudged toward Layer 4.

### 5.5 One active layer at a time
By default a user works on one frontier layer at a time. Earlier layers are maintained, not advanced. This keeps the plan small, as Principle 4 of the Product Bible requires.

## 6. Baseline assessment and placement

### 6.1 Purpose of onboarding
Onboarding builds the first estimate of the user's capability profile. It no longer exists only to personalize Layer 1.

### 6.2 What it collects
The core intake is short and is asked first:
- A safety screen: age, medical conditions, medications, supplements already taken, pregnancy status where relevant, red-flag symptoms and a mental-health safety question.
- Basic measurements, goals, constraints and country.
- Baseline behavior across the domains: sleep timing and duration, activity, eating pattern, stimulation and screen use, stress, and social contact.
- Existing lab results, if the user has any.
The remaining questions are spread across the first 14 days. Each must be specific and able to change a recommendation, as Architecture Part 5 requires. The four-minute onboarding target in the Product Bible applies to the core intake only, and its exact length is a product decision still to be made.

### 6.3 Safety and scope first
Any Tier 1 or Tier 2 pattern found at intake is handled by the Critical Threshold Layer before placement. A situation that falls under major capability loss is out of scope. How the product tells a user this is still to be designed.

### 6.4 Computing placement
For each layer, the system compares intake evidence with the targets in Amendment B and assigns a status: Provisional, if the answers indicate the targets are met, or not established. The user starts at the lowest layer that is not Provisional. The layers below are Provisional and begin a confirmation window of 7 days for Layers 1 and 2 and 14 days for Layer 3 and above.

Layer 3 depends on bloodwork. Without lab evidence, placement cannot go past Layer 3, and Layer 3 is shown as "unconfirmed." Getting bloodwork becomes the first priority. Layers 4 and above stay Ahead until Layer 3 is established by bloodwork. This narrows the conditional advancement that Amendment B allowed, for the safety reason that Layer 4 includes interventions, such as ashwagandha, that should not be started without knowing the user's thyroid and nutrient status. Amendment B's fallback is therefore replaced (see section 13).

### 6.5 Confirmation window
During the window the system observes behavior and compares it with the capability targets of each Provisional layer. Where a target needs a longer observation period than the window, that layer stays Provisional until the period is complete, and the user can continue working in the meantime. If observed behavior contradicts the user's answers, placement is revised down to the highest layer the evidence supports. A downward revision is a correction, not a failure. It is explained plainly, in line with Principle 7 (honesty over comfort), and all history is kept.

## 7. Measuring progress

### 7.1 No streaks
The system does not keep or display a streak. Habits are shown as consistency, such as "completed on 12 of the last 14 days." Pillar 3's internal "streak data" output is replaced by rolling consistency data over counted days.

### 7.2 Prescribed plan and effective compliance
Each day has a prescribed plan. Its content comes from the Protocol Generator and Decision Engine, and its size depends on the day mode. A day's score is the share of its prescribed items completed. A layer's effective compliance is the average of those day scores across its window.

### 7.3 Windows count counted days
A layer's window length (7, 10, 14, 21, 21, 30, 30 and 45 days for Layers 1 to 8) means that many counted days, not calendar days. Excluded days are skipped, so the window reaches back further to find enough counted days. A day with no log and no declaration is counted as zero. The Product Bible's rule that 70% of a window must be logged and Amendment B's "at least 5 logged days" rule are replaced by this one, because zeros already enforce logging.

### 7.4 Tolerance is built into the thresholds
Because the thresholds are below 100%, ordinary life is absorbed without any special rule. For a user otherwise at 100%, an 80% threshold tolerates 1 missed day in a 7-day window, 2 in 10 days, 2 in 14 days, 4 in 21 days; an 82% threshold tolerates 5 in 30 days; and an 85% threshold tolerates 6 in 45 days. Nothing resets.

### 7.5 Excluded days
A user may declare, on the same day or up to 3 days later, that no plan could be followed (for example a hospital stay or an emergency). That day is excluded. As a default, excluded days may stretch a window by at most 20% of its length. Beyond that, the window is marked "insufficient data," eligibility is not evaluated, and the AI opens a conversation about what is happening. The 3-day and 20% figures are defaults to be tuned.

### 7.6 Evidence beats counting
Compliance never advances a user on its own. The capability evidence required by Amendment B still applies, and high compliance with contradicting evidence triggers a protocol review, not an unlock. This extends to Layers 1 and 2, where the evidence is self-reported measures such as wake-time variation and morning energy.

### 7.7 Verified and self-reported data
The Product Bible's idea of a 75% threshold for verified data and 85% for self-reported data is not adopted. Two thresholds per layer would add complexity and strange edge cases. Instead, verified data (labs, wearables) counts as stronger evidence, and where it exists it can replace a self-reported checkbox. Habit verification (Weakness 2) otherwise remains open.

## 8. Non-daily protocols
Some protocols, mainly in Layers 7 and 8, are not daily: a weekly extended fast, a quarterly biomarker panel, a monthly assessment. The Habit Engine must support these frequency types: daily, several times per week, weekly, periodic (monthly or quarterly), event-based (such as a bloodwork result) and conditional (for example, only on training days). Each non-daily item is scored against its own cadence: occurrences completed divided by occurrences expected within the window. This resolves Weakness 5 for the tracking model. Which protocols Layer 8 contains is still governed by OQ-012.

## 9. Disruptions and day modes

### 9.1 What counts as a disruption
A disruption is any recorded event that makes the normal plan inappropriate or impossible for part or all of a day. Examples are illness, the effects of alcohol or other substances, sharply reduced sleep, travel, a day spent away from home, a high-stress event and injury.

### 9.2 Who can declare one
- The user can declare a disruption at any time, and it takes effect immediately.
- The AI can propose one based on conversation or patterns, and sensors can propose one based on data such as signs of illness or severe sleep loss.
- When the AI or sensors propose one, the user is always told. The proposal affects scoring only after the user confirms it.
- For safety, the system may immediately withhold a risky item (for example hard training after severe sleep loss) and explain why, even while the proposal is awaiting confirmation. Scoring is unaffected until the user confirms.
- If the user never answers, the day is scored against the plan that was actually shown. This default is open for review.

### 9.3 Day modes
- **Full:** the normal prescribed plan.
- **Reduced:** the Decision Engine keeps the highest-priority items that fit the user's energy and the time left, following the priority order of Architecture Part 5.
- **Recovery:** a minimal restorative plan. It is never empty. It always includes the items that protect the foundation, such as sleep timing, hydration and nutrition, and any medication or supplement continuity that is safe.
The system suggests a mode and the user confirms or adjusts it. The user may also enter the time left in the day, and the plan is re-ordered to fit.

### 9.4 Scoring and biology
A day is scored against its adapted plan, so completing a Reduced or Recovery plan counts as a full day. The disruption is also recorded in the Digital Twin and its biological effects are modeled, such as accumulated sleep debt or reduced training. Later recommendations reflect it. The body is still affected, even when the score is not.

### 9.5 Protection against misuse
- Disruption events remain visible to the AI. Repeated disruptions prompt an honest conversation, not silence.
- Capability evidence is still required for unlock from Layer 3 upward, so shrinking plans cannot buy progress.
- The Safety Filter reviews plan adaptations during substance-related disruptions. The threshold for repeated heavy alcohol use is still open (OQ-013).

### 9.6 Sensor data
Steps, sedentary time and heart rate may inform rest advice later. The first version relies on user input. Sensor data is optional, shown with its confidence, and given as ranges because consumer data is noisy (Architecture challenge 8).

## 10. Regression, maintenance and returning users

### 10.1 Principles
Regression is information, not punishment. History is never erased. A bad week never removes a layer.

### 10.2 The ladder
This replaces both earlier versions. It uses effective compliance over counted days, and also capability evidence for the capabilities being maintained.
1. **Notice:** effective compliance is below 60% over 7 counted days, or a maintained sub-capability falls below Stable. The AI starts a diagnostic conversation. Nothing else changes.
2. **Stabilize:** below 60% over 14 counted days. The protocol is simplified to the minimum viable set, coaching shifts to stabilization, and layer offers pause.
3. **Rebuild:** below 60% over 21 counted days, or evidence shows the foundation has weakened. The layer is marked Rebuilding. The user keeps the layer in their history and re-establishes the evidence. Enrollment in anything higher is paused.
4. **Step back:** only when the evidence shows the layer's target is no longer met and there has been no recovery trend over 30 counted days. The user returns to the earlier layer's work as re-establishment. It is explained as the system working correctly, not as failure.
The ladder also applies to users in Steady State, for the capabilities they maintain.

### 10.3 Maintenance
Amendment B's maintenance rules stand. Maintenance habits are tracked separately and are not counted in the unlock window of a new layer.

### 10.4 Returning users
After an absence of more than 14 days (default), the system treats the user as returning. It runs a light re-baseline and a 14-day re-assessment window with no unlock evaluation, asks what changed in their life, and sets layer statuses back to Provisional until the evidence confirms them or revises them. There is no automatic demotion. This resolves Weakness 3.

## 11. Revised eligibility per layer
The capability targets in Amendment B are unchanged. These rules change:
- Windows count counted days (section 7.3). Layer 8 is 45 counted days, which corrects the 30 days in Pillar 4 (OQ-007).
- Effective compliance, as defined in section 7.2, replaces raw compliance.
- Capability evidence is required as in Amendment B.
- Reaching eligibility produces an offer, not an automatic start (section 5.3).
- Layer 3 cannot be established without bloodwork, and conditional advancement past Layer 3 is no longer allowed (section 6.4).
- The health-profile gate and the Tier 2 pause still apply.

## 12. Effects on other parts of the system
- **Digital Twin:** add layer statuses, the Steady State flag, the placement record, disruption history and day modes.
- **Events (Architecture Part 10):** add PlacementComputed, PlacementRevised, LayerStatusChanged, OfferMade, OfferDeclined, EnrollmentChosen, DisruptionDeclared (source, type, status pending, confirmed or lapsed), DayModeSet, TimeRemainingReported, PlanAdapted and DayExcluded.
- **Habit Engine:** support frequency types, plan adaptation and consistency data, and remove the streak output.
- **Notifications:** offers and AI or sensor disruption proposals count toward the two-per-day limit.
- **Analytics:** show consistency over counted days and reasons for disrupted days, not streaks.
- **Privacy:** disruption events contain sensitive health information such as illness and substance use. They fall under Rule 5 and Principle 8. Immutable events conflict with legal rights to erase data in some countries (OQ-027).
- **Prototype:** it must be rebuilt, not patched.
- **Pricing:** none of this depends on pricing, and pricing must not depend on layer position when it resumes.

## 13. Exact edits to earlier documents
**Product Bible**
- Principle 2 (keep the name "Sequence Over Speed", replace the body): "Users start an advanced layer's interventions only when evidence shows they are ready, and no one is required to advance. No fast track bypasses the evidence, and no payment buys a shortcut."
- Rule 1: "No user may start the interventions of a layer without evidence of readiness, and no user is required to start any layer. Evidence may come from progression, from a baseline assessment confirmed by observed behavior, or both. No premium tier, friend invitation or code bypasses this."
- Section 6, "Why Users Cannot Skip Ahead": retitle "Why Starting a Layer Requires Evidence" and replace the body with sections 5 and 6 of this amendment.
- Section 6, unlock, regression and maintenance: replace with sections 7, 10 and 11 of this amendment.
- Pillar 3: replace the "streak data" output with "rolling consistency data over counted days."
- Pillar 4: Layer 8 becomes 85% over 45 counted days.
- Section 4: replace the purpose of onboarding (section 6.1), change Screens 3, 5 and 6 (assessment, layer map with visibility, placement result), change the Stage 4 ceremony into an offer, and replace the four-minute target as in section 6.2.
- Section 10: mark Weakness 1 and 3 resolved by this amendment, and Weakness 5 resolved for tracking.
**Architecture:** replace the regression and adaptive-unlock parts of Part 6; add the events in section 12 to Part 10; cross-reference day modes in Part 4.
**Amendment B:** replace "Updated Unlock Architecture"; delete the conditional advancement sentence in Layer 3; delete the "at least 5 logged days" rule in Layer 1.
**Unchanged:** documents 03 and 05.

## 14. Examples
1. **A hangover.** At 11 a.m. the user marks a disruption: alcohol and poor sleep. The day becomes Recovery. The plan is rest, fluids, food and an early night, and the user completes all of it. The day scores 100%. The Digital Twin records the sleep debt, so the next day's plan favors recovery and training is rescheduled.
2. **A day out.** The user gets home at 9 p.m. with two hours left. The system keeps the highest-priority items that fit, such as an evening wind-down and sleep timing, and drops the rest. Completing them counts as a full day. If this happens three times in a week, the AI asks about the routine.
3. **Placement without labs.** A user describes steady routines but has no lab results. Layers 1 and 2 are Provisional and the user starts at Layer 3, unconfirmed. Bloodwork is the first priority and Layers 4 and above are readable only.
4. **A satisfied user.** A user is Established at Layer 3 and is offered Layer 4. They decline. The system does not ask again for 30 days. It keeps maintaining and monitoring their capabilities and applies the ladder if they weaken.

## 15. For owner confirmation
The owner has agreed to the principles above. These specific mechanisms are new in this draft and need confirmation:
1. The regression ladder (7, 14, 21 and 30 counted days) replacing both earlier versions.
2. Full credit for completing an adapted plan, with excluded days limited to a 20% stretch.
3. Counting unlogged, undeclared days as zero.
4. Replacing Amendment B's conditional advancement past Layer 3 with a hard stop.
5. Previews that exclude dosing and instructions.
6. The offer rule: once, then no repeat within 30 days.
7. One active frontier layer at a time.
8. Not adopting the 75% / 85% split.
9. Re-baselining after an absence of more than 14 days.
10. Keeping the name of Principle 2.
11. What happens if the user never answers an AI or sensor disruption proposal (section 9.2).

Open items: the numeric defaults above (OQ-029), erasure rights versus immutable events (OQ-027), unanswered disruption proposals (OQ-028), how out-of-scope users are told (section 6.3), user-facing wording for layer statuses (screen design), minors (OQ-014), and how all this becomes a simple daily screen (OQ-015 and OQ-016).

## Change log
- Version 0.1 (2026-10-03): first draft, awaiting owner review. Becomes 1.0 when approved.
