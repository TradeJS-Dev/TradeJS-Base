# AGENTS.md

## Scope

These rules apply to the complete `TradeJS-Base` repository.

## Purpose

`@tradejs/base` is the non-empty default preset for new TradeJS projects. It
owns package composition, not engine or strategy behavior.

## Workspace Routing

- Start from `~/dev/tradejs/AGENTS.md`; do not scan sibling repositories.
- Change only default package composition here. Strategy behavior belongs in
  its standalone `tradejs-strategy-*` repository; shared helpers belong in
  `tradejs-strategy-kit`; runtime/framework behavior belongs in `investing`.
- Run operational validation of the composed project from `tradejs-project`.
  Do not create research artifacts or runtime config in this repository.

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

## Runtime Dependency Contract

- Keep every `@tradejs/*` runtime package in both `peerDependencies` and `devDependencies`, never in `dependencies`.
- The consuming TradeJS Project must own the exact runtime composition; nested TradeJS package copies are forbidden.
- Keep the package-contract test in `yarn checks` whenever dependency metadata changes.
