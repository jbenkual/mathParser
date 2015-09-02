var string = "4 - 3 - 8 * 2 * 1 + 100  / 4"; 
console.log(string);

var regDiv = /\s*-?\d+\s*\/\s*-?\d+/g;
var regMult = /\s*-?\d+\s*\*\s*-?\d+/g;
var regAdd = /\s*-?\d+\s*\+\s*-?\d+/g;
var plusNeg = /-\d+/g; // convert subtract to adding negative instead

var result = string.replace(/ /g, "");

result = result.replace(plusNeg, function(str) { 
	return "+" + str
});

function multiply(x, y) { return x * y};
function add(x, y) { return x + y};
function divide (x, y) { return x / y};

function evaluate(input, symbol, regex, func) {
	while(input.indexOf(symbol) != -1) {
		input = input.replace(regex, 
			function(str) {
				str.replace(/ /g, '');
				var arr = str.split(symbol);
				return func(parseInt(arr[0]) , parseInt(arr[1]));
			}
		);
	}
	return input;
}

result = evaluate(result, "/", regDiv, divide);
result = evaluate(result, "*", regMult, multiply);
result = evaluate(result, "+", regAdd, add);
console.log(result);