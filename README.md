# @tradejs/base

Default preset for the TradeJS TypeScript framework.

- Homepage: https://tradejs.dev
- Documentation: https://docs.tradejs.dev
- Quickstart: https://docs.tradejs.dev/getting-started/quickstart

## License

Version 2.0.0 and later is licensed under Business Source License 1.1. The
Additional Use Grant permits internal and other non-competing production use;
providing a competing product or service requires a commercial license.
Earlier releases remain MIT-licensed. See the
[TradeJS licensing policy](https://github.com/TradeJS-Dev/TradeJS/blob/stable/LICENSING.md).

## What It Provides

`basePreset` installs and wires the public TradeJS packages:

- all 20 public strategy packages
- `@tradejs/indicators`
- `@tradejs/connectors`

`TrendLine` and `ReverseTrendLine` are intentionally delivered together by
`@tradejs/strategy-trend-line`; all other strategy packages map one-to-one to
their repositories.

Use it as the starting point for external projects, then append your own plugin packages.

## Install

```bash
npm i @tradejs/base @tradejs/core
```

## Usage

```ts
import { defineConfig } from "@tradejs/core/config";
import { basePreset } from "@tradejs/base";

export default defineConfig(basePreset, {
  strategies: ["@your-scope/private-strategy"],
  indicators: ["@your-scope/tradejs-indicators"],
  connectors: ["@your-scope/tradejs-connectors"],
});
```

If you only need the built-in catalog, `defineConfig(basePreset)` is enough.

The source of truth for the preset is this repository. Strategy implementation
changes belong to their individual repositories and do not require a TradeJS
engine commit.

Package publishing is beta-first. Relevant pushes publish a unique prerelease
and validate it in the production-like Project image. Weekly automation alone
promotes the current verified beta to stable `latest`; the Project batches all
new stable TradeJS packages into one production image later that morning.

Keywords: ai, claude, codex.
