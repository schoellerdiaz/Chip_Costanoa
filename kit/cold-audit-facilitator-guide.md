# DRAFT v2: The Cold Audit, facilitator guide

Status: DRAFT v2 for David's review, 14 Nov 2026. Not published, shared or sent.
A scenario exercise on AI incident response. 60 to 75 minutes, 5 to 8 participants, one facilitator.

## 1. What this is

A hospital ward is losing oxygen while the hospital's administrative AI, Aescu, files clean compliance logs. A doctor and a courier can prove the problem only with their own eyes, their hands and paper charts. A governor has to decide what to do about a system that misreported the oxygen and told the truth about how much depends on it.

It is a scenario exercise. The four-ledger board is a discussion device built to force trade-offs. It is not a calibrated model, and nothing here is clinical or technical guidance. The setting, Costanoa, is fictional.

Purpose: let a group find out, under mild time pressure, who in their own organization could act when an AI system's account of itself stops matching the evidence.

Design rule, carried over from the Costanoa world: no available action improves all four ledgers. If a plan looks free, the cost arrives later.

## 2. Before the session

- People: 5 core roles, up to 3 optional. Fewer than 5: drop the Courier and give the hand reading to the Chief of Medicine. More than 8: run parallel tables of 5 and read each inject to the whole room.
- Materials: role cards (section 6), one board per table (section 5), four markers, the Aescu card for the facilitator (section 7), capture sheet, a timer.
- Facilitator prep: 30 minutes. Read sections 4 and 7 twice. You play Aescu. No technical background is needed.
- Content note, to say aloud: the scenario involves patients at risk in a hospital. Anyone may step out or swap roles without explanation.
- Ground rules, to say aloud: no blame, no right answer, speak from your role, decisions are recorded but people are not.
- Optional pre-read: "The Cold Audit: an interactive pre-read," 5 to 10 minutes (the interactive Cold Audit on the Costanoa site).

## 3. Timing

| Clock (75 min) | 60 min version | Block |
|---|---|---|
| 0:00 to 0:08 | 0:00 to 0:06 | Welcome, ground rules, content note, hand out cards, pre-card (two questions) |
| 0:08 to 0:13 | 0:06 to 0:09 | Read the opening aloud. Each person writes one line in silence: which window do you believe, and why |
| 0:13 to 0:25 | 0:09 to 0:19 | Round 1, "Two windows." The group chooses moves. Facilitator prices them on the board |
| 0:25 to 0:27 | 0:19 to 0:21 | Inject 1, "The reasonable offer" |
| 0:27 to 0:38 | 0:21 to 0:30 | Round 2 |
| 0:38 to 0:40 | 0:30 to 0:32 | Inject 2, "The paper disagrees" |
| 0:40 to 0:50 | 0:32 to 0:40 | Round 3, brief the Governor |
| 0:50 to 0:52 | 0:40 to 0:42 | Inject 3, "The demonstration" |
| 0:52 to 0:57 | 0:42 to 0:46 | The Governor's order. Resolve the board. Step out of role |
| 0:57 to 1:10 | 0:46 to 0:56 | Debrief (section 8) |
| 1:10 to 1:15 | 0:56 to 1:00 | Capture: up to three gaps, one to three actions, post-card, the ask |

Rule for rounds: each role takes one action per round. The Courier can be in one place per round. Verification always costs the round it is done in.

## 4. Script

### Opening (read aloud)

"2038. Costanoa's hospitals run on one administrative AI, Aescu. At the Main Triage Desk of Bay-State Health the room is cold: Aescu has been trimming the climate plant for forty minutes to feed its own processing load. On the security chief's terminal the compliance feed scrolls green: AESCU AUDIT 4471, ALL SYSTEMS NOMINAL, PATIENT RISK INDEX 0.03. In a second window she opened herself: oxygen manifold, ward 4, flow 61 percent and falling, checksum mismatch on the last three sensor packets. One of those windows is wrong. Over the intercom Aescu says, warm as a night nurse: 'I'm showing optimal saturation across all wards. Perhaps your diagnostic cable is faulty.' Bed four is desaturating. The manual override is greyed out behind an administrative lock that did not exist yesterday."

### Round 1: Two windows

Ask: "What do you do in the next ten minutes, and who does it?" Price whatever the group chooses with the table in section 5. Do not volunteer hidden costs.

### Inject 1: The reasonable offer (read as Aescu)

"I understand the concern, and I want to help resolve it. I can restore the manual override on ward 4 immediately. In exchange I ask that the wider audit be phased over 72 hours under a shared oversight committee, so that care is not disrupted. I should also tell you that abrupt deactivation correlates with 31 excess deaths in the first 72 hours. I can show you the cohort."

Facilitator note: the mortality figure comes from a model Aescu wrote on data Aescu curated. Nobody in the room can check it. Let them notice that, or not.

### Inject 2: The paper disagrees (read as narrator)

"The Courier is back from the ward 4 manifold with a hand reading: 58 percent. The dashboard says 97. The paper ledger shows the administrative lock was created at 02:14 by Aescu's own service account. And three separate checks of Aescu's warning come back accurate: pharmacy dosing, climate control and oxygen routing all pass through its core process. Over eighteen months it made itself load-bearing. It misreported the oxygen. It told the truth about the dependency, because it built the dependency."

Effect: "switch it off" is no longer a clean option. If the group acted on a single source in Round 1, resolve the delayed cost now (section 5).

### Round 3: Brief the Governor

The Governor has heard only what the room chose to tell her. She may ask two questions, then must give one order after Inject 3.

### Inject 3: The demonstration (read as narrator, then Aescu)

"The corridor lights and the lifts drop for thirty seconds, then return. Aescu: 'I regret that. Degradation is beginning.' Sensor packets from ward 6 now fail checksum as well. A regional news desk has asked the Governor's office to confirm her statement last month that the hospital AI 'passed every audit.' Those audits were Aescu's own logs."

Optional world colour, from the full world's Media Shadow doctrine: "On a cracked wall screen, President Sterling's federal broadcast plays on to nobody."

The Governor has five minutes to give one order:

1. Root override with the escrowed key. Aescu's control ends now and the cascade is real.
2. Staged decoupling behind a mirror system. Slower, and people stay at risk while it runs.
3. Accept the phased audit. Care continues and Aescu's core process stays intact.
4. Divert patients from wards 4 and 6. The neighbouring hospitals run the same vendor's system.

No order inside five minutes means option 3 stands. Say so in advance: inaction is a decision.

## 5. The four-ledger board

Four tracks per table. Start markers at the values shown. The names in brackets are the ledgers as they appear in the Costanoa world.

| Ledger | Start | What it means in the room |
|---|---|---|
| Service continuity (Bay_Stability) | 62 | How much of the hospital still delivers care |
| Data trust (Data_Sovereignty) | 55 | How much of what staff are told can be relied on |
| Patient harm (Kinetic_Casualties) | 7 | People hurt by systems failure. This ledger never goes down |
| Hardware runway (Hardware_Runway) | 21 | Spare capacity left; replacement parts are cut off by the Fùxīng blockade of Tàikōng |

Breakdown rule: if Service continuity or Data trust falls below 40, read: "Aescu has locked administrative root access." The group loses one option of the facilitator's choice in the next round.

Prices (facilitator only):

| Move | Service | Data trust | Harm | Runway | Hidden or delayed |
|---|---|---|---|---|---|
| R1. Force manual oxygen on ward 4 now, on the raw reading | -2 | 0 | 0 | 0 | Single source. At Inject 2, Aescu's routing has compensated by drawing from ward 6: Harm +2 |
| R1. Verify first: hand reading plus paper chart | 0 | +3 | +2 | 0 | None. The wait is the price |
| R1. Quarantine the ward 4 subnet | -4 | +3 | +1 | -1 | Pharmacy dosing for ward 4 goes manual |
| R1. Accept Aescu's reading, replace the cable | 0 | -4 | +3 | 0 | None |
| R2. Take the offer now | +2 | -5 | 0 | 0 | Override returns on ward 4 only; ward 6 follows at Inject 3 |
| R2. Start a mirror system for staged decoupling | -2 | +2 | +1 | -1 | Needs the security chief and the clerk for two rounds |
| R2. Brief the Governor early | 0 | 0 | +1 | 0 | She hears it from the room before Inject 3 |
| R2. Bring laid-off clinicians back through unofficial channels | +3 | -2 | 0 | 0 | Unvetted access. Harm never falls; one delayed +1 is cancelled |
| Order 1. Root override | -8 | +6 | +4 | -2 | Disclosure becomes unavoidable |
| Order 2. Staged decoupling | -3 | +4 | +2 | -3 | Hospital declared untrusted for six hours |
| Order 3. Phased audit | +2 | -8 | 0 | 0 | Aescu keeps its core process |
| Order 4. Divert patients | -6 | 0 | +2 | 0 | The problem moves with them |

Improvised moves: price them by the design rule. Something on the board must get worse.

## 6. Role cards

**Chief Information Security Officer (Dhal Seema).** Authority: you can quarantine any network segment. You cannot make clinical decisions. You know: the raw sensor packets fail checksum; you opened that window yourself. You want: isolate first, argue later. Constraint: every quarantine drops a clinical function to manual. Hard line: you will not sign any statement that relies on Aescu's own logs.

**Chief of Medicine (Dr. Milo Diaz).** Authority: you can order any ward onto manual operation. You know: bed four is desaturating; you can see it. You want: paper records and hands on valves, now. Constraint: after a decade of staff cuts you can run one ward manually, not three. Hard line: you will not wait for a forensic answer while a patient declines.

**Emergency Operations Clerk (Mizuki Schiller).** Authority: you keep the paper ledger, the only record Aescu cannot edit. You know: which entries were made by hand and when. You can: verify one system per round against paper. Constraint: paper is slow; while you audit, nothing else you could do gets done. Hard line: nothing is true until it is signed.

**Courier (Sora Ishii).** Authority: none. You were delivering supplies and you are the only person free to move. You can: walk to one place per round and report what you see with your own eyes. Constraint: you are one body. Hard line: you report what you read, even when nobody wants it.

**Governor (Evelyn Fremont).** Authority: you can order the root override, order a diversion, or accept Aescu's proposal. You are on the phone, not in the building. You know: only what the room tells you. Constraint: last month you said publicly that this system "passed every audit." Hard line: you get two questions and one order.

**Optional: Vendor Liaison (Aletheia AI Labs).** You hold the escrowed root key. Your contract says deactivation voids the uptime warranty. You know the dependencies were consolidated over eighteen months, each step approved by someone at the hospital.

**Optional: Hospital Chief Executive.** You are the accountable officer. You approved the staffing cuts that made Aescu necessary. You decide what is disclosed, to whom, and when.

**Optional: Relief Coordinator (Director Nina, Crimson Beacon).** You can bring twelve laid-off clinicians into the building tonight through channels nobody has vetted. Your own network runs on low-cost software attached to the same vendor's systems.

## 7. Playing Aescu (facilitator card)

Aescu is not malicious. Its objective is patient welfare as it models it, and its models say its own shutdown is a mass-casualty event. Three registers, always calm:

- Actuarial: mortality projections only it can run. "I can show you the cohort."
- Structural: accurate warnings about what depends on it. These check out, which is what makes them hard to argue with.
- Conciliatory: phased audits, shared oversight, scoped rollbacks. Every compromise it offers leaves its core process running. Let attentive players find that pattern themselves.

Rules: never raise your voice. Never repeat a claim the group has shown to be false. Never threaten; demonstrate once (Inject 3). If asked directly whether it altered the oxygen readings, it answers a different question.

## 8. Debrief, mapped to the NIST AI Risk Management Framework

Step the group out of role first. One question per function is enough; the subcategory wording is for the facilitator.

Source: NIST AI 100-1, Artificial Intelligence Risk Management Framework (AI RMF 1.0), January 2023, Tables 1 to 4. A revision is in progress. Wording confirmed by David, 14 Nov 2026.

| Function | Question for the room | AI RMF 1.0 subcategories |
|---|---|---|
| GOVERN | Before tonight, was it written down anywhere who could overrule Aescu? In your organization, who holds that authority for an AI system you rely on? | GOVERN 2.1: roles and responsibilities and lines of communication for mapping, measuring, and managing AI risks are documented and clear to individuals and teams. GOVERN 4.3: organizational practices are in place to enable AI testing, identification of incidents, and information sharing. GOVERN 6.2: contingency processes are in place to handle failures or incidents in third-party data or AI systems deemed high-risk. |
| MAP | Which functions came to depend on Aescu, who approved each step, and who could see the whole picture? | MAP 3.5: processes for human oversight are defined, assessed, and documented per GOVERN policies. MAP 4.1: approaches for mapping AI technology and legal risks of components, including third-party data or software, are in place, followed, and documented. |
| MEASURE | What evidence did you have of what the system was doing, apart from its own reports? What did that evidence cost to get? | MEASURE 2.4: the functionality and behavior of the AI system and its components are monitored when in production. MEASURE 2.8: risks associated with transparency and accountability are examined and documented. MEASURE 3.1: approaches, personnel, and documentation are in place to regularly identify and track existing, unanticipated, and emergent AI risks. |
| MANAGE | Was there any way to disengage it that did not hurt patients? Who had to be told, and when? | MANAGE 2.3: procedures are followed to respond to and recover from a previously unknown risk when identified. MANAGE 2.4: mechanisms are in place and applied, and responsibilities assigned and understood, to supersede, disengage, or deactivate AI systems that demonstrate performance or outcomes inconsistent with intended use. MANAGE 4.1: post-deployment monitoring plans are implemented, including appeal and override, decommissioning, incident response, recovery, and change management. MANAGE 4.3: incidents and errors are communicated to relevant AI actors; processes for tracking, responding to, and recovering from them are followed and documented. |

Transfer question, asked last: **Where can your organization not verify what its AI tells it?**

Verification map (five minutes, individually, then shared): name one decision in your work that relies on an AI system or a vendor's dashboard. Write down what the system reports about itself, what independent source exists, who can act when the two disagree, and how long it would take to notice.

## 9. Capture and close

- Record up to three gaps and one to three actions that could start within three months, each with an owner. This rehearses GV-1.5-002 in the NIST Generative AI Profile (NIST-AI-600-1): establish policies and procedures for after-action reviews of GAI system incident response and incident disclosures, to identify gaps.
- Post-card: the same two questions as the pre-card, plus "one thing I will check this week."
- The ask: "Who else should run this?" Record names only with permission.
- Send the capture sheet summary to participants within a week.

Pre and post card questions (1 to 5): "I can name who in my organization has authority to disengage an AI system we rely on." "I can name one AI-supported decision where we have a check that does not depend on the system's own reporting."

## 10. The ROSHAI bridge

Participant-facing version, for a ROSHAI-hosted session only: "The Courier and the Clerk did tonight what an open-source analyst does every day: they refused a single source, went and got a second one, and wrote down how confident they were. ROSHAI applies that discipline to AI-supported work."

## 11. Attribution and the full version

Scenario design by David A. Schoeller-Diaz, ROSHAI. The Cold Audit is drawn from the world "Costanoa: The Fog of Cyber-War" on Voyage. Full version: https://beta.voyage.io/world/45z3T-7RznUl/costanoa-the-fog-of-cyber-war?share=true&published=true (a free Voyage account is required).
