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
  //  "final array" variable to concat original arrays above depending on user selections and for use in random password generator
  // Give finalUserArray a single value in an array to prevent concat errors if user chooses "Cancel" which gives "undefined" value, which can't be concat'd
  // "temp" value will be removed from final array after user selections so it doesn't appear in the generated password
  var finalUserArray = ["temp"];
  console.log("reset the finalUserArray? " + finalUserArray);

  // Wecome instructions
  window.alert(
    "Hello, there! I will help you create a password using characters of your choosing.\n\nClick OK to continue."
  );

  // User Chooses number of characters to use when generating password

  var userCharCount = window.prompt(
    "How long would you like your password to be? (Choose between 8 to 128 characters)"
  );
  // check to see if user selected between 8-128 characters

  if (userCharCount < 8 || userCharCount > 128 || isNaN(userCharCount)) {
    // If a number is outside the 8-128 or not a number, re-start workflow.
    console.log(userCharCount);
    var errorContinue = window.confirm(
      "Please choose a number between 8 and 128.\nWould you like to try again?"
    );
    if (errorContinue) {
      generatePassword();
      return;
    } else {
      // If user cancels, exit the function
      window.alert("Understandable. Have a nice day. ✌️");

      return "Try Again";
    }

    // If user entry is valid and user clicks OK, continue the workflow
  } else {
    window.alert(
      "You chose: " +
        userCharCount +
        ". One of my favorite numbers!\nLet's choose what type of characters you'd like in your password."
    );
  }

  // Confirm which types of characters to use when generating password, then concat true values to form a final array to randomly choose from

  var userUpperCase = window.confirm(
    "Would you like to use 'UPPERCASE' letters?"
  );

  // if any of the confirm dialogus are true, update global final user array to include uppercase array values

  if (userUpperCase) {
    finalUserArray = finalUserArray.concat(upperCase);
    console.log(finalUserArray);
    console.log(userCharCount);
  }

  var userLowerCase = window.confirm(
    "Would you like to use 'lowercase' letters?"
  );

  // if true, concat new array

  if (userLowerCase) {
    finalUserArray = finalUserArray.concat(lowerCase);
    console.log(finalUserArray);
    console.log(userCharCount);
  }

  var userNumbers09 = window.confirm(
    "Would you like to use numbers?\nI'll try to pick a few lucky ones."
  );

  // if true, concat new array

  if (userNumbers09) {
    finalUserArray = finalUserArray.concat(numbers09);
    console.log(finalUserArray);
    console.log(userCharCount);
  }

  var userSpecialChars = window.confirm(
    "Do you want your password to be extra special (and extra secure) by using *special* characters?"
  );

  // if all values are false, prompt to try again

  if (!userUpperCase && !userLowerCase && !userNumbers09 && !userSpecialChars) {
    var errorContinue = window.confirm(
      "You have to let me use some type of characters!\nWould you like to try again?"
    );

    // If user wants to continue, restart the function
    if (errorContinue) {
      generatePassword();
      return;
    } else {
      // If user cancels, exit the function
      window.alert("Understandable. Have a nice day. ✌️");

      return "Try Again";
    }
  }
  // if specialChar selection is true, concat new array

  if (userSpecialChars) {
    finalUserArray = finalUserArray.concat(specialChars);
    console.log(finalUserArray);
    console.log(userCharCount);
  }

  // End of confirmation dialogues for choosing character types. Confirm selections to user.

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
      "\n\nIf this looks good, click OK!"
  );

  // If user clicks OK to continue, generate a password. Else, exit the function

  if (userContinue) {
    // remove "temp" from finalUserArray so it doesn't appear in generated password

    finalUserArray.shift();
    console.log(finalUserArray);

    // variable to collect the new password from the random number generator and array value picker below

    var newPassword = "";

    // generate a random number for the length of the full concatenated password array

    for (let i = 0; i < userCharCount; i++) {
      var randomNumber = Math.floor(Math.random() * finalUserArray.length);
      console.log(randomNumber);

      // The above random number will correspond to the index of a character within the array. Take that character and add it to the new generated password variable

      newPassword += finalUserArray[randomNumber];
    }

    // Return the new value so that it sets the value of generatedPassword() to equal the newly generated password

    console.log(newPassword);
    //console.log(password);
    return newPassword;
  } else {
    // Prompt user to try again or cancel
    var errorContinue = window.confirm("Would you like to try again?");
    if (errorContinue) {
      generatePassword();
      return;
    } else {
      return "Try again";
    }
  }
};
