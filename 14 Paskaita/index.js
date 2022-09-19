let people = [
	{
		name: "petras",
		age: 18,
	},
	{
		name: "Jonas",
		age: 15,
	},
	{
		name: "antanas",
		age: 21,
	},
	{
		name: "Urtė",
		age: 10,
	},
	{
		name: "Diana",
		age: 25,
	},
	{
		name: "Ieva",
		age: 16,
	},
];

let numbers = [1, 1, 1, 1, 1];

let reducedNumbers = numbers.sort((total, currentItem) => {
	return total + currentItem;
});

people.sort();
let peopleAgeSum = people.reduce((total, currentItem) => {
	return total + currentItem.age;
}, 0);

console.log(peopleAgeSum);

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

let carNumber = cars.reduce((total, currentItem) => {
	if (currentItem.length <= 3) {
		return total + 1;
	}
	return total;
}, 0);

console.log(carNumber);

// let peopleOverTwenty = people.filter((item) => item.age > 20);
// let peopleUnderTwenty = people.filter((item) => item.age <= 20);

// people.sort((item1, item2) => {
// 	return item1.age - item2.age;
// });

peopleOverTwenty.sort((item1, item2) => {
	return item1.age - item2.age;
});

// peopleUnderTwenty.sort((item1, item2) => {
// 	return item1.age - item2.age;
// });

// let peopleNew = peopleOverTwenty.concat(peopleUnderTwenty);

// console.log(peopleNew);
// console.log(people);
