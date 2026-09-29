// A function is a reusable block of code that performs a task.
// You can call it whenever you need that task done.
function greet() {
  console.log("Hello!");
}

greet(); // Calls the function and prints "Hello!"

//A function can also receive parameters and return a result:
function add(a, b) {   //a,b are called parameters, which are used to pass values to the function
  return a + b;
}

const total = add(2, 3); //these are called arguments, which are passed to the function parameters a and b
console.log(total); // 5

console.log(add(5, "10")); // 510  //if we pass a number and a string to the function, it will concatenate them and return a string
console.log(add(5, "a")); // 5a  //if we pass a number and a string to the function, it will concatenate them and return a string
console.log(add(5, null)); // 5  //if we pass a number and null to the function, it will return the number


function loginUser(username, password) {
  if (!username || !password) {
    console.log("Username and password are required!");
    return; // Exit the function if username or password is missing
  }
  // Return a success message or token
  return `${username} Login successful!`;
}

loginUser("gourav_sss", "password123"); //it will not return anything because we 
// are not storing the return value in a variable or printing it to the console.
//It will print "Logging in user: gourav_sss" to the console and then print "Login successful!"
// console.log(loginUser("gourav_sss", "password123"));


function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(100, 200, 300)); // [100, 200, 300]  //it will return an array of numbers passed to the function


//Passing an Object as an argument to a function
const user = {
  name: "Gourav",
  age: 23,   //if age is changed to ages, it will not be displayed in the console because we are trying to access user.age which is undefined
            // so type checking is important in JavaScript, as it can lead to unexpected behavior if not handled properly.
};
function displayUserInfo(user) {
  console.log(`UserName: ${user.name}, and Age: ${user.age}`);
}          
// displayUserInfo(user);
displayUserInfo({ name: "Gourav", age: 23 }); //it will print "UserName: Gourav, and Age: 23" to the console


//Passing an Array as an argument to a function
const fruits = ["apple", "banana", "orange"];

function displayFruits(getArray) {
  return console.log(getArray[1]); //it will print "banana" to the console
}
displayFruits(fruits); //it will print "banana" to the console  
displayFruits(["grapes", "mango", "kiwi"]); //it will print "mango" to the console