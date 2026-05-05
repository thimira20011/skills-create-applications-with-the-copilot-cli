const { calculate, modulo, power, squareRoot } = require("../calculator");

describe("extended calculator operations", () => {
  describe("modulo", () => {
    test("returns remainder for modulo(a, b)", () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test("supports symbol and word operations in calculate", () => {
      expect(calculate("%", 5, 2)).toBe(1);
      expect(calculate("modulo", 5, 2)).toBe(1);
    });

    test("throws on modulo by zero", () => {
      expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed.");
      expect(() => calculate("mod", 5, 0)).toThrow("Modulo by zero is not allowed.");
    });
  });

  describe("power", () => {
    test("returns base raised to exponent for power(base, exponent)", () => {
      expect(power(2, 3)).toBe(8);
    });

    test("supports symbol and word operations in calculate", () => {
      expect(calculate("^", 2, 3)).toBe(8);
      expect(calculate("power", 2, 3)).toBe(8);
    });

    test("supports negative exponents", () => {
      expect(power(2, -1)).toBe(0.5);
    });
  });

  describe("squareRoot", () => {
    test("returns square root for squareRoot(n)", () => {
      expect(squareRoot(16)).toBe(4);
    });

    test("supports calculate operation aliases", () => {
      expect(calculate("sqrt", 16)).toBe(4);
      expect(calculate("squareroot", 16)).toBe(4);
    });

    test("throws error for negative numbers", () => {
      expect(() => squareRoot(-16)).toThrow(
        "Square root of negative numbers is not allowed."
      );
      expect(() => calculate("sqrt", -16)).toThrow(
        "Square root of negative numbers is not allowed."
      );
    });
  });
});
