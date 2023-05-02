/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////MODULE-02 ASSIGNMENT: WRITE YOUR OWN JS MANUAL ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////// THIS IS A REFERENCE MANUAL FOR JAVASCRIPT FOR YOU TO USE WHENEVER YOU ARE HAVING TROUBLES REMEMBERING HOW TO WORK WITH JAVASCRIPT.////////////////////
///////////// ////////////////////https://www.theodinproject.com/paths/foundations/courses/foundations#javascript-basics /////////////////////////////////////////////////////////
///////////// REMEMBER, THIS IS NOT FOR YOU TO RUN THIS PAGE. IF YOU WANT TO RUN THE CODE, OPEN UP A CONSOLE IN THE DEVELOPER TOOLS OPTION FOR YOUR BROWSER
///////////// AND RUN EACH JS CODED SCRIPT ONE BY ONE. REMEMBER, THIS IS ONLY TO HELP YOU FIND YOUR WAY BACK. */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

"use strict"; //Interprets only the JS code

/*////////////////////////////////////////////////////////// DECLARING VARIABLES IN JS/////////////////////////////////////////////////////////////////////////////*/
// HERE ARE A COUPLE OF EXAMPLES THAT DEMONSTRATE THE USE OF 3 DIFFERENT VARIABLES AND HOW TO PROPERLY DECLARE THEM. HOW ARE WE DOING?

// Ex.1
let message; // Variable declaration
message = 'Bonjour, this is one of the 3 ways to declare a //variable. Using the "let" variable. For this example, you can //see we created a pop-up alert mesage as well';// Assigning a value to a variable
window.alert(message);// This shows an alert message box containing the value of the 'message' variable

// Ex.2
var a = 10; // Here we are assigning our variable 'a' a value of 10 
var b = 20; // For this one, the assigned value of for 'b' is 20
var sum = a + b; // Now our variable with the keyword 'sum' holds the result for adding the variables 'a' and 'b' 
console.log(sum); // The operation is performed and the console calls out the result.

//Ex.3
const name = "You can";// Declare a constant variable "name" and set it to the string "You can" 
let age = Number(prompt("Please enter your age:"));// Declare a variable called "age" using "let" and set it to the number entered by the user
if (age > 21) {
  console.log(`${name} enter the establishment`);// If the value of age is greater than 21, print 'You can enter the establishment'
} else { console.log(`${name} not enter, because you are a not of age`) };// If the users age input is less than 21, print "You can not enter, because you are not of age"

/*/////////////////////////////////////// /////////////////////OPERATORS IN JS ////////////////////////////////////////////////////////////////////////////////////*/
// NOW WE HAVE SOME EXAMPLES OF ALL THE ARITHEMETIC OPERATORS COVERED IN THE ODIN PROJECT WEBSITE. WE HOPE THE MEMORIES ARE COMING BACK.....

//Ex. 1 USING THE + ADDITION OPERATOR
let x = 110 + 56;// HERE IS AN EXAMPLE OF THE + OPEARATOR
console.log("The sum is " + x);// A PRINT OUT MESSAGE WITH THE ANSWER 166

//Ex. 2 USING THE - SUBTRACTION OPERATOR
let a = 45 - 21;// VARIABLE SET AS a TO REPRESENT THE DIFFERENCE 
console.log("The difference is " + a);// PRINT OUT MESSAGE WITH THE ANSWER OF 24

//Ex. 3 USING THE % REMAINDER OR MODULO OPERATOR
20 % 100;// THIS ONE OF THE SIMPLEST WAYS TO WRITE AN OPERATION JAVASCRIPT, HERE WE USE THE MODULO OR REMAINDER which is 20

//Ex. 4 USING THE / DIVISION OPERATOR
const num1 = 24;// HERE WE ARE DECLARING A CONSTANT VARIABLE NAMED num1 AND INITIALING IT WITH THE VALUE OF 24
const num2 = 13;// ON THIS ONE WE ARE DECLAIRING OUR NEXT CONSTANT VARIABLE NAMED num2 TO INITIALIZE WITH 13
console.log("The quotient is" + (num1 / num2));// NOTE THAT THE + OPERATOR IS BEING USED TO CONCATENATE THE STRING "The quotient is" WITH THE RESULT OF THE DIVISION OPERATION, WHICH IS SURROUNDED BY IT'S OWN PARENTHESES TO ENSURE THAT THE DIVISION IS EXECUTED FIRST WILL BE PRINTED: "The quotient is1.8461538461538463"

//Ex. 5 USING THE * MULTIPLICATION OPERATOR
var cans = 6;// NOW WE DECLARE THE VARIABLE NAMED cans USING THE var KEYWORD, AND IT IS 6
var guests = 15;// guests HERE IS SET TO THE AMOUNT OF GUESTS AT THE EVENT  WHICH IS 15
var encroachingTime = 9;// encroachingTime IS DECLARED AS THE DURATION OF TIME MY PRIVACY WAS INVADED IN HOURS WHICH IS 9
var amountOfCansDrunk = cans * guests / encroachingTime;// HERE WE INITIALIZE ALL 3 VARIABLES 
console.log(`My guests drank ${amountOfCansDrunk} cans of La Croix each in 9 hours. Now I'am out of LaCroix...`);// WE LOG THE AMMOUNT //OF CANS OF La Croix CONSUMED BY EACH GUEST DURING THE EVENT. WHICH WILL LOOK LIKE: "My guests drank 10 cans of La Croix each in 9 hours. Now I'am out of LaCroix..."

//Ex. 6 USING THE ** EXPONENT OPERATOR
const a = 3;// HERE IS A CONSTANT VARIABLE WE NAMED a WITH A VALUE OF 3
const b = 5;// ON THIS ONE WE HAVE THE COSNSTANT VARIABLE NAMED b WITH THE VALUE OF 5
a ** b;// AND FINALLY WE USE THE EXPONENT OPERATOR TO RAISE a TO THE POWER OF b, WHICH WILL  BE 243

What happens when you use a + operator with a string and number(e.g. "24" + 2) ?/////* WHEN WE USE AN OPERATOR WITH A STRING AND A NUMBER LIKE THE EXAMPLE IN THE QUESTION ABOVE, THE STRING 24 WILL BE CONCATENATED WITH THE NUMBER 2(CONT. BELOW) */
  //Ex.1
  ("24" + 2); // THE RESULT IS 242. SAME THING IF WE CHANGE THE "24" FOR "HELLO WORLD" + 2, WE WILL JUST GET "HELLO WORLD2" 

/*//////////////////////////////////////////////////////// WORKING WITH NUMBERS IN JS ///////////////////////////////////////////////////////////////////////////////////////// NOW WE MOVE ON TO DEFINE AND DEMONSTRATE EXAMPLES OF THE PROPERTY NaN, OR NOT A NUMBER /*/

  What Nan is ?/*NaN IS A PROPERTY THAT STANDS FOR 'NOT-A-NUMBER'. IT IS A WORD RESERVED IN JAVASCRIPT INDICATING  IS NOT A LEGAL NUMBER*/
  //Ex.1
  let result = "Is 2 NaN? " + Number.isNaN("2");// THE QUESTION "Is 2 NaN?" WILL RETURN A FALSE SINCE 2 IS A NUMBER 
console.log(result);// THE COSNOLE PRINTS THE RESULT false

/*///////////////////////////////////////////////////////// WORKING WITH STRINGS IN JS ///////////////////////////////////////////////////////////////////////////////////////// 
 WE THINK BY NOW YOUR MEMORY IS HELPING YOU REMEMBER. WE MUST CONTINUE. BELOW ARE A FEW EXAMPLES THAT SHOW HOW TO WORK WITH STRINGS IN JAVASCRIPT */

//Ex.1  ESCAPING CHARACTERS 
const fishNchip = 'Ivar\'s Fish House';// HERE THE \ IS PLACED RIGHT BEFORE THE APOSTROPHE SO THAT IT ISN'T CONFUSED WITH THE CODE OUTSIDE THE STRING
console.log(fishNchip);// THE PRINT OUT WILL SHOW THE \ HELPED THE SPECIAL CHARACTER ESCAPE BY ATTACHING THE ENTIRE STIRNG TOGETHER AS 'Ivar's Fish House'

//Ex.2 Template literals(backticks and variables!)
const name = "Benoit Mandelbrot";//DECLARING CONST AND INITIALIZING AS name
const date = "November 20, 1924";//DECLARING CONST AND INITIALIZING AS date
const place = "Warsaw, Poland";//DECLARING CONST AND INITIALIZING AS place
const end = "October 14, 2010";//DECLARING CONST AND INITIALIZING AS  end
console.log(`${name} was born on ${date} in ${place}, and died on ${end}`);//THE TEMPLATE LITERAL ALLOWED US TO USE THE PLACEHIOLDERS TO RUN THE STRING AS A SINLGE LINE WITHOUT
//HAVING TO USE CONCATENATION OPERATORS. THE CONSOLE LOG WILL OUTPUT THE MESSAGE AS "Benoit Mandelbrot was born on November 20, 1924 in Warsaw, Poland, and died on October 14, 2010"

//METHODS FOR WORKING WITH STRINGS
//Ex.3  slice() 
const str = 'Today was a good day, momma cooked the breakfast with no hog';// WE ASSIGNED THE VARIBALE AS A STRING
const substr = str.slice(3, 12);// NOW WE DECLARE THIS VARIABLE USING THE slice() METHOD. THE STRING WILL START AT THE 3RD CHARACTER AND END THE STRING AT THE 12TH CHARACTER
console.log({ substr });// AFTER BEING SLICED, OUR STRING IS DISPLAYED IN THE CONSOLE OUTPUT AS A MESSAGE `ay was a` NOTE AND REMEMBER THE FIRST POSITION OR CHARACTER STARTS AS 0 AS THE 1ST ONE, AND THE CAHARACTER IN THE 2ND SPOT AS THE 1ST ONE. 

//Ex.4 substring()
const str = 'Oh won\'t you give me three steps, gimme three steps, mister Gimme three steps towards the door?';// WE'VE TAKEN A SECTION OFF OF THE LYRICS FROM A LYNYRD SKYNYRD SONG CALLED "GIMME THREE STEPS", WE MADE SURE TO USE THE \ RIGHT BEFORE THE T IN WON\'T.
console.log(str.substring(5, 11));// HERE WE'VE USED THE CONSOLE LOG TO PRINT OUT A PART OF THE STRING USING THE substring() METHOD. WE ALSO USED THE indexStart, AND THE indexEnd()  parameters. indexStart BEGINS BEFORE THE 1ST CHARACTER IN THE STRING.THE indexEnd ENDS AT BEFORE THE NUMBER CHOSEN IN THE PARAMETER. IN OUR CODE HERE THE indexStart BEGINS AFTER THE 5TH CHARCTER THAT HAPPENS TO BE THE n IN won"t. THE indexEnd STOPS BEFORE THE 11TH CHARACTER WHICH IS THE o FROM you. OUR CONSOLE LOG PRINT OUT WILL BE n't yo.  

//Ex.5 replace()
let text = '7th symohony, 2nd movement';// VARIABLE TEXT IS ASSIGNED THE STRING WE WILL MODIFY USING THE replace() METHOD. 
let result = text.replace('2nd', '4th');// WE USE THE replace() METHOD TO FIND THE PART IN THE STRING THAT SAYS 2nd AND REPLACE IT WITH 4th. 

//Ex.6 toUpperCase(),
let text = '7th symphony, 2nd movement';// WE ARE USING THE SAME STRING TEXT AS THE PREVIOUS EXAMPLE
let result = text.replace('s', (match) => { return match.toUpperCase() });// WE REPLACED THE s IN symphony WITH AN UPPER CASE S
console.log(result);// THE RESULT IS PRINTED OUT WITH THE s IN symphony CAPITALIZED LIKE THIS, 7th Symphony, 2nd movement.

//Ex.7 toLowerCase() 
let text = '7th SYMPHONY, 2nd Movement';// WE ARE USING A VARIATION OF THE PRIOR 2 EXAMPLES. THIS TIME THE ENTIRE WORD IN SYMPHONY IS CAPITALIZED IN OUR STRING
let result = text.replace('YMPHONY', (match) => { return match.toLowerCase() });// WE USE THE REPLACE METHOD WITH THE PARAMETERS TO DECAPITALIZE THE THE YMPHONY PART ONLY
console.log(result);// OUR CONSOLE OUTPUT PRINTS OUT THE RESULT AS 7th Symphony, 2nd Movement

//Ex.8 concat()
const string1 = 'We gotta get out of this place';// const VARIABLE IS string1 
const string2 = ', if its the last thing we ever do';// 2ND cosnt IS string2
const concat = string1.concat(string2);// 3rd const IS concat AND THIS IS WHERE WE CONCATENATE string1 AND string2 
console.log(concat);// OUTPUT IS PRINTED AS, We gotta get out of this place, if its the last thing we ever do

//Ex.9 trim()
const string = '  Hey there friend   ';// CONST VARIABLE IS string 
const str = string.trim();// CONST VARIABLE IS str. WE USE THE trim METHOD TO REMOVE THE EMPTY SPACES IN BOTH BEGGINING AND END OF OUR STRING 
console.log(str);// THE CONSOLE PRINTS OUT , Hey there friend, WITH NO SPACES NOW

//Ex.10 padStart()
const str = "QEF";// VARIABLE IS str
const paddedStr = str.padStart(4, "3");// VARIABLE IS paddedStr, 1ST ARGUMENT IS IS LENGTH OF THE STRING AND 2ND ID THE CHARACTER WE USE FOR PADDING THE STRING
console.log(paddedStr);// THE CONSOLE WILL PRINT 3QEF

//Ex.11 charAt()
const str = "Racoons love trash";// VARIABLE IS str
const char = str.charAt(6);// VARIABLE IS char, AND THE METHOD USED IS charAt. THE SPECIFIED POSITION IS THE 6 CHARACTER, NOTE THAT THIS TIME THE 1ST POSITION STARTS AT THE FIRST CHARACTER OR AT THE BEGINIGN OF THE STRING
console.log(char);// THE CHARACATER CHOSEN WAS THE 6TH ONE, WHICH IS PRINTED OUT AS s

//Ex.12 How to convert a string to an array
let txt = "Whats for dinner tonight?";// let VARIABLE IS txt 
const array = txt.split(" ");// const VARIABLE IS arrray, WE ARE USING THE SPLIT METHOD
console.log(array);// OUR STRING IS SEPARATED INTO AN ARRAY AND IS PRINTED OUT INT HE CONSOLE AS, (4) ['Whats', 'for', 'dinner', 'tonight?']

/*////////////////////////////////////////////////////////// CONDITIONAL STATEMENTS ///////////////////////////////////////////////////////////////////////////////*/


//EX.1 Comparison operators in JS
const a = 5;// const VARIABLE IS a = 5
const b = 10;// const VARIABLE IS b = 10
const isEqual = a == b;// const VARIABLE IS THE COMPARISON METHOD isEqual == a == b
console.log(isEqual);//  THE PRINOUTN WILL BE FALSE

// How comparison of strings works
Comparison operators are used in logical statements to determine equality or difference between variables or values.

//EX.3 Comparison of different data types(string, number, boolean, ...) Here is an example below
const num = 5;// const VARIABLE IS num = 5
const str = "5";// const VARIABLE IS str = 5
const isEqual = num == str;// cosnt IS isEqual, WE COMPARE OUR NUMBER WITH OUR STRING TO SEE IF THEY ARE EQUAL
console.log(isEqual);// OUTPUT IS TRUE

//Ex.4 Strict equality operators(===, !==) vs.regular equality operators(==, !=)

//Ex.5 Conditional statements: if, else, else if
const name = "You can";// Declare a constant variable "name" and set it to the string "You can" 
let age = Number(prompt("Please enter your age:"));// Declare a variable called "age" using "let" and set it to the number entered by the user
if (age > 21) {
  console.log(`${name} enter the establishment`);// If the value of age is greater than 21, print 'You can enter the establishment'
} else { console.log(`${name} not enter, because you are a not of age`) };// If the users age input is less than 21, print "You can not enter, because you are not of age"

//Ex.6 Logical operators: ||, &&, !
let hour = 2000;// VARIABLE IS SET TO hour WITH THE VALUE OF 2000 HRS
if (hour < 1000 || hour > 1800) { // IF HOUR IS < 1000HRS, OR > 1800 HRS THE STATEMENT WILL BE FALSE AND THE STRING OUTPUT WILL BE DISPLAYED
  console.log('Sorry, our shop is closed');
}// THE PRINTOUT WILL BE Sorry, our shop is closed

//Ex.7 switch statements
var grade = "F";// VARIABLE grade SET TO F

switch (grade) { // VARIABLE switch SET TO grade 
  case "A":// IF var grade IS A PRINTOUT APPROPRIATE CONSOLE MESSAGE
    console.log("You did great!");// IF TRUE, PRINOUT MESSAGE You did great!
    break;// END EACH CASE WITH A BREAK TO ESCAPE THE SWITCH STATEMENT 

  case "B":// IF var grade IS B PRINTOUT APPROPRIATE CONSOLE MESSAGE
    console.log("You did good.");// IF TRUE, PRINOUT MESSAGE You did good.
    break;// END EACH CASE WITH A BREAK TO ESCAPE THE SWITCH STATEMENT 

  case "C":// IF var grade IS C PRINTOUT APPROPRIATE CONSOLE MESSAGE
    console.log("You did not do to well.");// IF TRUE, PRINOUT MESSAGE You did not do to well.
    break;// END EACH CASE WITH A BREAK TO ESCAPE THE SWITCH STATEMENT 

  case "F":// IF var grade IS F PRINTOUT APPROPRIATE CONSOLE MESSAGE
    console.log("YOU ARE A NO-GO AT THIS STATION!!");// IF TRUE, PRINOUT MESSAGE YOU ARE A NO-GO AT THIS STATION!!
    break
};// END EACH CASE WITH A BREAK TO ESCAPE THE SWITCH STATEMENT 

//Ex.8 Ternary operator
var time = 2000;// var SET TO TIME WHICH IS 2000HRS
var result = (time < 1800) ? "Come on in" : "It's time for you to leave";//IF result IS LESS THAN 1800HRS THEN ITS TRUE  
console.log(result);// THEN THE OUTPUT WILL DISPLAY THE MESSAGE It's time for you to leave





