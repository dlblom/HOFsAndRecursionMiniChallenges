// write a recursive function called factorial which accepts a number and returns the factorial of that number

// factorial example
// 4!
// 4 * 3 * 2 * 1 = 24
function factorial(n) {}

// factorial(4) // 24

// facorial(4) // 24 is the final result
//   4 * factorial(3) // bubbles up to be 4 * 6
//     3 * factorial(2) // bubbles up to be 3 * 2
//       2 * 1 // we've reached the base case and now the result begins to bubble up

// write a recursive function called sumRange which accepts a number and returns the sum of all numbers in range (starting from 1 and including n)

// sumRange example
// 3 + 2 + 1 = 6
function sumRange(n) {}

//sumRange(3); // 6
//  3 + factorial(2)  // 3 + 3
//    2 + factorial(1) // 2 + 1
//    1  // we've reached the base case so now we bubble up

// NESTED STRUCTURES SECTION

// flatten example
// [[1], [2], [3]] -> [1, 2, 3]

// write a recursive funtion flattenArray which accepts a nested array and returns a flattened array
function flattenNestedArray(nestedArr) {}

// using recursion, write a function that returns an array of names of all the backyard items that are "Active" from the backyardData set
function getActiveItems([
  {
    id: 1,
    name: `Pool`,
    status: `Inactive`,
    children: [
      {
        id: 2,
        name: `Vacuum`,
        status: `Active`,
        children: [
          {
            id: 3,
            name: `Pump`,
            status: `Active`,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: `Chair`,
    status: `Active`,
  },
  {
    id: 5,
    name: `Plant`,
    status: `Active`,
  },
  {
    id: 6,
    name: `Umbrella`,
    status: `Inactive`,
  },
  {
    id: 7,
    name: `Bench`,
    status: `Inactive`,
  },
]) {
  // funciton logic goes here
}


// write a recursive funtion getEvens which accepts an array of numbers and returns array which contains only the even numbers
// use a helper function, getEvensHelper
function getEvens([1,2,3,4]) {
  // function logic goes here
}
