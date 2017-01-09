var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert("Add:" + add(number1, number2));
alert("Subtract:" + subtract(number1, number2));
alert("Multiply:" + multiply(number1, number2));
alert("Divide:" + divide(number1, number2));
