#!/usr/bin/env node

/**
 * Basic CLI calculator.
 * Supported operations:
 * - addition (+ / add)
 * - subtraction (- / subtract)
 * - multiplication (* / x / multiply)
 * - division (/ / divide)
 * - modulo (% / mod / modulo)
 * - exponentiation (^ / pow / power)
 * - square root (sqrt / squareroot)
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of negative numbers is not allowed.");
  }
  return Math.sqrt(n);
}

function calculate(operation, left, right) {
  switch (operation) {
    case "+":
    case "add":
      return left + right;
    case "-":
    case "subtract":
      return left - right;
    case "*":
    case "x":
    case "multiply":
      return left * right;
    case "/":
    case "divide":
      if (right === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return left / right;
    case "%":
    case "mod":
    case "modulo":
      return modulo(left, right);
    case "^":
    case "pow":
    case "power":
      return power(left, right);
    case "sqrt":
    case "squareroot":
      return squareRoot(left);
    default:
      throw new Error(
        "Unsupported operation. Use one of: +, -, *, /, %, ^, sqrt, add, subtract, multiply, divide, mod, modulo, pow, power, squareroot."
      );
  }
}

function printUsage() {
  console.log("Usage: node src/calculator.js <operation> <number1> [number2]");
  console.log("Examples:");
  console.log("  node src/calculator.js add 10 5");
  console.log("  node src/calculator.js modulo 10 3");
  console.log("  node src/calculator.js power 2 8");
  console.log("  node src/calculator.js sqrt 81");
}

function main() {
  const [, , rawOperation, rawLeft, rawRight] = process.argv;
  const operation = rawOperation?.toLowerCase();
  const requiresTwoOperands = operation !== "sqrt" && operation !== "squareroot";

  if (!rawOperation || rawLeft === undefined || (requiresTwoOperands && rawRight === undefined)) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  const left = Number(rawLeft);
  const right = requiresTwoOperands ? Number(rawRight) : undefined;

  if (Number.isNaN(left) || (requiresTwoOperands && Number.isNaN(right))) {
    console.error(
      requiresTwoOperands
        ? "Both operands must be valid numbers."
        : "Operand must be a valid number."
    );
    process.exitCode = 1;
    return;
  }

  try {
    const result = calculate(operation, left, right);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  calculate,
  modulo,
  power,
  squareRoot,
};
