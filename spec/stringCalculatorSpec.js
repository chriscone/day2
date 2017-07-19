var StringCalculator = require("../app/stringCalculator.js");
describe("StringCalculator", function() {
  var stringCalculator;

  beforeEach(function() {
    stringCalculator = new StringCalculator();
  });

  it("should return 0 for an empty string", function() {
    expect(stringCalculator.add("")).toEqual(0);
  });

});
