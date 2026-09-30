// Immediately Invoked Function Expression (IIFE)

(function chai() {
  //Named IIFE
  console.log(`DB connected`);
})();

/*     () ()  => The outer parentheses ( ... ) make JavaScript 
      treat it as a function expression.
      The final () calls that function right away.
*/

// iife with arrow function
(  () => {
  console.log(`DB connected Two`)
})(); 

(  (name) => {
  console.log(`DB connected three ${name}`)
})("gourav") 

// iife is used to remove the pollution created by  variables and other declared things in global scope


/* 
The function runs once, as soon as JavaScript reaches this code.
 Its local variables stay inside the function scope, 
 rather than becoming global variables. 
 It’s commonly called with an extra semicolon at the end: })();
 */