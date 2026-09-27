//Primitive

//7 types : String, Number, Boolean, Null, Undefined, Symbols, Bigint

const score = 100; //number
const scoreValue = 100.3; //Number

const isloggedIn = true; //Boolean
const outsideTemp = null; //null
let userEmail; //undefined

const id = Symbol("123"); //Symbol
const anotherId = Symbol("123"); // they both will be different symbols

console.log(id === anotherId); //false

const bigNumber = 323423028982982903232n; //bigint

//Reference (Non-Primitive)

//Arrays, Objects , Functions

const heros = ["shaktiman", "ironman", "nagraj", "spiderman"]; //Array

let myObj = {
  //Object
  name: "gourav",
  age: 23,
  city: "Gwalior",
};

const myFunction = function () {
  //function

  console.log("Hello");
};

console.log(typeof anotherId);

let myNickname = "golu"

let anotherName = myNickname
anotherName = "zash"

console.log(anotherName)
console.log(myNickname)

let userOne = {
  email : "user@gmail.com",
  upi : "user@ybl"
}

let userTwo = userOne 
userTwo.email = "gourav@google.com"

console.log(userOne.email)
console.log(userTwo.email)