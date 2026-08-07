import type { EstimateInput } from "@/lib/validation";

const machineCost = { entry: 13_000_000, balanced: 18_000_000, high: 28_000_000 } as const;
const segmentFactor = { standard: 1, gaming: 1.14, premium: 1.34 } as const;

export type EstimateResult = {
  totalMin: number;
  totalMax: number;
  costPerMachine: number;
  calculationVersion: "2026.1";
  breakdown: Array<{ label: string; amount: number }>;
};

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const pc = input.machineCount * machineCost[input.configurationLevel] * segmentFactor[input.segment];
  const interior = input.includeInterior ? input.areaSqm * 2_200_000 : 0;
  const aircon = input.includeAircon ? Math.ceil(input.areaSqm / 25) * 14_000_000 : 0;
  const camera = input.includeCamera ? Math.ceil(input.areaSqm / 40) * 2_400_000 : 0;
  const network = Math.max(35_000_000, input.machineCount * 1_200_000);
  const subtotal = pc + interior + aircon + camera + network;
  const totalMin = Math.round(subtotal * 0.92 / 1_000_000) * 1_000_000;
  const totalMax = Math.round(subtotal * 1.12 / 1_000_000) * 1_000_000;
  return {
    totalMin,
    totalMax,
    costPerMachine: Math.round(subtotal / input.machineCount),
    calculationVersion: "2026.1",
    breakdown: [
      { label: "Máy tính và thiết bị gaming", amount: Math.round(pc) },
      { label: "Hạ tầng mạng và máy chủ", amount: network },
      ...(interior ? [{ label: "Nội thất", amount: interior }] : []),
      ...(aircon ? [{ label: "Điều hòa", amount: aircon }] : []),
      ...(camera ? [{ label: "Camera", amount: camera }] : []),
    ],
  };
}
