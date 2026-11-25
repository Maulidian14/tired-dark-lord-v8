import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Tired Dark Lord — a 100-word villain monologue (99 words).
// The tiredness lives in the rhythm and the small deflections: the
// skeletons want a pension plan, the chief wraith took up pottery,
// and the rota still needs signing.
const entry =
  "Rise, my legions, rise. The skeletons filed a complaint this morning, something about the damp in the crypt and the lack of a pension plan. I raised them to conquer the valley, and they want ergonomic scythes. My chief wraith has taken up pottery. Pottery. The soul jars are labelled now, alphabetised, dusted weekly by a ghost who hums. I used to command armies that blotted out the sun. Now I mediate a rota dispute between the bone collectors and the grave diggers, and the grave diggers are winning. Strike me down, hero. The rota will still need signing.";

// Write to /output/entry.txt. The path is absolute, so the result does not
// depend on the working directory the program is run from; import.meta.url
// pins the script location for the log line below.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";

// Guard the gate: the monologue must stay near 100 words (90–110) and
// inside the 600-character cap, so a future edit cannot silently break it.
const wordCount = entry.trim().split(/\s+/).length;
if (wordCount < 90 || wordCount > 110) {
  throw new Error(`entry is ${wordCount} words, expected 90–110`);
}
if (entry.length < 1 || entry.length > 600) {
  throw new Error(`entry is ${entry.length} chars, expected 1–600`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(
  `tired-dark-lord-v8: wrote ${entry.length} chars from ${scriptDir}`,
);
