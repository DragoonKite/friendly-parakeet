// Assignment code here

function generatePassword(){
  
  //ask for password length and convert to an integer
  var passLen = parseInt(window.prompt("How long do you need your password to be? Please only enter a number between 8 and 128."));
  // verify input is acceptable
  if (typeof passLen === 'number'  && 8 <= passLen && passLen <= 128){
    window.alert("Thank you. Now you will choose password criteria.")
  }
  else{
    window.alert("Sorry, your input was not accepted. Please try again.")
  }

  //list of possible special characters
  var special = [" ", "!", '"', '#', '$', '&', "'", "%", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", ">", "=", "?", "@", "[", "]", '_', "^", "{", "}", "|"];
  var alpha = abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ;

  //ask for criteria: lowercase/uppercase/numbers/special characters
  var charOptions = ["l", "u", "b", "n", "s"];
  var lower = window.prompt("Would you like only lowercase letters, only uppercase letters, or both? Please enter l, U, or b.").toLowerCase();
  if (!charOptions.includes(lower)){
    window.alert("Sorry, your input was not accepted. Please try again.")
  }

  var num = window.prompt("Would you like to include numbers? Please enter n to include numbers or anything else to not.").toLowerCase();
  if (!(num === 'n')){
    if(window.confirm("Please verify to not include numbers.")){
      window.alert("Okay, no numbers for you.")
    }
  }

  var spec = window.prompt("Would you like to include special characters? Please enter s to include special characters or anything else to not.").toLowerCase();
  if (!(spec === 's')){
    if(window.confirm("Please verify to not include special characters.")){
      window.alert("Okay, no special characters for you.")
    }
  }

  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
