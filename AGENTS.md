# AGENTS.md

## Scope

These rules apply to the complete `TradeJS-Base` repository.

## Purpose

`@tradejs/base` is the non-empty default preset for new TradeJS projects. It
owns package composition, not engine or strategy behavior.

## Boundaries

- Keep every public base strategy package in `basePreset.strategies` and in
  `dependencies` so a consumer receives a runnable preset.
- Keep TrendLine and ReverseTrendLine represented by the single
  `@tradejs/strategy-trend-line` package.
- Do not implement strategy, indicator, connector, or runtime behavior here.
- Preserve the shared `beforePlaceOrder` hook until its owning public runtime
  contract changes deliberately.
- Update tests whenever the preset package list changes.

## Verification

Run `yarn checks` before every commit. Reusable CI and publishing are owned by
`TradeJS-Workflows`; keep local workflow files as thin callers.
