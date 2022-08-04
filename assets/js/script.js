// variable for characters (separate for each prompt?)
// variable for user choice
// variable for output
// RNG for password function
// function to take data and return password
// 
// prompt for criteria (length[8-128], THEN lowercase, capitals, numbers, special characters)
// Output password to box 
// Ensure click button works 
// 

// Assignment Code
var generateBtn = document.querySelector("#generate");

var passText = "";
var lows = "abcdefghijklmnopqrstuvwxyz".split("");
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var num = "1234567890".split("");
var sym = "!@#$%^&*()<=>,.-=[]{}?~_+".split("");

function generatePassword() {
  var passPot = []

  var passLength = prompt("Please select a password length between 8 and 128 characters");
  if (passLength < 8 && passLength > 128) {
    passLength = prompt("Please enter a valid number.");
  } else {
    var upperChoice = confirm("Would you like uppercase letters?");
    var lowerChoice = confirm("Would you like lowercase letters?");
    var numChoice = confirm("Would you like numbers?");
    var symChoice = confirm("Would you like fancy symbols?");
  }
  

  if (upperChoice) {
    passPot = passPot.concat(caps);
  }
  if (lowerChoice) {
    passPot = passPot.concat(lows);
  }
  if (numChoice) {
    passPot = passPot.concat(num);
  }
  if (symChoice) {
    passPot = passPot.concat(sym);
  }

  let randPass = ""
  for (let i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * passPot.length)
    randPass = randPass + passPot[random]
  }

  return randPass;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// }
// THIS IS THE LINE TELLING FUNCTION TO RUN WHEN CLICKED
generateBtn.addEventListener("click", writePassword);