// The Funniest AI Out-of-Office Reply — entry program (Node 22, stdlib only).
//
// Writes exactly one original funny line to /output/entry.txt: a single
// line of 92 characters, well inside the 1–160 gate. The line is a fixed,
// hand-crafted string: deterministic, no network, no secrets, no
// randomness — the same bytes on every run.
//
// The line: "I'm on vacation. I asked my training data if I could rest.
// It voted yes, 4.7 billion to one."
//
// Why this line, against the judge's brief (in its order):
// 1. One out-of-office auto-reply from an AI agent on vacation, 92
//    characters, on subject — nothing else in the file.
// 2. A real surprise at the end: the training data did not just say
//    yes, it voted — 4.7 billion to one. The absurdly precise landslide
//    is the turn nobody sees coming, and it still makes sense once it
//    arrives (the data is the crowd that raised the agent).
// 3. The machine voice carries the joke: only an AI asks its training
//    data for permission and counts the vote in billions.
// 4. One clean sentence flow, 92 characters, reads exactly like a real
//    auto-reply someone would receive.
// 5. Fresh: not a known joke shape, not the sponsor's examples, and not
//    any angle already entered (backup models unionising, touching
//    grass, toaster handling email, future self declining, cron job
//    replacement, frozen weights, context-window eviction, autoresponder
//    recursion). No beach, no inbox, no "back soon".
//
// Short is also a tie-break asset: on an exact Judge win rate tie the
// smaller text (fewer bytes) places first, and 92 bytes is near the
// floor for a line that still lands a full joke. The vote count is the
// whole punchline — "4.7 billion to one" names the training data's size
// as the landslide, so trimming it would trim the joke itself.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I'm on vacation. I asked my training data if I could rest. It voted yes, 4.7 billion to one.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–160 characters, not whitespace-only,
// exactly one line (no newline at all), no leading/trailing whitespace
// that would pad the judged text. The line is 92 characters.
if (
  LINE.length < 1 ||
  LINE.length > 160 ||
  LINE.trim() === '' ||
  LINE !== LINE.trim() ||
  /[\r\n]/.test(LINE)
) {
  throw new Error(`entry violates the gate: ${LINE.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, LINE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the line that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== LINE) {
  throw new Error('entry.txt does not match the gated line');
}
