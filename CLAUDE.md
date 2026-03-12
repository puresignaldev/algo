# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run build   # Emit .d.ts declarations (tsc) + bundle with Bun → dist/
bun run test    # Run Vitest test suite (watch mode)
bun run test --run  # Run tests once (non-interactive)
```

No linter or formatter is configured.

## Architecture

`@puresignal/algo` is a TypeScript library for algorithmic composition utilities, published to npm as an ESM package.

- **`src/index.ts`** — public entry point; re-exports from `src/classes/`
- **`src/classes/Urn.ts`** — the only class; implements a non-repeating random draw inspired by Max/MSP's `urn` object. Cycles through integers `[0, max)` in shuffled order, guaranteeing each value appears exactly once per cycle. Supports `noRepeat` (no consecutive repeats across cycle boundaries) and `onCycle` (callback at cycle start).
- **`src/classes/Urn.test.ts`** — Vitest + Chai tests covering range guarantees, cycle semantics, `onCycle` timing, and `noRepeat` behaviour.

The build pipeline runs two steps: `tsc --emitDeclarationOnly` (generates `.d.ts` files) then `bun build` bundles `src/index.ts` into `dist/`. Publishing to npm is automated via `.github/workflows/publish.yml` (triggered by release or manual dispatch).
