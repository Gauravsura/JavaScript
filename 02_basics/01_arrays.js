//Array

const myArr = [0, 1, 2, 3, 4];
const myHeroes = ["Spiderman", "Ironman"];

const myArr2 = new Array(1, 2, 3, 4); //new Array(1, 2, 3, 4) means “make a new array with these 4 elements.”
// console.log(myArr[1]);

//+++++++++++++++++++++++++    Array Methods    ++++++++++++++++++++++++++++++++++++++

// console.log(myArr.push(6)) //adds new element at the end of array
// console.log(myArr.length) //length of array
// console.log(myArr.pop())  //removes last element from array 

// console.log(myArr.shift()) //removes first element from array
//console.log(myArr.unshift(5)) //adds new element at the start of array


// console.log(myArr.includes(3)) //returns true if element is present in array else false
// console.log(myArr.indexOf(11)) //returns index of element if present in array else -1


const newArr = myArr.join(" ") //merges two arrays and returns a string
console.log(newArr)
console.log(typeof(newArr)) //string


// Slice and Splice

console.log(myArr.slice(1, 3)) //returns a new array from index 1 to 3 (not including 3)
console.log(myArr) //original array is not modified

console.log(myArr.splice(1, 3)) //removes elements from index 1 to 3 (not including 3) and returns a new array
                                //it says  remove 3 items starting from index 1
console.log(myArr) //original array is modified



//mdn Link to study array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
