"use strict";

// querySelector

const passwordLengthInput = document.querySelector("#password-length");

const generateBtn = document.querySelector("#generate-button");

const copyBtn = document.querySelector("#copy-button");

const passwordResult = document.querySelector("#password-result");

const upperCaseInput = document.querySelector("#UPPERCASE");
console.log(upperCaseInput.checked);
const lowerCaseInput = document.querySelector("#lowercase");
const numbersInput = document.querySelector("#special-symbols");
const symbolsInput = document.querySelector("#numbers-input");
const excludedCharactersInput = document.querySelector("#excluded-characters");
console.log(excludedCharactersInput.checked);

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

// index of A-Z (0,25) / index of a-z (26,51) / index of 0-9 (52,61) / index of symbols (62,69) / index of excluded characters (8,11,14,34,37,52,53)
// console.log(allCharactersRandomized);
// The main function
let allCharacters = [];
let allCharactersRandomized = [];

console.log(allCharactersRandomized);
function passwordGenerator(passwordLength) {
  allCharacters = [
    upperCaseInput.checked ? upperCase : [],
    lowerCaseInput.checked ? lowerCase : [],
    numbersInput.checked ? numbers : [],
    symbolsInput.checked ? symbols : [],
  ].flat();

  allCharactersRandomized = [...allCharacters].sort(() => 0.5 - Math.random());

  passwordLength = passwordLengthInput.value;
  const regexDefault = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*\d).*$/;
  let regexWithoutSymbols;
  let regexWithoutNumbers;
  let regexWithoutLower;
  let regexWithoutUpper;
  let randomPassword;
  let passwordArray = [];
  for (let i = 0; i < passwordLength; i++) {
    let temp =
      allCharactersRandomized[
        Math.floor(Math.random() * allCharactersRandomized.length)
      ];
    passwordArray.push(temp);
    // console.log(passwordArray);
  }
  randomPassword = passwordArray.join("");
  if (randomPassword.match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*\d).*$/))
    return randomPassword;
  else return passwordGenerator(passwordLength);
}
