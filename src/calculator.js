//calculator.js

function Add(numbers)
{
	if (numbers == "")
	{	
		return 0;
	}
	
	this.number = numbers;
	numbers = this.number.replace(/(\r\n|\n|\r)/gm, ",");

	if (this.number.includes("-"))
	{
		var numberArray = numbers.split(",");
		return NegativeNumbers(numberArray);
	}

	if (numbers.includes(","))
	{
		var numberArray = numbers.split(",");
		return Sum(numberArray);
	}

	else if (numbers.length == 1)
	{
		return parseInt(numbers);
	}
}

function Sum(numberArray)
{
	var total = 0

	for (var i = 0; i < numberArray.length; i++)
	{
		total += parseInt(numberArray[i]);
	}

	return total;
}

function NegativeNumbers(numberArray)
{
	var negativeArray = [];
	var errorMessage = "Negatives not allowed: ";

	for (var i = 0; i < numberArray.length; i++)
	{
		if (numberArray[i] < 0)
		{
			negativeArray.push(numberArray[i]);

		}
	}

	for (var i = 0; i < negativeArray.length; i++)
	{
		errorMessage += negativeArray[i];
		if (i != negativeArray.length - 1)
		{
			errorMessage += ",";

		}
	}

	throw errorMessage;
}

module.exports = Add;
