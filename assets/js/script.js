var generateBtn = document.querySelector("#generate");

var passText = "";
var lows = "abcdefghijklmnopqrstuvwxyz".split("");
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var num = "1234567890".split("");
var sym = "!@#$%^&*()<=>,.-=[]{}?~_+".split("");

function generatePassword() {
  var passPot = []

  var passLength = prompt("Please select a password length between 8 and 128 characters");
  if (passLength < 8 || passLength > 128) {
    passLength = alert("Please enter a valid number.");
    return
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

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);