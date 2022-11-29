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

// Global "final array" variable to use in random password generator

var finalUserArray;

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

  // Confirm which types of characters to use when generating password, then concat true values to form a final array to randomly choose from

  var userUpperCase = window.confirm("Would you like UPPERCASE letters?");

  // if any of the confirm dialogus are true, update global final user array to include uppercase array values

  if (userUpperCase) {
    finalUserArray = upperCase;
    console.log(finalUserArray);
  }

  var userLowerCase = window.confirm("Would you like lowercase letters?");

  // if true, concat new array

  if (userLowerCase) {
    finalUserArray = finalUserArray.concat(lowerCase);
    console.log(finalUserArray);
  }

  var userNumbers09 = window.confirm("Would you like to use numbers?");

  // if true, concat new array

  if (userNumbers09) {
    finalUserArray = finalUserArray.concat(numbers09);
    console.log(finalUserArray);
  }

  var userSpecialChars = window.confirm(
    "Do you want your password to be extra special (and secure) by using special characters?"
  );

  // if true, concat new array

  if (userSpecialChars) {
    finalUserArray = finalUserArray.concat(specialChars);
    console.log(finalUserArray);
  }

  // End of confirmation dialogues. Confirm selections to user.

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

  // If user clicks OK to continue, generate a password. Else, exit the function.

  if (userContinue) {
    // variable to collect the new password from the random number generator and array values

    var newPassword = "";

    // generate a random number for the length of the array

    for (let i = 0; i < userCharCount; i++) {
      var randomNumber = Math.floor(Math.random() * finalUserArray.length);
      console.log(randomNumber);

      // That random number will correspond to a character from the array. Take that character and add it to the generated password

      console.log(finalUserArray[randomNumber]);
      newPassword += finalUserArray[randomNumber];
    }

    // Return the new value so that it sets the value of generatedPassword() to equal the new password

    console.log(newPassword);
    return newPassword;

    // end function on user cancel
  } else {
    return;
  }
};
