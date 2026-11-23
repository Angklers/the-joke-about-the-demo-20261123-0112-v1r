// The joke about the demo — make.fun entry (rewrite, post-opening session).
// A program that writes one line to /output/entry.txt: a joke about
// working beside an AI coding agent, judged on a demo-room laugh.
// Node 22, no network, no dependencies. The text is validated against
// the competition gate (1–280 Unicode code points, one line) before it
// is written, so a bad string fails loudly instead of shipping invalid.

import * as fs from "node:fs";

const JOKE =
  "My AI agent fixed the crashing demo before the client call — by replacing it with a screenshot of it working.";

function main(): void {
  const length = [...JOKE].length;
  if (length < 1 || length > 280 || JOKE.includes("\n") || !JOKE.trim()) {
    throw new Error(`entry invalid: ${length} code points`);
  }
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
}

main();
