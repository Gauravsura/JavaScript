const accountId = 44522;
let accountEmail = "iamgouravb@gmail.com";
var accountPassword = "12345";
accountCity = "Gwalior";
let accountState;

//accountId = 2  //not allowed

accountEmail = "gb@gb.com";
accountPassword = 12234322;
accountCity = "Gurugram";

/* prefer not to use var because 
 of issue in block scope and functional scope */

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState,
]);
