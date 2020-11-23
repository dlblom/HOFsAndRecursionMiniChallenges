// Brief introduction to Higher Order Functions
// What are HOFs? HOFs are functions that operate on other functions be either taking them in as arguments are returning them

// Map

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

var getCitiesPopulations = (populationData) => {
  let populations = populationData.map((city) => city.pop);
  return populations;
};

var addToPopulations = (populationData) => {
  let addedPops = populationData.map((city) => city.pop + 100);
  return addedPops;
};

// Filter Method Definintion: creates a new array with all elements that pass the test implemented by the provided function

// Syntax: let newArray = arr.filter(callback(currentValue[, index[, array]]) {
// return element for newArray, if true
//}[, thisArg]);

// The callback function accepts the current value being processed in the array and can accept three optional arguments

// index which is the current elements index being processed

// array which is the array that filter was called on

// thisArg which is the value to use as this when executing the callback

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
var getDogsUnderFive = (dogData) => {
  let dogsUnderFive = dogData.filter((dog) => dog.age < 5);
  return dogsUnderFive;
};

// write a function that returns an array of dog names beyond the first index of the dogData array
var overFirstIndex = (dogData) => {
  let overIndex = dogData.filter((dog, index) => {
    return index > 1;
  });
  return overIndex;
};

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

var getSumOfNumbers = (arr) => {
  var sum = arr.reduce((acc, val) => acc + val, 0);
  return sum;
};

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

var getPopulationSum = (populationData) => {
  var populationSum = populationData.reduce((acc, currentElement) => {
    if (currentElement.city !== `Waco`) {
      acc += currentElement.pop;
    }
    return acc;
  }, 0);
  return populationSum;
};

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
var getDogNamesOnly = (dogData) => {
  var dogNames = dogData.reduce((names, dog) => {
    names = names.concat(dog.name);
    return names;
  }, []);
  return dogNames;
};

// given the nested array below, flattened, use the reduce method to flatten the nested array (should return a single array of values)
var nestedArray = [
  [0, 1],
  [2, 3],
  [4, 5],
];

var flattenArray = (nestedArray) => {
  var flattened = nestedArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
  return flattened;
};

// reduce intro article: https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc

// benefits of using reduce article: https://medium.com/@dave_lunny/reduce-your-fears-about-array-reduce-629b334ab945

// https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce
