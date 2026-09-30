//___________________________ " This "  in  object __________________________________
const user = {
  username: "gourav",
  id: 222,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    //This => it refers to the current calling context
    console.log(this); //print object user
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
console.log(this); // {} --empty object
// here "this" refers to an empty object because there is no object in global scope right now
// in browser it refers to "window" if there is no object in global scope

//__________________________ " this " in function _________________________________
function chai() {
  let userName = "gourav";
  // console.log(this) //shows the current context -=>fun(chai)
  console.log(this.userName); //undefined  ==>"this" doesnt work with functions
}
chai();

//________________"this " with other formate/syntax of function______________
// const chai = function(){
//    let userName = "gourav"
//    console.log(this.userName)//undefined
// }
// chai()

//_________________________'this" with Arrow function________________________
const tea = () => {
  let userName = "gourav";
  //  console.log(this) //{} -->empty object
  console.log(this.userName); //undefined
};
tea();

//---------------------------    Arrow Function  --------------------------------
() => {}; //is an arrow function with no parameters and an empty body.

const add2 = (num1, num2) => {
  return num1 + num2;
};

//implicit return arrow fun  --> without paranthesis/single liner

//const add2 = (num1, num2 ) =>  num1 + num2
// const add2 = (num1, num2 ) =>  (num1 + num2)

//  const add2 = (num1, num2) =>  ({usrname:"golu"}) //=>returns object


console.log(add2(4, 9));
