const alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    ...
    24:"C",
    25:"B",
    26:"A"
  };
  
  alpha[2];
  alpha[24];
  
  const value = 2;
  alpha[value];


///

/**
 * Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
 */
// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
      alpha:"Adams",
      bravo:"Boston",
      charlie:"Chicago",
      delta:"Denver",
      echo:"Easy",
      foxtrot:"Frank"
    };
     result = lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");