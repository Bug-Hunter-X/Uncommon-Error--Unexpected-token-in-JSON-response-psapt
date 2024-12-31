function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

module.exports = calculator;
//This file demonstrates handling unexpected tokens in JSON
const jsonString = '{ "name":"John Doe", "age":30, "city":"New York"}';

try {
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error('Invalid JSON format:', error);
    //Handle the malformed JSON, perhaps by logging it or returning a default value.
  } else {
    console.error('An unexpected error occurred:', error);
  }
}
