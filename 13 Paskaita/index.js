//console.log(parseInt("ffff", 16));

// function myDisplayer(something) {
// 	document.getElementById("demo").textContent = something;
// }

// function consoleLogger(something) {
// 	console.log(something);
// }

// function myCalculator(num1, num2, myCallback) {
// 	let sum = num1 + num2;
// 	myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);
// myCalculator(5, 5, consoleLogger);

// let array = ["BMW", "AUDI", "MERCEDES"];

array.forEach((value) => {
	console.log(value);
});

// console.log(array.indexOf("AUDI"));

// console.log(array.find((value) => value === "AUDI"));

// let array2 = [1, 1, 1, 2, 2, 1, 1];

// console.log(array2.filter((value) => value === 1));

// let array3 = ["Bilbo", "Gandalf", "Nazgul"];

// console.log(array3);

// console.log(array3.map((value) => value.length));\

let arr = [1, 15, 50, -2, 1, 500, 42, 2];

console.log(
	arr.sort((pirmasElementas, antrasElementas) => {
		return pirmasElementas - antrasElementas;
	})
);

let array = ["BMW", "AUDI", "MERCEDES"];

console.log(arr.every((a) => a > 0));
