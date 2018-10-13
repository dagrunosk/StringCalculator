//calculator.js

function Add(numbers)
{
	if (numbers == "")
	{	
		return 0;
	}
	
	this.number = numbers;
	numbers = this.number.replace(/(\r\n|\n|\r)/gm, ",");

	if (numbers.startsWith("//"))
	{

		CustomDelimiter(numbers);

		var numberArray = numbers.substring(numbers.indexOf("\n") + 1);
		return Sum(numberArray);
	}
		
	if (numbers.includes("-"))
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
		if (numberArray[i] <= 1000)
		{
			total += parseInt(numberArray[i]);
		}
	}

	return total;
}

function NegativeNumbers(numberArray)
{
	var negativeArray = [];

	for (var i = 0; i < numberArray.length; i++)
	{
		if (numberArray[i] < 0)
		{
			negativeArray.push(numberArray[i]);

		}
	}

	ErrorMessage(negativeArray);
}

function ErrorMessage(negativeArray)
{
	var errorMessage = "Negatives not allowed: ";
	
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

function CustomDelimiter(numberArray)
{
	
	var newLineIndex = numberArray.indexOf("\n");
	var customDelimiter = numberArray.substring(2, newLineIndex);
	var delimitersInArray = Promise.reject(customDelimiter.split(/[\[\]]/), function (d) {
		return d === "";
	});

}

module.exports = Add;
