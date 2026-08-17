describe("basePreset", () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it("wires shared beforePlaceOrder hook", () => {
    const createCloseOppositeBeforePlaceOrderHook = jest.fn(
      () => "before-place-order-hook",
    );

    jest.isolateModules(() => {
      jest.doMock("@tradejs/node/strategies", () => ({
        createCloseOppositeBeforePlaceOrderHook,
      }));

      const { basePreset } = require("../index");

      expect(createCloseOppositeBeforePlaceOrderHook).toHaveBeenCalledTimes(1);
      expect(basePreset).toMatchObject({
        indicators: ["@tradejs/indicators"],
        connectors: ["@tradejs/connectors"],
        hooks: {
          beforePlaceOrder: "before-place-order-hook",
        },
      });

      const [{ isEnabled }] = (createCloseOppositeBeforePlaceOrderHook.mock
        .calls[0] ?? []) as unknown as [
        { isEnabled: (config: Record<string, unknown>) => boolean },
      ];
      expect(isEnabled({ CLOSE_OPPOSITE_POSITIONS: false })).toBe(false);
      expect(isEnabled({ CLOSE_OPPOSITE_POSITIONS: true })).toBe(true);

      expect(basePreset.strategies).toHaveLength(20);
      expect(new Set(basePreset.strategies).size).toBe(20);
      expect(basePreset.strategies).toContain("@tradejs/strategy-trend-line");
      expect(basePreset.strategies).not.toContain("@tradejs/strategies");
    });
  });
});
