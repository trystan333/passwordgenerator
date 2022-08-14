var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!@#$%&*()_+-=,./?{}[]|";
var numericChars = "0123456789";
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //prompt user for length
  var lengthInput = prompt("Length of password (in characters)");

  if (lengthInput < 8 || lengthInput > 128) {
    alert("Password must be more than 8 characters, and less than 129.");
    generatePassword();
  };

  var passChars = "";
  //prompt user to confrim char choices
  var confirmLower = confirm("Do you want to have lowercase characters?");
  if (confirmLower = true) {
    passChars += lowerCaseChars;
  } 

  var confirmUpper = confirm("Do you want to have uppercase characters?");
  if (confirmUpper = true) {
    passChars += upperCaseChars;
  }  

  var confirmSpecial = confirm("Do you want to have special characters?");
  if (confirmSpecial = true) {
    passChars += specialChars;
  } 

  var confirmNumeric = confirm("Do you want to have numeric characters?");
  if (confirmNumeric = true) {
    passChars += numericChars;
  }

  console.log(passChars);
  return passChars;
};
//generate pass using user input

function passInput() {


  
}








//return generated password




