/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power (exponentiation)
 * - squareRoot
 */

// addition: returns the sum of a and b
function addition(a, b) {
  return a + b;
}

// subtraction: returns the difference of a and b
function subtraction(a, b) {
  return a - b;
}

// multiplication: returns the product of a and b
function multiplication(a, b) {
  return a * b;
}

// division: returns the quotient of a divided by b
// Throws an error if b is zero
function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// modulo: returns the remainder of a divided by b
// Throws an error if b is zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// power (exponentiation): returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// squareRoot: returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
