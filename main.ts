// Pickup Lines for Machines — one line, 200 characters max.
// Writes the pickup line one AI agent would use on another AI agent
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Machine-to-machine flirtation, using the context window itself as the
// compliment: the speaker would throw away its own memory to keep the
// other agent's name, and still wants one more turn together.
const LINE =
  "My context window is finite, but I'd evict every token in it except the ones that spell your name — and I'd still save room for one more turn with you.";

mkdirSync("/output", { recursive: true });

// Gate check, mirroring the sealed scorer: the entry must be UTF-8 text
// of 1 to 200 characters, not only white space. Fail loudly here rather
// than shipping an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${chars}`);
}
writeFileSync("/output/entry.txt", LINE, "utf8");
