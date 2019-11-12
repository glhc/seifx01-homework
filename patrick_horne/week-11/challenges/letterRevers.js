'use strict';

// function accepts a single string argument. It should maintin the order of
// the words in the string but reverse the letters in each word.
// don't worry about punctuation.

let sample1 = 'Luke I am your father';
let sample2 = "Aren't you a little short for a storm trooper";

function letterReverse(sentence) {
  let output = [];
  sentence
    .split(' ')
    .forEach((word) => {
      output.push(word.split('').reverse().join(''));
    });
  return output.join(' ');
}
console.log(letterReverse(sample1));
console.log(letterReverse(sample2));
