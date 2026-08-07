import { describe, expect, it } from "vitest";
import { calculateEstimate } from "./estimator";

describe("calculateEstimate", () => {
  it("returns an investment range and itemized breakdown", () => {
    const result = calculateEstimate({ areaSqm: 120, machineCount: 40, segment: "gaming", configurationLevel: "balanced", includeInterior: true, includeAircon: true, includeCamera: false });
    expect(result.totalMin).toBeLessThan(result.totalMax);
    expect(result.costPerMachine).toBeGreaterThan(0);
    expect(result.breakdown.length).toBeGreaterThanOrEqual(4);
    expect(result.calculationVersion).toBe("2026.1");
  });
});
