// READ THIS BEFORE GETTING STARTED: Check out the tests in higherOrderFunctions.spec.js to see how the test variable data is structured. This will help you figure out how to write your functions.

// TODO: Using the .map() method, complete the getCitiesPopulations so that it returns an array of the city populations only
function getCitiesPopulations(arrayOfObjects) {
  var populations = arrayOfObjects.map((city) => city.pop);
  return populations;
}

//TODO: Using the .map() method, complete the addToPopulations function so that it returns an array of populations with 100 added to each population
function addToPopulations(arrayOfObjects) {
  let addedPops = arrayOfObjects.map((city) => city.pop + 100);
  return addedPops;
}

// TODO: Using the .filter() method, complete the getDogsUnderFive function so that it returns an array of only the dog objects with ages under 5
function getDogsUnderFive(arrayOfObjects) {
  let dogsUnderFive = arrayOfObjects.filter((dog) => dog.age < 5);
  return dogsUnderFive;
}

// TODO: Using the .filter() method, complete the overFirstIndex function so that it returns an array of objects at indexes greater than one
function overFirstIndex(arrayOfObjects) {
  let overIndex = arrayOfObjects.filter((dog, index) => {
    return index > 1;
  });
  return overIndex;
}
// TODO: Using the .reduce() method, complete the getSumOfNumbers function so that it returns the sum of an array of numbers
function getSumOfNumbers(arrayOfNumbers) {
  var sum = arrayOfNumbers.reduce((acc, val) => acc + val, 0);
  return sum;
}

// TODO: Using the .reduce() method, complete the  getPopulationSum funciton so that is returns the sum of every city's population except Waco
function getPopulationSum(arrayOfObjects) {
  var populationSum = arrayOfObjects.reduce((acc, currentElement) => {
    if (currentElement.city !== `Waco`) {
      acc += currentElement.pop;
    }
    return acc;
  }, 0);
  return populationSum;
}

// TODO: Using the .reduce() method, complete the flattenArray funciton so that it flattens the nested array
function flattenArrayofArrays(arrayOfArrays) {
  var flattened = arrayOfArrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
  return flattened;
}
