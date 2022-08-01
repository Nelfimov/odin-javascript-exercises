const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let result = 0;
  array.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function (array) {
  let result = 1;
  array.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let result = 1;
  for (let i = 1; i <= a; i++) result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
