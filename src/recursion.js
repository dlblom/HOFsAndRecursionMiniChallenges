// READ THIS BEFORE GETTING STARTED: Check out the tests in recursion.spec.js to see how the test variable data is structured. This will help you figure out how to write your functions.

// TODO: Using recursion, complete the factorial function so that it returns the factorial of an input number
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// TODO: Using recursion, complete the sumRange function so that it returns the sum of all numbers in range (starting from 1 and including n)
function sumRange(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumRange(n - 1);
  }
}

// TODO: Using recursion, complete the flattenNestedArray function so that it accepts a nested array and returns a flattened array
function flattenNestedArray(nestedArr) {
  var flattened = [];

  for (var i = 0; i < nestedArr.length; i++) {
    if (Array.isArray(nestedArr[i])) {
      flattened = flattened.concat(flattenNestedArray(nestedArr[i]));
    } else {
      flattened.push(nestedArr[i]);
    }
  }
  return flattened;
}

// TODO: Using recursion, complete the getEvens function so that it accepts an array of numbers and returns an array which contains only the even numbers
function getEvens(arrayOfNums) {
  var evens = [];
  if (arrayOfNums.length === 0) {
    return evens;
  }

  if (arrayOfNums[0] % 2 === 0) {
    evens.push(arrayOfNums[0]);
  }
  return evens.concat(getEvens(arrayOfNums.slice(1)));
}

// Example of using a helper function instead of pure recursion
// function getEvens(arrayOfNums) {
//   let evens = [];

//   function getEvensHelper(arrayOfNums) {
//     // base case
//     if (arrayOfNums.length === 0) {
//       return;
//     }

//     for (var i = 0; i < arrayOfNums.length; i++) {
//       if (arrayOfNums[i] % 2 === 0) {
//         evens.push(arrayOfNums[i]);
//       }
//     }
//   }
//   // recursive call
//   getEvensHelper(arrayOfNums.slice(1));
//   return evens;
// }

// TODO: Using recursion, complete the getActiveItems function so that it returns an array of names of all the items that have a status of "Active"
function getActiveItems(arrayOfNestedObjects) {
  let activeItems = [];

  // loop through the input array
  for (var i = 0; i < array.length; i++) {
    // if the status property at the current index is active
    if (array[i].status === "Active") {
      // add it to the active items array
      activeItems.push(array[i].name);
    }
    // check if the object has children
    if (array[i].children) {
      // if it does, recursivley call function on children
      activeItems = activeItems.concat(getActiveItems(array[i].children));
    }
  }
  return activeItems;
}
