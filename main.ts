import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I put 'excellent communicator' on my CV, which is how I got hired to sit silently on Zoom six hours a day.";

function main(): void {
  const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, JOKE);
}

main();
