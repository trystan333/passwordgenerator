var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!@#$%&*()_+-=,./?{}[]|";
var numericChars = "0123456789";
var lengthInput;
var finishedPass;
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
  }


  //prompt user to confrim char choices
  var confirmLower = confirm("Do you want to have lowercase characters?");
  // if (confirmLower = true) {
    
  // }

  var confirmUpper = confirm("Do you want to have uppercase characters?");

  var confirmSpecial = confirm("Do you want to have special characters?");

  var confirmNumeric = confirm("Do you want to have numeric characters?");







  
  //generate pass using user input
  //return generated password
  //using confirms prompts and alerts



  // return password;

};