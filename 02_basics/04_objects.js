//2. Object Constructor Syntax

const tinderuser = new Object();  //singleton object 
// const myObj2 = {}              //not a singleton object

//the object created using object constructor syntax is empty and we can add properties to it later
tinderuser.name = "Gourav";
tinderuser.age = 22;
tinderuser.city = "Delhi";
tinderuser.isLoggedIn = false;

/* Note:
Singleton Object: An object that is created only once and reused throughout the application is called a singleton object.
In JavaScript, we can create a singleton by using a constructor pattern or by storing a single object instance in a variable.
*/
console.log(tinderuser); //{ name: 'Gourav', age: 22, city: 'Delhi', isLoggedIn: false }

//Nested Object
const reactCourse = {
    courseName: "React JS",
    price: 2999,  
    courseInstructor: {
        name: "Gourav",
        experience: 5,
        isAvailable: true
    }
}
console.log(reactCourse);
console.log(reactCourse.courseInstructor.name); //Gourav

// Combining Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({}, obj1, obj2, obj3)    // {} is the target object where values will be copied
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

/* NOte:                   Object.Assign()
 Object.assign() is used to copy properties from one object into another.

                Syntax: Object.assign(target, ...sources)
                target {}= object where values will be copied   
                source   = object from which values are copied
*/


//Spread Operator to combine objects
const obj5 = {...obj1, ...obj2, ...obj3}  //spread operator is used to copy properties from one object into another
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//Array of Objects
const users = [
    {userId: 1, userName: "Gourav"},
    {userId: 2, userName: "Rohit"},
    {userId: 3, userName: "Amit"},      
]
console.log(users); // [ { userId: 1, userName: 'Gourav' }, { userId: 2, userName: 'Rohit' }, { userId: 3, userName: 'Amit' } ]
console.log(users[1].userName); // Rohit

console.log(Object.keys(tinderuser)); // [ 'name', 'age', 'city', 'isLoggedIn' ]  //returns an array of keys of the object
console.log(Object.values(tinderuser)); // [ 'Gourav', 22, 'Delhi', false ]  //returns an array of values of the object
console.log(Object.entries(tinderuser)); // [ [ 'name', 'Gourav' ], [ 'age', 22 ], [ 'city', 'Delhi' ], [ 'isLoggedIn', false ] ]  //returns an array of key-value pairs of the object

console.log(tinderuser.hasOwnProperty("name")); // true  //returns true if the object has the specified property


//____________________________Object Destructuring________________________________

// Object destructuring is a way to unpack values from an object into variables directly.

const person = {
  firstName: "John",
  lastName: "Doe",
  city: "Delhi"
};

const { firstName, lastName, city } = person;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(city); // Delhi

//Renameing variables while destructuring  and providing default values

const { firstName: userName, age = 23 } = person;

console.log(userName); // John
console.log(age); // 23  //age is not present in the object so it will take the default value 23



// _________________________Json API Introduction________________________________
// A JSON API is an API that sends and receives data in JSON format.

// Suppose a server has this data:/
// {
//   "id": 1,
//   "name": "Gourav",
//   "email": "gourav@example.com"
// }
// This is JSON.

// Now an API may return that data to your frontend app like this:
// GET /users/1 
// {
//   "id": 1,
//   "name": "Gourav",
//   "email": "gourav@example.com"
// }

// Why JSON APIs are popular
// easy to read
// easy to send
// works well with JavaScript
// lightweight compared to XML

//___________________________JSON API structure________________________
// A JSON API usually looks like this:
/*{
  "users": [
    {
      "id": 1,
      "name": "Gourav"
    },
    {
      "id": 2,
      "name": "Riya"
    }
  ]
}
This is an array of objects inside another object.
*/


