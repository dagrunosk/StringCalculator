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

it ("should summerize multiple numbers seperated by comma", () => {
	expect(Add("10,20,30,40,50")).toBe(150);
});

it ("should summerize multiple numbers seperated by newline", () => {
	expect(Add("1\n2,3\n4,5")).toBe(15);
});
