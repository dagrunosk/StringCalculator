//calculator.test.js

const Add = require('./calculator');

it("should return zero on an empty string", () => {
	expect(Add("")).toBe(0);
});

it ("should return number when only one number is in the string", () => {
	expect(Add("5")).toBe(5);
});

