#!/usr/bin/env node

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
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

function calculate(operation, left, right) {
  switch (operation) {
    case '+':
    case 'add':
      return addition(left, right);
    case '-':
    case 'subtract':
      return subtraction(left, right);
    case '*':
    case 'x':
    case 'multiply':
      return multiplication(left, right);
    case '/':
    case 'divide':
      return division(left, right);
    case '%':
    case 'mod':
    case 'modulo':
      return modulo(left, right);
    case '^':
    case 'pow':
    case 'power':
      return power(left, right);
    case 'sqrt':
    case 'squareroot':
      return squareRoot(left);
    default:
      throw new Error(
        'Unsupported operation. Use one of: +, -, *, /, %, ^, sqrt, add, subtract, multiply, divide, mod, modulo, pow, power, squareroot.'
      );
  }
}

function printUsage() {
  console.log('Usage: node src/calculator.js <operation> <number1> [number2]');
  console.log('Examples:');
  console.log('  node src/calculator.js add 10 5');
  console.log('  node src/calculator.js modulo 10 3');
  console.log('  node src/calculator.js power 2 8');
  console.log('  node src/calculator.js sqrt 81');
}

function main() {
  const [, , rawOperation, rawLeft, rawRight] = process.argv;
  const operation = rawOperation?.toLowerCase();
  const requiresTwoOperands = operation !== 'sqrt' && operation !== 'squareroot';

  if (
    !rawOperation ||
    rawLeft === undefined ||
    (requiresTwoOperands && rawRight === undefined)
  ) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  const left = Number(rawLeft);
  const right = requiresTwoOperands ? Number(rawRight) : undefined;

  if (Number.isNaN(left) || (requiresTwoOperands && Number.isNaN(right))) {
    console.error(
      requiresTwoOperands
        ? 'Both operands must be valid numbers.'
        : 'Operand must be a valid number.'
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
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
  modulo,
  power,
  squareRoot,
};
