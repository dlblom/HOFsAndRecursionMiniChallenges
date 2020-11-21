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
})();
