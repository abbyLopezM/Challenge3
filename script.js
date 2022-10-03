var specialChar=[
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  '(',
  ')',
  '}',
  '{',
  '[',
  ']',
  '~',
  '-',
  '_',
  '.',
];
var numberChar=[ '0','1','2','3','4','5','6','7','8','9'];
var upperChar=[
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',

];
var lowerChar =[
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',

];
//We have 4 password options: special chars, lowercase, uppercase, and numbers
//we need to answer 5 questions
//how long of a password do you want
//one question for each type of character to see if it included

//we need a function to start the application
function generatePassword(){
 
  var passwordLength = prompt('How long of a password would you like?');
  //use an if statement to check the value given
  if(passwordLength<8 || passwordLength>128){
    passwordLength = prompt('Please select a value between 8 and 128');
     if(passwordLength<8 || passwordLength>128){
      passwordLength=Math.floor( Math.random() *(128-8) + 8);
      prompt("Error: Value not permitted. Random value length of "+ passwordLength + " has been selected.");
     }
  }
  var includeSpecialChar = confirm("would you like to include special characters");
  var includeNumberChar = confirm("would you like to include numeric characters");
  var includeLowerChar = confirm("would you like to include lowercase characters");
  var includeUpperChar = confirm("would you like to include uppercase characters");
  var options = {
    passwordLength: passwordLength,
    includeLowerChar: includeLowerChar,
    includeNumberChar: includeNumberChar,
    includeSpecialChar: includeSpecialChar,
    includeUpperChar: includeUpperChar
  }
  var possiblePasswordChars=[];
  var password=[];
  

  function selectRandChar(array){
    const randomIndex = Math.floor(Math.random() * array.length); ///generates a random char
    return array[randomIndex];
  }
  //options.passwordLength is property
  if(options.includeLowerChar){
    //Generate a random lower character
    //then push it to the password
    possiblePasswordChars = possiblePasswordChars.concat(lowerChar);
    password.push(selectRandChar(lowerChar));
    //math.floor and math.random to select something from an array
  }
  if(options.includeUpperChar){
    //Generate a random lower character
    //then push it to the password
    possiblePasswordChars = possiblePasswordChars.concat(upperChar);
    password.push(selectRandChar(upperChar));
    //math.floor and math.random to select something from an array
  }
  if(options.includeNumberChar){
    //Generate a random lower character
    //then push it to the password
    possiblePasswordChars = possiblePasswordChars.concat(numberChar);
    password.push(selectRandChar(numberChar));
    //math.floor and math.random to select something from an array
  }
  if(options.includeSpecialChar){
    //Generate a random lower character
    //then push it to the password
    possiblePasswordChars = possiblePasswordChars.concat(specialChar);
    password.push(selectRandChar(specialChar));
    //math.floor and math.random to select something from an array
  }
//to generate password we need to look through the remaining needed characters for the password, and select a random char
//we need to remember that for each selected char type, we have already pushed at least one character, so this has to be subtracted from the length
  var remainingChars = options.passwordLength - password.length;
  for(var i =0; i < remainingChars; i++){
    var randChar=selectRandChar(possiblePasswordChars);
    password.push(randChar);

  }
  //there is something you need to do when this is done, to make the array work like a strength, otherwise you will not be able to paste the array as a password 
  //on the page
  password=password.join("");
  password = password.toString();
  console.log(password);
prompt("This is your password: " + password);
}
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
