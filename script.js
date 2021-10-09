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
  var length = prompt("Choose a password length between 8 & 128"); 
    while ((length < 8) || (length > 128)) {
      alert("Password mus be between 8 and 128 characters!");
     length = prompt("Choose a password length between 8 & 128"); 
    }
  var userNumbers = confirm("Would you like to include numbers in you password?");
  var userLowerCase = confirm("Would you like to include lower case letters in your password");
  var userUpperCase = confirm ("Would you like to include upper case letters in your password?");
  var userSpecial = confirm ("Would you like to include special characters in your password");
   while (userNumbers, userLowerCase, userUpperCase, userSpecial === false) {
     alert("You must choose at least one!");
     userNumbers = confirm("Would you like to include numbers in you password?");
     userLowerCase = confirm("Would you like to include lower case letters in your password");
     userUpperCase = confirm ("Would you like to include upper case letters in your password?");
    userSpecial = confirm ("Would you like to include special characters in your password");
   }

  // declare password varibale to hold char for user password
  var userNumbers = [];
  // track number of choices
  var numOfChoices = 0;
  // check for each
  

  // case 1: numbers
  if(useNumbers)  {
      allCombos = allCombos.concat(numbers)
      password.push(numbers[Math.floor(Math.random()*numbers.length)])
      numOfChoices++


  }

  // case 2


  // case 3

  // case4


  // loop through the remanining number of characters for the password araray; 


  return password; // might use join
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

