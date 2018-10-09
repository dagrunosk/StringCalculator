//calculator.test.js

const Add = require('./calculator');

it("should return zero on an empty string", () => {
	expect(Add("")).toBe(0);
});

