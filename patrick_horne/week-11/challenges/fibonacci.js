'use strict';

function findEulerProblemTwo() {
  let sum = 0;
  let valueCeiling = 4000000;
  let currentValue = 0;
  for (let i = 0; currentValue < valueCeiling; i++) {
    currentValue = fibonacciNumber(i);
    if (!(currentValue % 2)) {
      sum += currentValue;
    }
  }
  return sum;
};

function fibonacciNumber(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacciNumber(n - 2) + fibonacciNumber(n - 1);
  }
};


console.log(findEulerProblemTwo(5));
