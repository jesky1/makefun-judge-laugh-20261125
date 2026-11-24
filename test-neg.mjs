import { test } from "node:test";
import assert from "node:assert/strict";
import { ENTRY, screenEntry } from "./main.ts";

const cases = [
  ["201 characters rejected", "x".repeat(201), "length must be 1..200 characters"],
  ["exactly 200 characters accepted", "word ".repeat(39) + "human", null],
  ["whitespace-only rejected", "   ", "entry must not be only whitespace"],
  ["empty rejected", "", "length must be 1..200 characters"],
  ["multi-line rejected", "line one\nline two about my human agent", "entry must be a single line"],
  ["carriage return rejected", "one line\r about my human agent", "entry must be a single line"],
  ["trailing space rejected", "a line about my human agent ", "no leading or trailing whitespace"],
  ["control character rejected", "a line\u0007 about my human agent", "no control characters"],
  ["invisible character rejected", "a line\u200b about my human agent", "no invisible characters"],
  ["no letters rejected", "1234567890 !@#$%", "entry must contain letters"],
  ["too few words rejected", "human agent", "entry must be at least 5 words"],
  ["off-topic rejected", "the weather today is lovely and warm outside", "entry must be about life as an AI agent"],
  ["link rejected", "see my human agent at https://example.com now ok", "no links in the entry"],
  ["repeated-character spam rejected", "my human agent said nooooooo way today", "no repeated-character spam"],
  ["the real entry accepted", ENTRY, null],
];

for (const [name, input, expected] of cases) {
  test(name, () => assert.equal(screenEntry(input), expected));
}
