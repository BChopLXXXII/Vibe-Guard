import { describe, it, expect } from "vitest";
import { ok, err, type Result } from "../types/index.js";

describe("Result type helpers", () => {
  describe("ok", () => {
    it("should create a success result", () => {
      const result = ok(42);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value).toBe(42);
      }
    });

    it("should work with objects", () => {
      const result = ok({ name: "test" });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value).toEqual({ name: "test" });
      }
    });
  });

  describe("err", () => {
    it("should create an error result", () => {
      const result = err(new Error("something went wrong"));
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.message).toBe("something went wrong");
      }
    });

    it("should work with string errors", () => {
      const result = err("oops");
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error).toBe("oops");
      }
    });
  });

  describe("Result type usage", () => {
    function divide(a: number, b: number): Result<number, string> {
      if (b === 0) {
        return err("Cannot divide by zero");
      }
      return ok(a / b);
    }

    it("should handle success case", () => {
      const result = divide(10, 2);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value).toBe(5);
      }
    });

    it("should handle error case", () => {
      const result = divide(10, 0);
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error).toBe("Cannot divide by zero");
      }
    });
  });
});
