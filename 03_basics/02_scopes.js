// let a = 10;
// const b = 20;
// var c = 300;
//let and const are accessible outside the function because they are defined in the global scope.

if (true) {
  let a = 40; //this a is only accessible within this function
  const b = 50; //this b is only accessible within this function
  //  var c = 60; //this c is accessible outside this function because var is function scoped, not block scoped
  console.log("Inside the if block: ", a); // 40}
  // let and const are block scoped, which means they are only accessible within the block they are defined in.
}

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); //60

//Nested function scopes
function One() {
  const userName = "Gourav"; //this userName is only accessible within this function

  function Two() {
    const userAge = 23; //this userAge is only accessible within this function
    console.log(userName); //this will print "Gourav" to the console because userName is accessible within this function
  }
  //console.log(userAge); //this will throw an error because userAge is not accessible within this function
  Two(); //this will call the function Two and print "Gourav" to the console
}
One(); //this will call the function One and print "Gourav" to the console

//Block scope in if statements
if (true) {
  const userName = "Gourav";
  if (userName === "Gourav") {
    const userNum = 23; //this userNum is only accessible within this function
    console.log(userName + userNum);
  }
  // console.log(userNum); //this will throw an error because userNum is not accessible outside the if block
}
// console.log(userName); //this will throw an error because userName is not accessible outside the if block

//+++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++

addone(5); // it will run
function addone(num) {
  // this is named funtion
  return console.log(num + 1);
}

//addtwo(5) //this will throw error
const addtwo = function (num) {
  //this is arrow function
  //here funtion is declared and hold inside variable named addtwo
  return console.log(num + 1);
};
addtwo(5);
