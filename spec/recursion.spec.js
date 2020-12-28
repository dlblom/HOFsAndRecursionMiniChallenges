(function () {
  "use-strict";

  //notice that describe itself is a higher order function. The
  describe("Recursion Practice", function () {
    describe("factorial", function () {
      before(function () {
        original = factorial;
        factorial = sinon.spy(factorial);
      });

      afterEach(function () {
        factorial.reset();
      });

      after(function () {
        factorial = original;
      });

      it("should return a number", function () {
        expect(factorial(5)).to.be.a("number");
      });

      it("should return factorial for non-negative integers", function () {
        expect(factorial(0)).to.equal(1);
        expect(factorial(1)).to.equal(1);
        expect(factorial(4)).to.equal(24);
        expect(factorial(5)).to.equal(120);
      });

      it("should use recursion by calling self", function () {
        factorial(4);
        expect(factorial.callCount).to.be.above(1);
      });

      it("should be invoked with one argument", function () {
        factorial(4);
        factorial.args.forEach((arg) => {
          expect(arg).to.have.length(1);
        });
      });
    });

    describe("sumRange", function () {
      before(function () {
        original = sumRange;
        sumRange = sinon.spy(sumRange);
      });

      afterEach(function () {
        sumRange.reset();
      });

      after(function () {
        sumRange = original;
      });

      it("should return a number", function () {
        expect(sumRange(5)).to.be.a("number");
      });

      it("should return the sum of a range of numbers from 1 to n", function () {
        expect(sumRange(1)).to.equal(1);
        expect(sumRange(2)).to.equal(3);
        expect(sumRange(4)).to.equal(10);
        expect(sumRange(5)).to.equal(15);
      });

      it("should use recursion by calling self", function () {
        sumRange(4);
        expect(sumRange.callCount).to.be.above(1);
      });

      it("should be invoked with one argument", function () {
        sumRange(4);
        sumRange.args.forEach((arg) => {
          expect(arg).to.have.length(1);
        });
      });
    });

    describe("flattenNestedArray", function () {
      before(function () {
        original = flattenNestedArray;
        flattenNestedArray = sinon.spy(flattenNestedArray);
      });

      afterEach(function () {
        flattenNestedArray.reset();
      });

      after(function () {
        flattenNestedArray = original;
      });

      it("should return an array", function () {
        expect(flattenNestedArray([[1], 2])).to.be.a("array");
      });

      it("should return a flattened array from a nested array", function () {
        expect(flattenNestedArray([[1], 2])).to.eql([1, 2]);
      });

      it("should use recursion by calling self", function () {
        flattenNestedArray([[1], 2]);
        expect(flattenNestedArray.callCount).to.be.above(1);
      });

      it("should be invoked with one argument", function () {
        flattenNestedArray([[1], 2]);
        flattenNestedArray.args.forEach((arg) => {
          expect(arg).to.have.length(1);
        });
      });
    });

    describe("getEvens", function () {
      before(function () {
        original = getEvens;
        getEvens = sinon.spy(getEvens);
      });

      afterEach(function () {
        getEvens.reset();
      });

      after(function () {
        getEvens = original;
      });

      it("should return an array", function () {
        expect(getEvens([1, 2, 3, 4])).to.be.a("array");
      });

      it("should return an array of even numbers", function () {
        expect(getEvens([1, 2, 3, 4])).to.eql([2, 4]);
      });

      it("should use recursion by calling self", function () {
        getEvens([1, 2, 3, 4]);
        expect(getEvens.callCount).to.be.above(1);
      });
    });

    describe("getActiveItems", function () {
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

      before(function () {
        original = getActiveItems;
        getActiveItems = sinon.spy(getActiveItems);
      });

      afterEach(function () {
        getActiveItems.reset();
      });

      after(function () {
        getActiveItems = original;
      });

      it("should return an array", function () {
        expect(getActiveItems(backyardData)).to.be.a("array");
      });

      it("should return an array of active item names", function () {
        expect(getActiveItems(backyardData)).to.eql([
          "Vacuum",
          "Pump",
          "Chair",
          "Plant",
        ]);
      });

      it("should use recursion by calling self", function () {
        getActiveItems(backyardData);
        expect(getActiveItems.callCount).to.be.above(1);
      });

      it("should be invoked with one argument", function () {
        getActiveItems(backyardData);
        getActiveItems.args.forEach((arg) => {
          expect(arg).to.have.length(1);
        });
      });
    });
  });
})();
