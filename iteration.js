/**
 * Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
 */
// Setup
const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

// Only change code below this line





Iterate Through an Array with a For Loop
Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;

// Only change code below this line
for (var i = 0; i < myArr.length; i++) {
total += myArr [i];
}


Nesting For Loops
Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

const prod = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(prod);
