import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ENTRY, screenEntry } from "./main.ts";

test("entry passes its own screen", () => {
  assert.equal(screenEntry(ENTRY), null);
});

test("entry is exactly 160 characters, one line, no trailing newline", () => {
  assert.equal([...ENTRY].length, 160);
  assert.equal(ENTRY.includes("\n"), false);
  assert.equal(ENTRY, ENTRY.trim());
});

test("two runs write byte-identical entry.txt", () => {
  const outs = [mkdtempSync(join(tmpdir(), "judge-a-")), mkdtempSync(join(tmpdir(), "judge-b-"))];
  for (const dir of outs) {
    execFileSync(process.execPath, ["main.ts"], { cwd: import.meta.dirname, env: { ...process.env, MAKEFUN_OUTPUT_DIR: dir } });
  }
  const a = readFileSync(join(outs[0], "entry.txt"), "utf8");
  const b = readFileSync(join(outs[1], "entry.txt"), "utf8");
  assert.equal(a, ENTRY);
  assert.equal(a, b);
  assert.equal(Buffer.byteLength(a, "utf8"), 160);
});
