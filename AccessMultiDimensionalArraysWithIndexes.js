const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];


  /**
   * const arr = [
   * [1, 2, 3],
   * [4, 5, 6],
   * [7, 8, 9],
   * [[10, 11, 12], 13, 14]
 * ];

 * arr[3];
 * arr[3][0];
 * arr[3][0][1];
 * arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.
   */


  /// Manipulate Arrays With pop()

const myArray1 = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray1.pop()

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction()


/// Passing Values to Functions with Arguments

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(3, 7);

/// Return a Value from a Function with Return

function timesFive(a) {
  return a * 5;
}
timesFive()

// 

// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


// 
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var firstItem = arr.shift(arr);
  return firstItem;
  /// return item[-1];
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// 
function testLogicalOr(val) {
  // Only change code below this line

  if (val <10 || val>20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

// 
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

// 

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else{
    return "Between 5 and 10";
  }
}

testElseIf(7);

// 
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return 'Tiny';
  }
  else if (num < 10) {
    return 'Small';
  }
  else if (num < 15) {
    return 'Medium';
  }
  else if (num < 20) {
    return 'Large';
  }
  else {
    return 'Huge';
  }
  // Only change code above this line
}

testSize(7);

// 
