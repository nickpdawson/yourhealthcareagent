# Claude Code dev-session context — YourHealthcareAgent

This file is **for Claude Code only** (or any AI coding assistant working
on this repo). It is *not* the agent spec. Do not paste it into Claude.ai.

## The most important rule

**Never write project-meta, dev-status, contributor notes, or any other
repo-management content into the root `CLAUDE.md`.**

The root `/CLAUDE.md` is the behavioral specification for the patient
agent itself. End-users paste it verbatim into Claude.ai → Projects →
Project Instructions. It is also rendered on yourhealthcareagent.org as
the copy-block (via `site/scripts/build-spec.mjs`). Anything you add to
the top of that file ships to thousands of people pasting it into Claude
without context. Keep it pure spec.

If you need to record dev context, status, decisions, or anything *about
the repo*, put it here in `.claude/CLAUDE.md` (or in `README.md` if it's
useful to humans browsing GitHub).

## What this repo is

`yourhealthcareagent.org` — an open-source AI healthcare navigation
agent and its companion website.

- `/CLAUDE.md` — the behavioral spec for the patient agent itself (pure
  spec, no project-meta; what users paste into Claude.ai)
- `/README.md` — human-facing project description (GitHub landing)
- `/site` — Cloudflare Workers static site (wrangler + plain HTML/CSS,
  no framework)

## Stack

- Cloudflare Workers + static assets (Wrangler `assets` binding)
- `site/wrangler.jsonc` is the source of truth for site config
- No framework on the site — plain HTML/CSS only
- GitHub: `github.com/nickpdawson/yourhealthcareagent`
- CF account: `nd@nickdawson.net` (account id `1cb2e163…`)
- Worker name: `yourhealthcareagent-site`
- Custom domain: `yourhealthcareagent.org` (live, connected via CF
  custom-domain route)

## How the site renders the spec

`site/public/index.html` fetches `/agent-spec.md` at runtime and shows
it in a `<pre>` with a copy button.

`/agent-spec.md` is **generated** by `site/scripts/build-spec.mjs`,
which reads `../CLAUDE.md` and slices from `# Your Healthcare Agent`
onward. The slice marker is a safety net — if someone re-prepends a
project-overview block to root CLAUDE.md, the build will still strip
it before publishing. Don't rely on that as license to prepend
anything; **keep root CLAUDE.md pure spec**.

The generated file is gitignored (`site/.gitignore` →
`public/agent-spec.md`).

## Deploy

```
npm --prefix site run deploy
```

That runs `build-spec` then `wrangler deploy`. Wrangler auth is via
the logged-in CF OAuth token on this machine.

## Current status (live)

- Site live on `yourhealthcareagent.org` (CF Workers, custom domain
  connected)
- Spec block with copy button live
- Placeholder copy / no setup-guide page yet
- No YouTube embed yet

## Conventions

- Commit messages: short subject + a body paragraph explaining why.
  No marketing tone.
- Don't add framework dependencies to the site without asking.
- Don't paste large blocks of plan/status output into the repo. Use
  this file or `README.md` if persistence is needed; otherwise the
  conversation is enough.
