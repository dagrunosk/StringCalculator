//calculator.test.js

const Add = require('./calculator');

it("should return zero on an empty string", () => {
	expect(Add("")).toBe(0);
});

it ("should return number when only one number is in the string", () => {
	expect(Add("5")).toBe(5);
});


it ("should return sum of two given numbers", () => {
	expect(Add("1,2")).toBe(3);
});

it ("should summerize multiple numbers", () => {
	expect(Add("1,2,3")).toBe(6);
});
