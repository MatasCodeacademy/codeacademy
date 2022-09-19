// const numb = [1, 2, 4, 5];
// const numb2 = [1, 2, 2, 2, 2, 2, 4, 5];

// function rastiSkaiciu(masyvas) {
// 	return masyvas.find((value) => value === 2);
// }

// console.log(rastiSkaiciu(numb));

// alert("Skaiciu suma:" + sudetiSkaicius(numb2));

// function sudetiSkaicius(masyvas) {
// 	return masyvas.reduce();
// }

// function VardasPavarde(vardas, pavarde) {
// 	this.vardas = vardas;
// 	this.pavarde = pavarde;
// 	this.koksTavoVardas = function () {
// 		console.log("Vardas: " + this.vardas + ", Pavarde: " + this.pavarde);
// 	};
// }

// let matasKalina = new VardasPavarde("Matas", "Kalina");

// matasKalina.amzius = 20;

// class Person {
// 	constructor(vardasParam, pavardeParam, amziusParam) {
// 		this.vardas = "JONAS";
// 		this.pavarde = pavardeParam;
// 		this.amzius = amziusParam;
// 	}
// }

function Person(vardasParam, pavardeParam, amziusParam) {
	this.vardas = vardasParam;
	this.pavarde = pavardeParam;
	this.amzius = amziusParam;

	// let amzius2 = 50;

	this.introduceYourself = function () {
		console.log(
			"I am " +
				this.vardas +
				" " +
				this.pavarde +
				". I am " +
				this.amzius +
				" years old"
		);
		console.log();
	};

	// function calculateDifference() {
	// 	let difference = amziusParam - isdestytaslaikasParam;
	// 	return difference;
	// }
}

function Professor(
	vardasParam,
	pavardeParam,
	amziusParam,
	isdestytaslaikasParam
) {
	Person.call(this, vardasParam, pavardeParam, amziusParam);
	this.isdestytasLaikas = isdestytaslaikasParam;
}

let matasKalina = new Person("Matas", "Kalina", 50);
let jonasJonaitis = new Professor("Jonas", "Jonaitis", 60, 25);

// class Professor extends Person {
// 	constructor(vardasParam, pavardeParam, amziusParam, isdestytiMetaiParam) {
// 		super(vardasParam, pavardeParam, amziusParam);
// 		this.isdestytiMetai = isdestytiMetaiParam;
// 	}

// 	introduceYourself() {
// 		console.log(
// 			"I am " +
// 				this.vardas +
// 				" " +
// 				this.pavarde +
// 				". I am " +
// 				this.amzius +
// 				" years old."
// 		);
// 	}
// }

// let profesorius = new Professor("Jonas", "Jonaitis", 30, 5);

// 	koksTavoVardas() {
// 		console.log("Vardas: " + this.vardas + ", Pavarde: " + this.pavarde);
// 	}
// }

// const as1 = new VardasPavarde("Matas", "Kalina");
// const as2 = new VardasPavarde2("Matas", "Kalina");

// function isSpaudinkVarda(vardas, pavarde) {
// 	console.log("Vardas: " + vardas + ", Pavarde: " + pavarde);
// }
