console.log(2 > 1) // true
console.log(2 < 1) // false
console.log(2 >= 1) // true
console.log(2 <= 1) // false
console.log(2 == 1) // false
console.log(2 != 1) // true

console.log("2" > 1) // true
console.log("2" == 2) // true
console.log("02" == 2) // true
console.log(2 === "2") // false -its false because strict equality operator checks for both value and type

// avoid these kind of comparisons 
console.log(null > 0)// false here null is converted to 0 and then compared with 0 so it returns false
console.log(null >= 0) // true,because comparison operator converts null to 0 and then compares it with 0 so it returns true
console.log(null == 0) // false because equality operator does not convert null to 0 and compares it with 0 so it returns false

console.log(undefined > 0) //false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false


