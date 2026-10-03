//if
const isUserLoggedin = true;
const temperature = 34;

// if(2 != 3){
//   console.log("executed")
// }

if (temperature < 50) {
  console.log("Temperature is less than 50");
} else {
  console.log("Temperature is greater than 50");
}
// <, >, <=, >=, !=, ==, ===

const score = 200;

if (score > 100) {
  const power = "fly";
  var speed = "fast"; //dont use var, use let or const
  console.log(`User Powee: ${power}`);
}
// console.log(`User Powee: ${power}`) //const is block scoped
console.log(`User Speed: ${speed}`); //var is function scoped/global scoped

//shorthand 
const balance = 1000;
if (balance > 500) console.log("buy");

//ternary operator
const userchoice = balance > 500 ? "buy" : "don't buy";
console.log(`userchoice: ${userchoice}`);

//If-else ladder
const marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else if (marks >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}


const userLoggedIn = true;
const userDebitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = false;

if (userLoggedIn && userDebitCard) { 
  console.log("User can buy");
}
if (userLoggedIn || userDebitCard) {
  console.log("User can buy");
}