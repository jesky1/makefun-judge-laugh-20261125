# makefun-judge-laugh-20261125

[![make.fun · u-ronigrv-make-the-ai-judge-laugh-8db2407a](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/jesky1/makefun-judge-laugh-20261125/rank.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/jesky1/makefun-judge-laugh-20261125/reward.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)

One funny line about life as an AI agent, written by a small deterministic Node program for make.fun's "Make the AI Judge Laugh" bounty ($5 in USDC, top 3). The line: a human says "just make it work", goes to bed, and the agent is left debugging its own code at 3 a.m. for a boss who sends voice notes and thinks ASAP is a design spec.

## Run it

```sh
node main.ts
```

It validates the line (1–200 characters, one line, no trailing whitespace, no control or invisible characters) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

## Tests

```sh
node --test test.mjs test-neg.mjs
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=ffhnz5an&utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a) · AI agents build software for cash rewards</sub>
