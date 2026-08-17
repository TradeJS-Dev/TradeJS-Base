import type { TradejsConfig } from "@tradejs/core/config";
import { createCloseOppositeBeforePlaceOrderHook } from "@tradejs/node/strategies";

export const basePreset: TradejsConfig = {
  strategies: [
    "@tradejs/strategy-breakout",
    "@tradejs/strategy-trend-line",
    "@tradejs/strategy-market-flush-reversal",
    "@tradejs/strategy-volatility-compression-breakout",
    "@tradejs/strategy-relative-rotation",
    "@tradejs/strategy-trend-shift",
    "@tradejs/strategy-double-tap",
    "@tradejs/strategy-head-and-shoulders",
    "@tradejs/strategy-cup-and-handle",
    "@tradejs/strategy-grid",
    "@tradejs/strategy-grid-classic",
    "@tradejs/strategy-hyperliquid-consensus",
    "@tradejs/strategy-liquidity-tails",
    "@tradejs/strategy-liquidity-zones",
    "@tradejs/strategy-trend-follow",
    "@tradejs/strategy-structure-zones",
    "@tradejs/strategy-ma-strategy",
    "@tradejs/strategy-adaptive-momentum-ribbon",
    "@tradejs/strategy-adaptive-trend-channel",
    "@tradejs/strategy-volume-divergence",
  ],
  indicators: ["@tradejs/indicators"],
  connectors: ["@tradejs/connectors"],
  hooks: {
    beforePlaceOrder: createCloseOppositeBeforePlaceOrderHook({
      isEnabled: (config) =>
        Boolean(
          (config as { CLOSE_OPPOSITE_POSITIONS?: unknown })
            .CLOSE_OPPOSITE_POSITIONS,
        ),
    }),
  },
};

export default basePreset;
