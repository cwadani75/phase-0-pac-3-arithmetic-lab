// Basic Math Functions
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
    return a / b;
  }
  
  // Increment & Decrement
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  // Parsing Numbers
  function makeInt(n) {
    return parseInt(n, 10); // Parses `n` as an integer with base 10
  }
  
  function preserveDecimal(n) {
    return parseFloat(n); // Parses `n` as a floating-point number
  }
  
  // Export functions for testing
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal,
  };
  