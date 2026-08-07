import { describe, expect, it } from "vitest";
import { createLeadCode, normalizeEmail, normalizeVietnamesePhone } from "./lead";

describe("lead helpers", () => {
  it("normalizes Vietnamese phone numbers", () => {
    expect(normalizeVietnamesePhone("+84 912-345-678")).toBe("0912345678");
    expect(normalizeVietnamesePhone("0912 345 678")).toBe("0912345678");
  });

  it("normalizes email", () => {
    expect(normalizeEmail(" Test@Example.COM ")).toBe("test@example.com");
    expect(normalizeEmail("")).toBeNull();
  });

  it("creates the required lead-code shape", () => {
    expect(createLeadCode(new Date("2026-07-31T00:00:00.000Z"), "abcd1234-0000-0000-0000-000000000000")).toBe("GC-LEAD-20260731-ABCD");
  });
});
