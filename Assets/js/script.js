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
  /* finalUserArray variable is used to concat the alphanumeric and symbol arrays above into a single array depending on user preference.
  finalUserArray is given a "temp" value to prevent concat errors if user chooses "Cancel" which gives "undefined" value, which can't be concat'd.
  The "temp" value will be removed from final array after user selections so it doesn't appear in the generated password */
  var finalUserArray = ["temp"];

  // variable to collect the new password from the random number generator and array value picker below
  var newPassword = "";

  // User instructions: Wecome
  window.alert(
    "Hello, there! I will help you create a password using characters of your choosing.\n\nClick OK to continue."
  );
  // User instructions: Chooses number of characters to use when generating password

  var userCharCount = window.prompt(
    "How long would you like your password to be? (Choose between 8 to 128 characters)"
  );
  // Error check: Did user select between 8-128 numberical chars. If error: Exit workflow and try again.

  if (userCharCount < 8 || userCharCount > 128 || isNaN(userCharCount)) {
    // User instructions: re-start workflow.
    var errorContinue = window.alert(
      "Please choose a number between 8 and 128.\nTry again!"
    );
    return "Try Again";
  }

  // User instructions: Confirm which types of characters to use when generating password

  // --UPPERCASE--
  var userUpperCase = window.confirm(
    "Would you like to use 'UPPERCASE' letters?"
  );

  // If true, concat onto final array for password generation

  if (userUpperCase) {
    finalUserArray = finalUserArray.concat(upperCase);
  }
  // --LOWERCASE--
  var userLowerCase = window.confirm(
    "Would you like to use 'lowercase' letters?"
  );

  // If true, concat onto final array for password generation

  if (userLowerCase) {
    finalUserArray = finalUserArray.concat(lowerCase);
  }
  // --NUMBERS--
  var userNumbers09 = window.confirm(
    "Would you like to use numbers?\nI'll try to pick a few lucky ones."
  );

  // If true, concat onto final array for password generation

  if (userNumbers09) {
    finalUserArray = finalUserArray.concat(numbers09);
  }
  // --SPECIAL CHARS--
  var userSpecialChars = window.confirm(
    "Do you want your password to be extra special (and extra secure) by using *special* characters?"
  );

  // Error check: If all char type selections are false, prompt to try again

  if (!userUpperCase && !userLowerCase && !userNumbers09 && !userSpecialChars) {
    // User instruction: Choose a type of character and restart workflow
    var errorContinue = window.alert(
      "You have to let me use some type of characters!\nTry again!"
    );
    return "Try Again";
  }
  // If true, concat onto final array for password generation

  if (userSpecialChars) {
    finalUserArray = finalUserArray.concat(specialChars);
  }

  // End of char type confirmation dialogues

  // User instruction: Confirm selections

  var userContinue = window.confirm(
    "Thank you. Here's what I have so far -\nNumber of Characters: " +
      userCharCount +
      "\nUse Uppercase: " +
      userUpperCase +
      "\nUse Lowercase: " +
      userLowerCase +
      "\nUse Numbers: " +
      userNumbers09 +
      "\nUse Special Characters: " +
      userSpecialChars +
      "\n\nIf this looks good, click OK! Otherwise, please try again."
  );

  // If user clicks OK to continue, generate a password. Else, exit the workflow and try again.

  if (userContinue) {
    // --GENERATE PASSWORD--

    // Remove "temp" from finalUserArray so it doesn't appear in generated password
    finalUserArray.shift();

    // Generate a random number for the length of the finalUserArray concat'd values

    for (let i = 0; i < userCharCount; i++) {
      var randomNumber = Math.floor(Math.random() * finalUserArray.length);

      // The above random number will correspond to the index of a character within the array. Take that character and add it to the new generated password variable.

      newPassword += finalUserArray[randomNumber];
    }

    // Return the new value so that it sets the value of generatedPassword() to equal the newly generated password

    return newPassword;
  } else {
    return "Try Again";
  }
};
