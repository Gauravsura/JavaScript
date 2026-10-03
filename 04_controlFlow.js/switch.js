//switch statement example
//syntax
// switch (expression) {
//   case value1:
//     // code to be executed if expression === value1
//     break;
//   case value2:
//     // code to be executed if expression === value2
//     break;
//   default:
//     // code to be executed if expression doesn't match any case
// }

const now = new Date(); // current date and time
const weekday = now.getDay(); // weekday number, 0 through 6

switch (weekday) {
  //switch(.new Date().getDay()) {
  case 0:
    console.log("Today is Sunday");

    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
}

//switch statement example with string values
const month = "april";
switch (month) {
  case "january":
    console.log("The month is January");
    break;
  case "february":
    console.log("The month is February");
    break;
  case "march":
    console.log("The month is March");
    break;
  case "april":
    console.log("The month is April");
    break;
  default:
    console.log("The month is not recognized");
}

/*
Use switch when you want to run different code depending on one value 
matching one of several specific choices. It can be clearer than a 
long chain of if...else if.
*/

// Other common uses include handling menu choices, order statuses, or user roles.
//order status example
const status = "shipped";

switch (status) {
  case "pending":
    console.log("Your order is being prepared");
    break;
  case "shipped":
    console.log("Your order is on its way");
    break;
  case "delivered":
    console.log("Your order has arrived");
    break;
  default:
    console.log("Unknown order status");
}

//user role example
const role = "admin";

switch (role) {
  case "admin":
    console.log("You can manage users");
    break;
  case "editor":
    console.log("You can edit content");
    break;
  case "viewer":
    console.log("You can view content");
    break;
  default:
    console.log("Unknown role");
}
