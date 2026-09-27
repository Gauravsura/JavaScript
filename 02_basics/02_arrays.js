const marvelHeroes = ["Spiderman", "Ironman", "Hulk", "Thor", "Black Widow"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];


//++++++++++++++++++++++  Merge two arrays  +++++++++++++++++++++++++++++++ 


// marvelHeroes.push(dcHeroes); //adds new element at the end of array
// console.log(marvelHeroes); //original array is modified
// Note: merging two arrays using push() method will add the second array as a single element in the first array, not merge them.

//Concatenation of two arrays
const allHeroes = marvelHeroes.concat(dcHeroes); //merges two arrays and returns a new array
console.log(allHeroes); //original arrays are not modified

//Spread Operator                         //best way to merge two arrays
const allHeroes2 = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes2); //original arrays are not modified


//Problem - array inside array inside array
// solution - array.flat() method
// Flattening an array means converting a nested array into a single array. The flat() method is used to flatten an array.
const nestedArray = [1, 2, [3, 4, [5, 6,]],[7, 8]];
const flattenedArray = nestedArray.flat(2); //flattening the array upto 3 levels
console.log(flattenedArray); //original array is not modified

//converting to array from string/object
console.log(Array.isArray("Gourav")); //returns false because "Gourav" is not an array
console.log(Array.from("Gourav")); //returns an array from a string
console.log(Array.from({name: "Gourav"})); //returns an array from an object 
 //note: interestingly it returns an array of undefined values with length equal to the number of properties in the object

//Array.of() method
 let score1 =100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1, score2, score3)) //returns an array from the given values