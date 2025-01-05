// common js

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// now we finally export as an object fromat

module.exports = {
  add,
  subtract,
  multiply,
};
