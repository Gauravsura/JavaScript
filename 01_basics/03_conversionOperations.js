// let score = 33
let marks = "33"
// let marks = "33abc" 
// let marks = " gourav"


// console.log(typeof score)
console.log(typeof (marks))

let valueInNumber = Number(marks)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN (Not a Number)
//true =>  1 , false =>0
// null = 0 , Type = object 
//undefined => Nan

let isLoggedIn = 1
let valueInBoolean = Boolean(isLoggedIn)
// console.log(typeof valueInBoolean)
// console.log(valueInBoolean)

// 1 => true , 0 => false 
// " " => false 
// "Gourav" => true


let someNumber = 44
let StringNumber = String(someNumber)
console.log(typeof StringNumber)
console.log(StringNumber)


//**************************Conversion Operations***********************/

let value = 34
let negValue = -value
console.log(negValue) // -34 

// console.log(2+2) 
// console.log(2-2) 
// console.log(2*2) 
// console.log(2**3) 
// console.log(2/2) 
// console.log(2%2) 

// let str1 = "Hello"
// let str2 = "World"
// let str3 = str1 + " " + str2
// console.log(str3) // Hello World

// console.log("2" + 2) // 22
// console.log(2 + "2") // 22
// console.log("1" + 1 + 2) // 112  //if the first value is string then it will convert all the values into string and then concatenate them
// console.log(1 + 2 + "2") // 32  // if string is at the end then it will first perform the addition operation and then convert the result into string and concatenate it with the string value


//wrong practices

console.log(+true) // 1
console.log(+"") // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  //wrong practice because it is not clear which value is assigned to which variable