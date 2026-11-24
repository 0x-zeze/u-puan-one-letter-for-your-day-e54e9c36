// One Letter for Your Day — entry: K
// The letter K stands for "kaput": a day when build after build failed.
// Writes exactly one byte, "K", with no trailing newline, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "K"; // the whole entry: one letter, nothing else
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

if (LETTER.length !== 1) {
  throw new Error("entry must be exactly one character");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LETTER, "utf8");
