//For

for (let index = 0; index < 10; index++) {
  if (index == 5) {
    // console.log("Found the index 5");
  }
  // console.log(`index: ${index}`);
}

// sole.log(index); // ReferenceError: index is not defined, because index is block scoped

for (let i = 1; i < 10; i++) {
  // console.log(`outer loop i: ${i}`);
  for (let j = 1; j < 10; j++) {
    // console.log(`inner loop j: ${j} and inner loop i: ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let array = [1, 2, 3, 4, 5];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // console.log(`element: ${element}`);
}

//Break and Continue

// for (let index = 0; index <= 15; index++) {
//   if (index == 5) {
//     console.log("Found the index 5");
//     break; // break will exit the loop
//   }
//   console.log(`value of index: ${index}`);
// }

for (let index = 0; index <= 10; index++) {
  if (index == 7) {
    console.log("Found  7");
    continue; // continue will skip the rest of the loop body and move to the next iteration
  }
  console.log(`value of index: ${index}`);
}