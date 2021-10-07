// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Array's for password combinations
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '?'];

// Initiate prompts to determine password criteria. 
function parameters () {
  var length = prompt("Choose a password length between 8 & 128");
  if((length < 8) || (length > 128))
    alert("Password mus be between 8 and 128 characters!");
  else if((!numbers)&&(!lowerCase)&&(!upperCase)&&(!special))
    alert("Must choose at least one type.");
}


  var numbers = prompt("Would you like to include numbers in you password?");
  var lowerCase = prompt("Would you like to include lower case letters in your password");
  var upperCase = prompt ("Would you like to include upper case letters in your password?");
  var special = prompt ("Would you like to include special characters in your password");
  var input = {length: length, numbers: numbers, lowerCase: lowerCase, upperCase: upperCase, special: special
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


parameters();