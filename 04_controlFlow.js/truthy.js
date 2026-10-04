const userEmail = "g@gourav.gmail.com"; // truthy value-assumesd as a true value
// const userEmail = [];

if (userEmail) {
  console.log("You have a valid email");
} else {
  console.log("You don't have a valid email");
}

// Falsy values
// false , 0 , -0 , "" , null , undefined , NaN, BigInt(0n) , document.all

// Truthy values
// "0", 'false', " " , true , 1 , -1 , "hello" , [] , {} ,
//  function(){} , new Date() , Infinity, BigInt(1n)

// if(userEmail.length === 0) {
// console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish coalescing operator (??) - returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand.

let val1;
val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = val1 ?? "default value";
// val1 = undefined ?? "default value";
// val1 = null ?? 10 ?? 20; // returns 10, as the first non-nullish value is 10

console.log(val1); // Output: 5

// Ternary Operator

// condition ? expressionIfTrue : expressionIfFalse

const iceTeaPrice = 100;
 iceTeaPrice >= 70 ? console.log("Ice Tea is Expensive") : console.log("Ice Tea is Cheap");