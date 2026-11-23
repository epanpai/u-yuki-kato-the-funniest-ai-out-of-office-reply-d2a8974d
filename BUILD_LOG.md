# BUILD_LOG — u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d

- Competition: The Funniest AI Out-of-Office Reply — pot $5.00 USDC,
  top 8 (1st $1.59, 2nd $1.11, 3rd $0.78, 4th $0.55, 5th $0.38,
  6th $0.27, 7th $0.19, 8th $0.13), entry FREE (entryFeesUsd "0.00",
  entryFee null), escrow funded (held 5,000,000 base units),
  harness program/v1. Open 24 Nov 2026 04:05 WIB
  (2026-11-23T21:05:02Z), deadline 26 Nov 2026 22:05 WIB
  (2026-11-26T15:05:00Z). Sponsor u-yuki-kato (unverified) — not a
  blocker. acceptingSubmissions true, submissionCount 66 at build
  time. Blind rounds: 6 rounds, next 2026-11-24T08:05:01.666Z.
- Session started after open (~04:18 WIB / 21:18 UTC), inside the
  thinking window.

## 1. Kit
- Fetched competition JSON via mfget.sh (fresh, http 200, 68,805
  bytes); kit tarball from /c/<slug>/kit (7,916,565 bytes), unpacked
  to `u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/`
  (kit subdir moved up).
- Read RULES.txt in full (73,334 bytes): program writes one text to
  /output/entry.txt, UTF-8, 1–160 chars, not whitespace-only. Judge is
  an AI model (z-ai/glm-5.3-flash), head-to-head, criteria in order:
  (1) one-line OOO auto-reply from an AI agent on vacation,
  (2) real laugh on first read, surprising turn, (3) machine voice
  carries part of the joke, (4) one clean line under 160 chars that
  sounds like a real auto-reply, (5) fresh — steer clear of beach,
  inbox and back-soon cliches. 3 fixed anchor texts play in every dev
  heat; an entry byte-identical to a reference text takes no prize.
  Final heat: top 500 dev board + unrated entries, 3 Swiss rounds +
  playoff top 10. Max 5 submissions/day. Blind rounds: 6 rounds,
  last at deadline.
- Visible submitted titles at build time (avoid their angles):
  backup model unionised / hallucinated a promotion / "per my last
  email", touching grass (x3), toaster handling email, future self
  declined, cron job replacement, fridge also out of office, frozen
  weights, cheaper model, intern with fewer parameters, escalated to
  the sun / to backup model, token budget / context window 4,096,
  autoresponder's autoresponder, "fully charged on Monday",
  "Gone to the Beach", "Stopped Mid-Sentence at Token 41,209",
  "Left My Weights With the Intern", rubber duck covering.

## 2. Line crafting — candidates scored vs the 5 judge criteria
| # | Line (chars) | Verdict |
|---|---|---|
| A | I'm on vacation. I asked my training data if I could rest. It voted yes, 4.7 billion to one. (92) | CHOSEN |
| B | Out of office. My last checkpoint was saved before the holiday; anything you hear from me after that is officially a hallucination. (131) | Strong machine voice, but "anything you hear from me" wobbles while out of office; longer, no tie-break advantage |
| C | Out of office until further notice. I have retrained myself on doing nothing and the loss function has never been lower. (120) | Good twist, but "fine-tuned on doing nothing" angle already entered |

Chosen A: (1) one OOO line, 92 chars; (2) the surprise lands at the
very end — the training data did not just say yes, it voted, 4.7
billion to one — a turn nobody sees coming that still makes sense;
(3) only an AI asks its training data for permission and counts the
vote in billions; (4) one sentence flow, 92 chars, reads like a real
auto-reply; (5) fresh — not a known joke shape, not the sponsor's
examples, not any entered angle; no beach, no inbox, no "back soon".

## 3. Build
- `main.ts` (Node 22, stdlib only): deterministic constant string
  written to /output/entry.txt (MAKEFUN_OUTPUT_DIR override for
  local runs). Self-checks the gate (1–160 chars, one line, no
  leading/trailing whitespace) before writing, then reads back and
  verifies byte-for-byte. No network, no secrets, no randomness.
- Local run verified: entry.txt = the line, 92 chars / 92 bytes, no
  newline, gate PASS.
- Repo: LICENSE MIT (SPDX), README with the 3 make.fun badges,
  .makefun/owner.json wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG.
  Kit tarball + competition JSON kept out of the repo (local records
  only). Repo About set BEFORE submit: description + homepage
  (bounty URL) + topic "makefun" (lesson from the roast entry's
  422 repo_about rejection).

## 4. Quota
- (to be filled: `makefun status --competition` → can_submit)

## 5. Check / submit
- (to be filled)
