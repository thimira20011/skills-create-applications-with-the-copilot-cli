const {
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('addition', () => {
  test('adds two positive numbers', () => {
    expect(addition(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number', () => {
    expect(addition(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(addition(-4, -6)).toBe(-10);
  });

  test('adds zero', () => {
    expect(addition(7, 0)).toBe(7);
  });
});

describe('subtraction', () => {
  test('subtracts two positive numbers', () => {
    expect(subtraction(10, 4)).toBe(6);
  });

  test('subtracts to produce a negative result', () => {
    expect(subtraction(3, 8)).toBe(-5);
  });

  test('subtracts zero', () => {
    expect(subtraction(5, 0)).toBe(5);
  });
});

describe('multiplication', () => {
  test('multiplies two positive numbers', () => {
    expect(multiplication(3, 4)).toBe(12);
  });

  test('multiplies by zero', () => {
    expect(multiplication(5, 0)).toBe(0);
  });

  test('multiplies negative numbers', () => {
    expect(multiplication(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiplication(3, -4)).toBe(-12);
  });
});

describe('division', () => {
  test('divides two positive numbers', () => {
    expect(division(10, 2)).toBe(5);
  });

  test('divides to produce a decimal result', () => {
    expect(division(7, 2)).toBe(3.5);
  });

  test('throws an error for division by zero', () => {
    expect(() => division(5, 0)).toThrow('Division by zero is not allowed');
  });
});

describe('modulo', () => {
  test('returns the remainder of two positive numbers', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('returns the modulo with a larger divisor', () => {
    expect(modulo(5, 8)).toBe(5);
  });

  test('throws an error for modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
  });
});

describe('power (exponentiation)', () => {
  test('raises a number to a positive exponent', () => {
    expect(power(2, 10)).toBe(1024);
  });

  test('raises a number to the power of zero', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a number to the power of one', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a number to a negative exponent', () => {
    expect(power(2, -1)).toBe(0.5);
  });
});

describe('squareRoot (square root)', () => {
  test('returns the square root of a perfect square', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('returns the square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test('returns zero for squareRoot of zero', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('throws an error for square root of a negative number', () => {
    expect(() => squareRoot(-4)).toThrow(
      'Square root of a negative number is not allowed'
    );
  });
});

describe('calculate aliases', () => {
  test('supports basic operation aliases', () => {
    expect(calculate('+', 7, 5)).toBe(12);
    expect(calculate('subtract', 7, 5)).toBe(2);
    expect(calculate('x', 7, 5)).toBe(35);
    expect(calculate('divide', 7, 2)).toBe(3.5);
  });

  test('supports expanded operation aliases', () => {
    expect(calculate('%', 10, 3)).toBe(1);
    expect(calculate('power', 2, 8)).toBe(256);
    expect(calculate('sqrt', 81)).toBe(9);
  });

  test('throws for unsupported operations', () => {
    expect(() => calculate('noop', 1, 2)).toThrow('Unsupported operation');
  });
});
