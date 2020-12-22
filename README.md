# officeHourMiniChallenges

Use this repo to practice Higher Order Functions (map, filter & reduce) and recursion. The goal is to make all the tests in the spec runner pass!

## Introduction to Higer Order Functions (HOFs)

What are HOFs? HOFs are functions that operate on other functions by either taking them in as arguments are returning the. Map, filter and reduce are built-in array methods in javascript

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Map</a> creates a new array with the results of calling the provided function on every element in the array

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Filter</a> creates a new array with all elements that pass teh test implemented by the provided function

- <a hfref="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">Reduce</a> executes a reducer functino (that you provide) on each element of the array, resulting in a single output value

## Introduction to Recursion

What is recursion? A function that calls itself

When would you use recursion? DOM traversal, tree traversal, graph traversal, when you don't know how many layers / how deeply nested an object or array has.

What are the components of recursion?

1. Base Case - where the recursion stops
2. Recursive call to function itself

Recursion and the call stack
When a function is invoked, it is placed on top of the call stack. Functions are removed one at a time from the top of the stack when we hit a return statement. With recursion, the same function gets pushed onto the call stack over and over and over.

How do we get recursion to stop? We invoke the same function with a different input until we reach the base case!

## HELPER FUNCTION RECURSION

Helper function recursion works because of closures. An inner helper function is used inside of the main function so the inner funciton has access to the result variable (without the risk of resetting the variable with each iteration).

Helper function recursion requirements

1. Result variable in the main function
2. Helper function which contains: Base case and code that adds to the result variable
3. A recursive call to the helper function inside of the main function
4. A return statement for the result in the main function

### Installation

To get started:

Navigate to the project Directory

```sh
$ cd officeHourMiniChallenges
```

```sh
$ drag the SpecRunner.html file into a browser URL
and press ENTER to see the tests
```

### Helpful Articles

- <a href="https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d">Using .map(), .reduce(), and .filter()</a>
- <a href="https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc">Reduce Introduction</a>
- <a href="https://medium.com/@dave_lunny/reduce-your-fears-about-array-reduce-629b334ab945">Benefits of Using Reduce</a>
- <a href="https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce">Understanding Reduce</a>

### Technologies

<table style="width:50%">
  <tr>
    <td><a href="https://mochajs.org/">Mocha</a></td>
    <td><a href="https://www.chaijs.com/">Chai</a></td>
     <td><a href="https://sinonjs.org/">Sinon</a></td>
  </tr>
</table>
