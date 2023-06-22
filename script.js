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



//created variables for generator to choose from
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


//created some pop up windows for users to choose password options
var generatePassword = function() {
  var upperCaseChar = confirm("Click OK to include uppercase characters");
  var lowerCaseChar = confirm("Click OK to include lower case characters");
  var specialChar = confirm("Click OK to include special characters");
  var numbers = confirm("Click OK to include numbers");
}

//created prompt box to enter character length of password
let length = prompt("Please choose a length between 8 and 128");
console.log("Password Length " + length)
if (length < 8 && length > 128) {
  alert("Choose a length between 8 and 128");
} else 
//creates random output of the types of characters in password
{ upper = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
console.log(upper);
 lower = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
console.log(lower);
 special = specialChar[Math.floor(Math.random() * specialChar.length)];
console.log(special);
 number = numbers[Math.floor(Math.random() * numbers.length)];
console.log(number);
} 

