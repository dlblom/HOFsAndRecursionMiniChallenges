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

var getCitiesPopulations = (populationData) => {};

var addToPopulations = (populationData) => {};

var dogData = [
  {
    name: `Tucker`,
    age: 1,
    breed: `Lab`,
  },
  {
    name: `Spot`,
    age: 4,
    breed: `Mutt`,
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

// write a function that returns an array of only the dog objects with ages under 5
var getDogsUnderFive = (dogData) => {};

// write a function that returns an array of dog names beyond the first index of the dogData array
var overFirstIndex = (dogData) => {};

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

var getSumOfNumbers = (arr) => {};

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

var getPopulationSum = (populationData) => {};

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

// Using the above dogData set, use the reduce method to return an array of only the the dog names
var getDogNamesOnly = (dogData) => {};

// given the nested array below use the reduce method to flatten the nested array (result should be [0, 1, 2, 3, 4, 5])
var nestedArray = [
  [0, 1],
  [2, 3],
  [4, 5],
];

var flattenArray = (nestedArray) => {};
