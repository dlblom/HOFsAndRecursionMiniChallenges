// Brief introduction to Higher Order Functions
// What are HOFs? HOFs are functions that operate on other functions be either taking them in as arguments are returning them

// Reduce Method Definition: The reduce method is used to apply a function to every element in the array and returns a single value. Another way to think about it is that the reduce method "reduces" an array to a single value.

//Syntax Example: let result = array.reduce(callback, initValue);

// Definition of the reduce arguments outlined above:

// result = the single value that is returned
// array = the array to run the reduce method on
// callback = a function to be applied to every element in the array
// initValue = (aka accumulator) is an optional initial starting value to pass in. If it is not passed in, the 0th elemen is used as the initial value

// The callback function can take four arguments:

// Callback Syntax
// arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
// return result from executing something for accumulator or currentValue
// }[, initialValue]);

// accumlator = accumlates the callback function's return values. The accumlator value starts from the initial value if it is supplied
// currentValue = the value of the current element in the array
// index [optional] = the index of the current value in the array
// array [optional] = the array reduce was called on

// Let's take a look at this example where we use a for loop to to get the sum of numbers in an array. How would you solve this problem using the reduce method?
var arr = [1, 2, 3, 4];

function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// arraySum(arr) //10

var reduceSum = arr.reduce(function (acc, val) {
  return acc + val;
}, 0);

// console.log(reducSum) // 10

// given the data below, use the reduce method get the sum of the total population for every city except Waco
var populationData = [
  {
    city: `Austin`,
    pop: 964254,
  },
  {
    city: `Waco`,
    pop: 138183,
  },
  {
    city: `Leander`,
    pop: 56111,
  },
  {
    city: `Cedar Park`,
    pop: 76999,
  },
];

var citySum = populationData.reduce(function (acc, currentElement) {
  if (currentElement.city !== `Waco`) {
    acc += currentElement.pop;
  }
  return acc;
}, 0);

// given the array of dog data, use the reduce method to return true or false depending on whether or not any of the dogs have an odd number age

var dogData = [
  {
    name: `Tucker`,
    age: 1,
    breed: `Lab`,
  },
  {
    name: `Spot`,
    age: 4,
    breed: "Mutt",
  },
  {
    name: `Waffles`,
    age: 6,
    breed: `Corgi`,
  },
  {
    name: `Sheldon`,
    age: 11,
    breed: `Corgi`,
  },
];

var oddAge = dogData.reduce(function (isOdd, dog) {
  if (dog.age % 2 === 1) {
    return true;
  }
  return isOdd;
}, false);

console.log(oddAge); // true

// using the same dogData set, use the reduce method to return an array of all the dog names

var dogNamesOnly = dogData.reduce(function (names, dog) {
  names = names.concat(dog.name);
  return names;
}, []);

// console.log(dogNamesOnly); ["Tucker", "Spot", "Waffles", "Sheldon"]

// given the nested array below, flattened, use the reduce method to flatten the nested array (should return a single array of values)
var nestedArray = [
  [0, 1],
  [2, 3],
  [4, 5],
];

var flattened = nestedArray.reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);
// console.log(flattened); // [0, 1, 2, 3, 4, 5]

// reduce intro article for students: https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc
// benefits of using reduce article for students: https://medium.com/@dave_lunny/reduce-your-fears-about-array-reduce-629b334ab945
// https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce
