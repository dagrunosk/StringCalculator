//calculator.js

function Add(numbers)
{
	if (numbers == "")
	{
		return 0;
	}

	if (numbers.includes(","))
	{
		var numberArray = numbers.split(",");
		return Sum(numberArray);
	}

	else
	{
		return parseInt(numbers);
	}

}

function Sum(numberArray)
{
	var total = 0;
	for (var i = 0; i < numberArray.length; i++)
	{
		total += parseInt(numberArray[i]);
	}
	return total;
}
	
module.exports = Add;
