// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function start() {
  console.log("we're here!");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Array of special characters to be included in password
var specialCharacters = [
  "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

//  Array of optional characters to be included in password
var userOptionalChars = [];


// ======= functions definition ======

//  function to prompt user for password options
function getPasswordOptions() {
  // variable to store length of password from user input
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  // conditional statement to check if password length is a number. prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number.");
    return;
  }

  // conditional statement to check if password length is at least 8 characters long. prompts end if false
  if (length < 8) {
    alert("Password length must be at least 8 characters.");
    return;
  }

  // conditional statement to check if password length is less than 128 characters long. prompts end if false
  if (length > 128) {
    alert("Password length must be less than 129 characters");
    return;
  }


  // variable to store boolean regarding the incluion of lowercase characters
  var hasLowerCaseCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );

  // variable to store boolean regarding the incluion of uppercase characters
  var hasUpperCaseCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );

  // variable to store boolean regarding the incluion of special characters
  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  // variable to store boolean regarding the incluion of numeric characters
  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );


  // conditional statement to check if user does not include any types of characters. password generates. check that at least one is true
  if (
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false &&
    hasNumericCharacters === false &&
    hasSpecialCharacters === false
  ) {
    // else - alert user
    alert("Must select at least one character type");
    return;
  }


  // Object to store user input
  var passwordOptions = {
    length: length,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters
  };

  return passwordOptions;
}

// function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in pasword
  var possibleCharacters = [];

  // array to contain one of each type of chose character to ensure each will be used
  var guaranteedCharacters = [];

  // conditional statement thats adds array of numeric characters into array of possible characters
  // push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = [...possibleCharacters, ...numericCharacters]

  }
  // conditional statement thats adds array of special characters into array of possible characters
  // push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = [...possibleCharacters, ...specialCharacters]

  }
  // conditional statement thats adds array of uppercase characters into array of possible characters
  // push new random special character to guaranteedCharacters
  if (options.hasUpperCaseCharacters) {
    possibleCharacters = [...possibleCharacters, ...upperCasedCharacters]

  }
  // conditional statement thats adds array of lowercase characters into array of possible characters
  // push new random special character to guaranteedCharacters
  if (options.hasLowerCaseCharacters) {
    possibleCharacters = [...possibleCharacters, ...lowerCasedCharacters]

  }

  // // for loop to iterate over the password length from the option object, selecting random indices

  for (var i = 0; i < options.length; i++) {
    var randIndex = Math.floor(Math.random() * possibleCharacters.length);

    var currentRandomChar = possibleCharacters[randIndex]
    result.push(currentRandomChar);
  }


  // transform the result into a string and pass into writePassword
  return result.join('');

}

// get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", start);
