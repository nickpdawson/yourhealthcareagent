# Your Healthcare Agent

**An open-source behavioral specification for an AI-powered healthcare navigation agent.**

→ **[yourhealthcareagent.org](https://yourhealthcareagent.org)** — set up your agent in 10 minutes

---

## What this is

This repository contains a `CLAUDE.md` — a behavioral specification that turns Claude (Anthropic's AI) into a knowledgeable, rights-aware healthcare navigation agent for any person, regardless of prior expertise.

It implements the principles of **Critical AI Health Literacy (CAIHL)** and is built on a single conviction:

> *Every person is presumed to have agency in their own healthcare. They have just never had the support to exercise it. Until now.*

---

## What it does

The agent helps people:

- **Understand their coverage** — what's covered, what requires prior authorization, what's excluded, and what state and federal laws protect them
- **Interpret bills and EOBs** — translate insurer documents into plain English and identify what they actually owe
- **Appeal denials** — understand their rights, meet their deadlines, and draft appeals that work
- **Access their records and care** — navigate patient portals, request records, schedule referrals, and invoke their legal data rights
- **Navigate without insurance** — identify charity care, FQHC access, Medicaid eligibility, and emergency rights

It handles key nuances most patient advocacy tools miss:
- ERISA preemption for self-funded employer plans
- Medicare Advantage vs. Original Medicare differences
- HIPAA as a patient rights law, not a provider shield
- ICD and CPT code extraction from clinical documents for use in appeals
- Caregiver navigation and authorization requirements

---

## How to use it

### Option 1 — Claude.ai (recommended for most people)

1. Get [Claude Pro](https://claude.ai) ($20/month)
2. Create a new Project called **"My Healthcare"**
3. Copy the contents of `CLAUDE.md` into your Project Instructions
4. Upload your insurance card, Summary of Benefits, and any relevant documents
5. Start with: *"Tell me what kind of plan I have and what that means for my rights."*

Full setup guide at **[yourhealthcareagent.org](https://yourhealthcareagent.org)**

### Option 2 — Claude Code / advanced use

Clone this repo and use `CLAUDE.md` directly in any Claude Code project or agentic workflow.

```bash
git clone https://github.com/yourhealthcareagent/patient-agent
```

---

## Who this is for

- **Patients** navigating a bill, a denial, or open enrollment
- **Caregivers** advocating for a family member or someone in their care
- **Benefits navigators and community health workers** who want AI assistance for their clients
- **Organizations** like FQHCs, legal aid societies, and community organizations who want to train staff
- **Developers** building patient-facing tools who want a rights-aware behavioral foundation to build on

---

## The Four Moves

The agent is organized around four situations:

| Move | Situation | Posture |
|---|---|---|
| **Move 0** | Understand your coverage before anything goes wrong | Proactive |
| **Move 1** | A bill or EOB arrived — what do I actually owe? | Reactive |
| **Move 2** | I got denied — what are my rights and how do I appeal? | Reactive |
| **Move 3** | Get what I need — records, appointments, referrals | Active |

---

## Background

This project was developed by **Nick Dawson** — founder of [OwnChart](https://ownchart.me), former innovation leader at Johns Hopkins and Kaiser Permanente, Obama White House healthcare innovation advisor, and Stanford School of Medicine lecturer.

It builds on the work of **Hugo Campos** and colleagues at the National Academy of Medicine on Critical AI Health Literacy (CAIHL): [NAM Perspectives](https://nam.edu/perspectives/critical-ai-health-literacy-as-liberation-technology-a-new-skill-for-patient-empowerment/)

The presumed agency principle at the center of this project is developed further in Nick's Washington Post op-ed: *"American Healthcare Is Not a System. It Is What We Got Instead of One."*

---

## Contributing

This is a living document. Fork it, adapt it for your state or condition or community, and submit PRs.

Especially welcome:
- State-specific insurance commissioner links and rule summaries
- Condition-specific prior authorization guidance
- Translations
- Navigator and community health worker workflow adaptations
- Medicare Advantage plan-type specific nuances

---

## License

Creative Commons Attribution 4.0 International (CC BY 4.0)

You may use, adapt, and redistribute this work for any purpose, including commercially, as long as you give appropriate credit.

---

*Built on the conviction that every person is presumed to have agency in their own care.*
