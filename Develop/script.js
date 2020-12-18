// Assignment code here

function generatePassword(){
  
  //ask for password length and convert to an integer
  function passwordLengthChecker(){
    var passLen = parseInt(window.prompt("How long do you need your password to be? Please only enter a number between 8 and 128."));
    // verify input is acceptable
    if (typeof passLen === 'number'  && 8 <= passLen && passLen <= 128){
      if(window.confirm("Confirm that you want a length of " + passLen)){
        window.alert("Thank you. Now you will choose password criteria.")
        return (passLen);
      }
      else{
        passwordLengthChecker();
      }    
    }
    else{
      window.alert("Sorry, your input was not accepted. Please try again.")
      passwordLengthChecker();
    }
  }
  var chosenLength = passwordLengthChecker();
  
  //list of possible special characters
  var special = ["!", '"', '#', '$', '&', "'", "%", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", ">", "=", "?", "@", "[", "]", '_', "^", "{", "}", "|"];
  var alpha = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numbers = "123456789"

  //ask for criteria: lowercase/uppercase/numbers/special characters
  var charOptions = ["l", "u", "b"];
  function characterCaseChecker(){
    var alphaCase = window.prompt("Would you like only lowercase letters, only uppercase letters, or both? Please enter l, U, or b.").toLowerCase();
    //verifys input matches to one of the three options
    if (!charOptions.includes(alphaCase)){
      window.alert("Sorry, your input was not accepted. Please select one of three options.")
      characterCaseChecker();
    }
    //verifys choice. Calls itself if they change their mind
    else{
      if(!(window.confirm("You entered " + alphaCase + ". Press okay to continue or cancel to change your choice."))){
        characterCaseChecker();
      }
    }
    return(alphaCase);
  }
  var chosenCase = characterCaseChecker();
  
  //asks if the user wants to include numbers 
  function numbersChecker(){
    var num = window.prompt("Would you like to include numbers? Please enter 'n' to include numbers or anything else to not.").toLowerCase();
    //verifys input. If they change their mind it calls itself
    if (!(num === 'n')){
      if(window.confirm("Please verify to not include numbers.")){
        window.alert("Okay, no numbers for you.")
      }
      else{
        window.alert("Okay, choose again.")
        numbersChecker();
      }
    }
    else{
      return(num)
    }
  }
  var chosenNum = numbersChecker();

  //asks if the user wants to include special characters
  function specialChecker(){
    var spec = window.prompt("Would you like to include special characters? Please enter 's' to include special characters or anything else to not.").toLowerCase();
    //verifys input. If they change their mind it calls itself
    if (!(spec === 's')){
      if(window.confirm("Please verify to not include special characters.")){
        window.alert("Okay, no special characters for you.")
      }
      else{
        window.alert("Okay, choose again.")
        specialChecker();
      }
    }
    else{
      return(spec);
    }
  }
  var chosenSpec = specialChecker();

  possibleVariables="";

  // adss together the possible character choices dependent on user input
  switch(chosenCase){
    case "l": possibleVariables += alpha[0]; break;
    case "u": possibleVariables += alpha[1]; break;
    default : possibleVariables += (alpha[0] + alpha[1]); break;
  }

  if (chosenNum === 'n'){
    possibleVariables += numbers;
  }

  if (chosenSpec === 's'){
    possibleVariables += special.join('');
  }
  console.log(possibleVariables);

  var newpassword = "";

  //goes through and adds characters to the password one at a time
  for (i=0; i<chosenLength; i++) {
    var char = possibleVariables[Math.floor(Math.random()* possibleVariables.length)];
    console.log(char);
    newpassword += char;
  }

  //returns generated password
  return(newpassword);
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
