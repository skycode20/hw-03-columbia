
// Function to write password to the #password input
function start() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Array of special characters to be included in password
var specialChars = [
  "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",
];

// Array of numeric characters to be included in password
var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCaseChars = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

// Array of uppercase characters to be included in password
var upperCaseChars = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];


// Function Definitions

//  function to prompt user for password options
function getPasswordOptions() {
  // variable to store length of password from user input
  var length = parseInt(
    prompt("How many characters would you like your password to have?")
  );

  // conditional statement to check if password length is stated as a number. If false, prompts will end.
  if (isNaN(length) === true) {
    alert("The password length must be stated as a number.");
    return;
  }

  // conditional statement to check if password length is at least 8 characters long. If false, prompts will end.
  if (length < 8) {
    alert("The password length must be at least 8 characters long.");
    return;
  }

  // conditional statement to check if password length is 128 characters or less. If false, prompts will end.
  if (length > 128) {
    alert("The password length must be 128 characters or less.");
    return;
  }


  // variable to confirm the user's preference to include lowercase characters or not.
  var hasLowerCaseChars = confirm(
    "Click OK to confirm including lowercase characters."
  );

  // variable to confirm the user's preference to include uppercase characters or not.
  var hasUpperCaseChars = confirm(
    "Click OK to confirm including uppercase characters."
  );

  // variable to confirm the user's preference to include special characters or not.
  var hasSpecialChars = confirm(
    "Click OK to confirm including special characters."
  );
  // variable to confirm the user's preference to include numeric characters or not.
  var hasNumericChars = confirm(
    "Click OK to confirm including numeric characters."
  );


  // conditional statement to check if user chose not to include any characters in the password. 
  if (
    hasLowerCaseChars === false &&
    hasUpperCaseChars === false &&
    hasNumericChars === false &&
    hasSpecialChars === false
  ) {
    // Will alert user to choose at least one.
    alert("You must select at least one character type.");
    return;
  }


  // Object to store user input
  var passwordOptions = {
    length: length,
    hasLowerCaseChars: hasLowerCaseChars,
    hasUpperCaseChars: hasUpperCaseChars,
    hasSpecialChars: hasSpecialChars,
    hasNumericChars: hasNumericChars
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

  // conditional statement thats adds array of numeric characters into array of possible characters
  if (options.hasNumericChars) {
    possibleCharacters = [...possibleCharacters, ...numericChars]
  }

  // conditional statement thats adds array of special characters into array of possible characters
    if (options.hasSpecialChars) {
    possibleCharacters = [...possibleCharacters, ...specialChars]
  }

  // conditional statement thats adds array of uppercase characters into array of possible characters
    if (options.hasUpperCaseChars) {
    possibleCharacters = [...possibleCharacters, ...upperCaseChars]
  }

  // conditional statement thats adds array of lowercase characters into array of possible characters
    if (options.hasLowerCaseChars) {
    possibleCharacters = [...possibleCharacters, ...lowerCaseChars]
  }

  // for loop to iterate over the password length from the option object, selecting random indices
  for (var i = 0; i < options.length; i++) {
    var randIndex = Math.floor(Math.random() * possibleCharacters.length);

    var currentRandomChar = possibleCharacters[randIndex]
    result.push(currentRandomChar);
  }


  // transform the result into a string and push into generatePassword
  return result.join('');

}

// get references to the #generate button element
var generateButton = document.querySelector("#generate");


// Add event listener to generateButton
generateButton.addEventListener("click", start);
