import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const src = resolve(here, "../../CLAUDE.md");
const out = resolve(here, "../public/agent-spec.md");

const raw = readFileSync(src, "utf8");
const marker = "# Your Healthcare Agent";
const idx = raw.indexOf(marker);
if (idx === -1) {
  console.error(`build-spec: could not find "${marker}" in ${src}`);
  process.exit(1);
}

const spec = raw.slice(idx).trimEnd() + "\n";
writeFileSync(out, spec);
console.log(`build-spec: wrote ${spec.length} chars to ${out}`);
