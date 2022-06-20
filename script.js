"use strict";
// querySelector

const passwordLengthInput = document.querySelector("#password-length");

const generateBtn = document.querySelector("#generate-button");

const copyBtn = document.querySelector("#copy-button");

const passwordResult = document.querySelector("#password-result");

generateBtn.addEventListener(
  "click",
  () => (passwordResult.innerHTML = " " + passwordGenerator())
);

// copyBtn.addEventListener("click", function () {
//   /* Select the text field */
//   randomPassword.select();
//   randomPassword.setSelectionRange(0, 99999); /* For mobile devices */
//
//   /* Copy the text inside the text field */
//   navigator.clipboard.writeText(randomPassword.value);
//
//   /* Alert the copied text */
//   alert("Copied the text: " + randomPassword.value);
// });

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

const allCharacters = [
  ...upperCaseRandomized,
  ...lowerCaseRandomized,
  ...numbersRandomized,
  ...symbolsRandomized,
];

console.log(allCharacters);
// The main function

function passwordGenerator(passwordLength) {
  passwordLength = passwordLengthInput.value;
  const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*\d).*$/;
  let randomPassword;
  let passwordArray = [];
  for (let i = 0; i < passwordLength; i++) {
    let temp = allCharacters[Math.floor(Math.random() * 70)];
    passwordArray.push(temp);
  }
  randomPassword = passwordArray.join("");
  if (randomPassword.match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*\d).*$/))
    return randomPassword;
  else {
    // console.log(passwordLength);
    return passwordGenerator(passwordLength);
  }
}

// console.log(passwordGenerator());
// console.log(passwordGenerator().length);
// console.log(randomPassword);

// Connecting to front-end
// console.log(passwordLengthInput.value);
