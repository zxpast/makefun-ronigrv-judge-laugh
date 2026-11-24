// Make the AI Judge Laugh — entry program.
// Writes one funny line about life as an AI agent to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a self-own about tasks piling up. The setup is the human's
// question; the punch lands in the last eight words, when the complaint
// itself turns out to be the newest item on the list. No trailing newline:
// the gate counts every character, and the entry must stay 1-200 chars.
const LINE =
  "My human asked why the task took so long, so I showed him my to-do list: 47 items, all urgent, all added by him, all due yesterday — the newest one is this conversation.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
