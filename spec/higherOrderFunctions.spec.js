(function () {
  "use-strict";

  //notice that describe itself is a higher order function. The
  describe("getSumOfNumbers", function () {
    before(function () {
      sinon.spy(Array.prototype, "reduce");
      original = getSumOfNumbers;
      getSumOfNumbers = sinon.spy(getSumOfNumbers);
    });

    afterEach(function () {
      getSumOfNumbers.reset();
      Array.prototype.reduce.reset();
    });

    after(function () {
      getSumOfNumbers = original;
      Array.prototype.reduce.restore();
    });

    it("should be a function", function () {
      expect(getSumOfNumbers).to.be.a("function");
    });

    it("should use the javascript reduce method", function () {
      getSumOfNumbers([2, 4, 6]);
      expect(Array.prototype.reduce.called).to.equal(true);
    });

    it("should return a number", function () {
      expect(getSumOfNumbers([2, 4, 6])).to.be.a("number");
    });

    it("should return the sum for a given set of numbers", function () {
      expect(getSumOfNumbers([2, 4, 6])).to.equal(12);
    });
  });

  describe("getPopulationSum", function () {
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

    before(function () {
      sinon.spy(Array.prototype, "reduce");
      original = getPopulationSum;
      getPopulationSum = sinon.spy(getPopulationSum);
    });

    afterEach(function () {
      getPopulationSum.reset();
      Array.prototype.reduce.reset();
    });

    after(function () {
      getPopulationSum = original;
      Array.prototype.reduce.restore();
    });

    it("should be a function", function () {
      expect(getPopulationSum).to.be.a("function");
    });

    it("should use the javascript reduce method", function () {
      getPopulationSum(populationData);
      expect(Array.prototype.reduce.called).to.equal(true);
    });

    it("should return a number", function () {
      expect(getPopulationSum(populationData)).to.be.a("number");
    });

    it("should return the sum of populations from all cities in the given list except Waco", function () {
      expect(getPopulationSum(populationData)).to.equal(1097364);
    });
  });

  describe("getDogNamesOnly", function () {
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

    before(function () {
      sinon.spy(Array.prototype, "reduce");
      original = getDogNamesOnly;
      getDogNamesOnly = sinon.spy(getDogNamesOnly);
    });

    afterEach(function () {
      getDogNamesOnly.reset();
      Array.prototype.reduce.reset();
    });

    after(function () {
      getDogNamesOnly = original;
      Array.prototype.reduce.restore();
    });

    it("should be a function", function () {
      expect(getDogNamesOnly).to.be.a("function");
    });

    it("should use the javascript reduce method", function () {
      getDogNamesOnly(dogData);
      expect(Array.prototype.reduce.called).to.equal(true);
    });

    it("should return an array", function () {
      expect(getDogNamesOnly(dogData)).to.be.a("array");
    });

    it("should return an array of dog names from the given array of objects", function () {
      expect(getDogNamesOnly(dogData)).to.eql([
        "Tucker",
        "Spot",
        "Waffles",
        "Sheldon",
      ]);
    });
  });

  describe("flattenArray", function () {
    var nestedArray = [
      [0, 1],
      [2, 3],
      [4, 5],
    ];

    before(function () {
      sinon.spy(Array.prototype, "reduce");
      original = flattenArray;
      flattenArray = sinon.spy(flattenArray);
    });

    afterEach(function () {
      flattenArray.reset();
      Array.prototype.reduce.reset();
    });

    after(function () {
      flattenArray = original;
      Array.prototype.reduce.restore();
    });

    it("should be a function", function () {
      expect(flattenArray).to.be.a("function");
    });

    it("should use the javascript reduce method", function () {
      flattenArray(nestedArray);
      expect(Array.prototype.reduce.called).to.equal(true);
    });

    it("should return an array", function () {
      expect(flattenArray(nestedArray)).to.be.a("array");
    });

    it("should return a flattened array from a nested array", function () {
      expect(flattenArray(nestedArray)).to.eql([0, 1, 2, 3, 4, 5]);
    });
  });
})();
