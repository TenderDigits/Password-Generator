// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Array's for password combinations
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '?'];
var allCombos = [];

// Initiate prompts to determine password criteria. 
function generatePassword () { 
  // First, determine the length variable - prompt input
  var length = prompt("Choose a password length between 8 & 128"); 
    while ((length < 8) || (length > 128)) {
     alert("Password must be between 8 and 128 characters!");
     length = prompt("Choose a password length between 8 & 128"); 
    }
  
  // Second, determine remaining parameters for password criteria - confirmation window
  var userNumbers = confirm("Would you like to include numbers in you password?");
  var userLowerCase = confirm("Would you like to include lower case letters in your password?");
  var userUpperCase = confirm ("Would you like to include upper case letters in your password?");
  var userSpecial = confirm ("Would you like to include special characters in your password?");
   // Condition that requires at least one selection is made, if not loops confirmation questions.  
   while (userNumbers, userLowerCase, userUpperCase, userSpecial === false) {
     alert("You must choose at least one!");
     userNumbers = confirm("Would you like to include numbers in you password?");
     userLowerCase = confirm("Would you like to include lower case letters in your password?");
     userUpperCase = confirm ("Would you like to include upper case letters in your password?");
     userSpecial = confirm ("Would you like to include special characters in your password?");
   }

  // declare password varibale to hold char for user password
  var allCombos = [];
  var finalPassword = "";

  // case 1: numbers
  if (userNumbers)  {
    for (var i of numbers)
      allCombos.push(i);
  }

  // case 2: lowerCase
  if (userLowerCase)  {
    for (var i of lowerCase)
      allCombos.push(i);
  }

  // case 3: upperCase
  if (userUpperCase)  {
    for (var i of upperCase)
      allCombos.push(i);
  }

  // case 4: special
  if (userSpecial)  {
    for (var i of special)
      allCombos.push(i);
  }

  // log allCombos to console
  console.log(allCombos);

  // math to create the password
    for (var i = 0; i < length; i++) {
      finalPassword += allCombos[Math.floor(Math.random() * allCombos.length)];
  }
  
  // log final password to the console
  console.log(finalPassword);

  // print final password to console
  return finalPassword;
  }

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

