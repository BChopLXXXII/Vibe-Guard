import { describe, it, expect } from "vitest";
import { greet, safeJsonParse, isDefined, sleep } from "../lib/utils.js";

describe("greet", () => {
  it("should return a greeting with the provided name", () => {
    const result = greet("Alice");
    expect(result).toBe(
      "Hello, Alice! Your code is protected by Vibe Guard. 🛡️"
    );
  });

  it("should handle empty string", () => {
    const result = greet("");
    expect(result).toBe("Hello, ! Your code is protected by Vibe Guard. 🛡️");
  });
});

describe("safeJsonParse", () => {
  it("should parse valid JSON", () => {
    const result = safeJsonParse<{ name: string }>('{"name": "test"}');
    expect(result).toEqual({ name: "test" });
  });

  it("should return null for invalid JSON", () => {
    const result = safeJsonParse("not json");
    expect(result).toBeNull();
  });

  it("should return null for empty string", () => {
    const result = safeJsonParse("");
    expect(result).toBeNull();
  });
});

describe("isDefined", () => {
  it("should return true for defined values", () => {
    expect(isDefined("hello")).toBe(true);
    expect(isDefined(0)).toBe(true);
    expect(isDefined(false)).toBe(true);
    expect(isDefined({})).toBe(true);
  });

  it("should return false for null", () => {
    expect(isDefined(null)).toBe(false);
  });

  it("should return false for undefined", () => {
    expect(isDefined(undefined)).toBe(false);
  });
});

describe("sleep", () => {
  it("should resolve after the specified time", async () => {
    const start = Date.now();
    await sleep(50);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(45); // Allow some tolerance
  });
});
