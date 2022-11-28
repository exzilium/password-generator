// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array variables to store possible values to use for password generation

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
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
var numbers09 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
  "/",
  ":",
  ";",
  "?",
  "[",
  "]",
  "{",
  "}",
  "~",
];

// When button is pressed, writePassword is called which contains generatePAssword(), defined here

generatePassword = function () {
  // Wecome instructions
  window.alert("Let's create a password");

  // User Chooses number of characters to use when generating pw

  var userCharCount = window.prompt(
    "How long would you like your password to be? (Choose between 8 to 128 characters)"
  );

  // check to see if user selected between 8-128 characters

  if (userCharCount < 8 || userCharCount > 128) {
    window.alert("Please choose a number between 8 and 128");
    generatePassword();
  } else {
    window.alert("You chose: " + userCharCount);
    console.log(userCharCount);
  }

  // confirm which types of characters to use when generating password

  var userUpperCase = window.confirm("Would you like UPPERCASE letters?");
  var userLowerCase = window.confirm("Would you like lowercase letters?");
  var userNumbers09 = window.confirm("Would you like to use numbers?");
  var userSpecialChars = window.confirm(
    "Do you want your password to be extra special (and secure) by using special characters?"
  );

  var userContinue = window.confirm(
    "Thank you. Here's what I have so far - Number of Characters: " +
      userCharCount +
      ", Use Uppercase: " +
      userUpperCase +
      ", Use Lowercase: " +
      userLowerCase +
      ", Use Numbers: " +
      userNumbers09 +
      ", Use Specials: " +
      userSpecialChars +
      " If this looks good, click OK!"
  );

  console.log(
    "Uppercase: " +
      userUpperCase +
      ", Lowercase: " +
      userLowerCase +
      ", Numbers: " +
      userNumbers09 +
      ", Specials: " +
      userSpecialChars
  );

  if (!userContinue) {
    generatePassword();
  }

  else{

  }
};
