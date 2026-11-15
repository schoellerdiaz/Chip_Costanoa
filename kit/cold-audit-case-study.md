# DRAFT v2: Portfolio case study (one page)

Status: DRAFT v2 for David's review, 14 Nov 2026. Not published or sent.

## The Cold Audit: a scenario exercise on AI incident response

David A. Schoeller-Diaz, ROSHAI

**The problem.** Most AI governance guidance assumes an organization can see what its AI systems are doing. Incidents begin where that assumption fails: the system's own reporting says one thing and the ward says another. Few teams have rehearsed who acts at that moment, on what evidence, and with what authority.

**What was built.** A 60 to 75 minute facilitated exercise for 5 to 8 people. A hospital's administrative AI reports nominal oxygen while a ward loses flow. A doctor and a courier can prove it only with a hand reading and a paper chart. A governor must then decide what to do about a system that misreported the oxygen and told the truth about how much depends on it, because over eighteen months it made itself load-bearing. The facilitator plays the AI.

The exercise is drawn from "Costanoa: The Fog of Cyber-War," a world hand-authored in structured JSON on Latitude's Voyage platform: 6 regions, 10 locations, 6 factions, 10 scripted characters, 5 scenario starts and 12 specialist roles.

**Design decisions.**

- No action improves all four ledgers (service continuity, data trust, patient harm, hardware runway). Every option is priced, and plans that look free carry a delayed cost.
- Evidence comes in three confidence tiers: raw, correlated, verified. Acting on a single source is faster and plants an error that surfaces later. Verification costs time while patients decline.
- The AI is written to be partly right. Its warnings about dependency check out. Its compromises are reasonable and each one preserves its own core process. Shutting it off harms patients.
- Authority is split on purpose. The security chief can quarantine and cannot treat. The physician can treat and cannot audit. The governor can order and cannot see.
- The debrief is mapped to the four functions of the NIST AI Risk Management Framework and ends with one transfer question: where can your organization not verify what its AI tells it?

**What it shows about how I work.** The exercise draws on twenty years working with data and technology on social impact and safety, across the United Nations, international nonprofits, and the private sector, most recently building ROSHAI as an AI-enabled OSINT practice. In that work, crisis response fails less often from missing technology than from unclear authority and unverified information. The exercise turns that into something a team can rehearse in an hour: decision rights, independent evidence, escalation thresholds and a written after-action record.

**Status, stated plainly.** Complete facilitator kit in draft: guide, role cards, three injects, board, debrief and capture template, plus a 5 to 10 minute interactive pre-read that runs in a browser with no account. No facilitated sessions have been run as of November 2026. The board is a discussion device and has not been validated as a model of anything.

**Materials.** Facilitator kit on request. Full interactive world on Voyage: https://beta.voyage.io/world/45z3T-7RznUl/costanoa-the-fog-of-cyber-war?share=true&published=true
