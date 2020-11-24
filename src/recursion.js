// What is recursion?
// A function that calls itself

// When would you use recursion?
// DOM traversal, tree traversal, graph traversal, when you don't know how many layers / how deeply nested

// What are the components of recursion?
// 1. Base Case = where the recursion stops
// 2. Recursive call to function itself

// Recursion and the call stack
// When a function is invoked, it is placed on top of the call stack
// Functions are removed one at a time from the top of the stack when we hit a return statement
// With recursion, the same function gets pushed onto the call stack over and over and over

// How do we get recursion to stop?
// we invoke the same function with a different input until we reach the base case!

// Here's an example of a recursive function
// Try running this in a google chrome snippet and stepping through the function while observing the call stack over time
function countDownToLaunch(n) {}

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
function flattenArray(nestedArr) {}

// using recursion, write a function that returns an array of names of all the backyard items that are "Active" from the backyardData set
var backyardData = [
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
];

function getActiveItems(array) {}

// getActiveItem(backyardData); // ["Vacuum", "Pump", "Chair", "Plant"]

// HELPER FUNCTION RECURSION

// helper function recursion works because of closures. An inner helper function is used inside of the main function so that the inner funciton has access to the result variable (without the risk of resetting the variable with each iteration)

// Helper function recursion requirements
// 1. result variable in the main function
// 2. helper function which contains: Base case and code that adds to the result variable
// 3. a recursive call to the helper function inside of the main function
// 4. a return statement for the result in the main function

// write a recursive funtion getEvens which accepts an array of numbers and returns array which contains only the even numbers
// use a helper function, getEvensHelper

function getEvens(arr) {}
