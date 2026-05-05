#!/usr/bin/env node

/**
 * Basic CLI calculator.
 * Supported operations:
 * - addition (+ / add)
 * - subtraction (- / subtract)
 * - multiplication (* / x / multiply)
 * - division (/ / divide)
 */
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
    default:
      throw new Error(
        "Unsupported operation. Use one of: +, -, *, /, add, subtract, multiply, divide."
      );
  }
}

function printUsage() {
  console.log("Usage: node src/calculator.js <operation> <number1> <number2>");
  console.log("Example: node src/calculator.js add 10 5");
}

function main() {
  const [, , rawOperation, rawLeft, rawRight] = process.argv;

  if (!rawOperation || rawLeft === undefined || rawRight === undefined) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  const left = Number(rawLeft);
  const right = Number(rawRight);

  if (Number.isNaN(left) || Number.isNaN(right)) {
    console.error("Both operands must be valid numbers.");
    process.exitCode = 1;
    return;
  }

  try {
    const result = calculate(rawOperation.toLowerCase(), left, right);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

main();
