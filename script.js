"use strict";
// original unrandomized arrays
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCase = upperCase.map(
  (item, index, arr) => (item = item.toLowerCase())
);
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

// declartives
let upperCaseRandomized;
let lowerCaseRandomized;
let numbersRandomized;
let symbolsRandomized;

// console.log(lowerCase);

function getRandomUpperCase() {
  upperCaseRandomized = upperCase.sort(() => 0.5 - Math.random());
}

function getRandomLowerCase() {
  lowerCaseRandomized = lowerCase.sort(() => 0.5 - Math.random());
}

function getRandomNumbers() {
  numbersRandomized = numbers.sort(() => 0.5 - Math.random());
}

function getRandomSymbols() {
  symbolsRandomized = symbols.sort(() => 0.5 - Math.random());
}

getRandomLowerCase();
getRandomNumbers();
getRandomSymbols();
getRandomUpperCase();

console.log(upperCaseRandomized);
console.log(lowerCaseRandomized);
console.log(numbersRandomized);
console.log(symbolsRandomized);

// The main function
let randomPassword;
let passwordArray = [];
function passwordGenerator(passwordLength, upper, lower, numbers, symbols) {
  for (var i = 0; i <= passwordLength; i++) {
    let temp = numbersRandomized[Math.floor(Math.random() * 10)];
    passwordArray.push(temp);
  }
  return passwordArray;
  // return temp;
}

console.log(passwordGenerator(12));
console.log(numbersRandomized[Math.floor(Math.random() * 10)]);
