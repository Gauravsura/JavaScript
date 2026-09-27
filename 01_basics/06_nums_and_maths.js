const score = 100 //Number

const balance = new Number(100) //explicitly define datatype-Number
console.log(balance)

console.log(balance.toString())
console.log(balance.toFixed(2))  //used in ecommerce website //Give fixed zeros after decimal


//toPrecision()
const otherNUmber = 23.5689
// const otherNUmber = 123.5689
// const otherNUmber = 1234.5689

console.log(otherNUmber.toPrecision(3)) //Precised value upto 3 digits


//toLocalString()
const hundered = 10000000  
console.log(hundered.toLocaleString('en-IN'))  //en-IN=>Indian
                                     //Represent zeros seperately


//++++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++++++
 
// console.log(Math)
// console.log(Math.abs(-4))     //absolute value
// console.log(Math.round(4.6))  //Rounding off
// console.log(Math.ceil(4.1))   //Round of towards top(5)
// console.log(Math.floor(4.9))  //Round of towards base(4)
// console.log(Math.min(4, 0, 5, 7, 9))  //Minimum value
// console.log(Math.max(4, 0, 5, 7, 9))  //Maximum value


// Math.Random

console.log(Math.random()) //Random value b/w 0 and 1

//Random num btw 1 and 10 in decimal
console.log((Math.random()*10) + 1)  

 //Random number btw 1 and 10
console.log(Math.floor(Math.random()*10) + 1)
// +1 to avoid the case where value is 0 beacause of math.floor

const min = 10
const max = 20
//Random number btw 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)



