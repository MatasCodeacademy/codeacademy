// class Person {
// 	constructor(name, surname, age) {
// 		this.name = name;
// 		this.surname = surname;
// 		this.age = age;
// 	}

// 	#writeToConsole() {
// 		console.log(
// 			"I am " +
// 				this.name +
// 				" " +
// 				this.surname +
// 				". I am " +
// 				this.age +
// 				" years old. " +
// 				"I play " +
// 				this.sports
// 		);
// 	}

// 	prisistatyk() {
// 		this.#writeToConsole();
// 	}
// }

// class Athlete extends Person {
// 	constructor(name, surname, age, sports) {
// 		super(name, surname, age);
// 		this.sports = sports;
// 	}

// 	kiekTauMetu() {
// 		console.log(this.age);
// 	}

// 	prisistatyk() {
// 		console.log("As esu " + this.name + " " + this.surname);
// 	}

// 	// prisistatyk() {
// 	// 	console.log(
// 	// 		"I am " +
// 	// 			this.name +
// 	// 			" " +
// 	// 			this.surname +
// 	// 			". I am " +
// 	// 			this.age +
// 	// 			" years old. " +
// 	// 			"I play " +
// 	// 			this.sports
// 	// 	);
// 	// }
// }

// class Professor extends Person {}

// class SuperAthlete extends Athlete {
// 	constructor(a, b, c, d) {
// 		super(a, b, c, d);
// 	}

// 	metodas2() {}
// }

// class SuperSuperAthlete extends SuperAthlete {}

// let matas = new Person("Matas", "Kalina");

// let matasAthlete = new Athlete("Matas", "Kalina", 27, "basketball");
// let matasSuperAthlete = new SuperAthlete("Matas", "Kalina", 27, "basketball");

class Character {
	constructor(speed) {
		this.speed = speed;
	}
	move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
}

class Enemy extends Character {
	constructor(name, phrase, power, speed) {
		super(speed);
		this.name = name;
		this.phrase = phrase;
		this.power = power;
	}
	sayPhrase = () => console.log(this.phrase);
	attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}

class Alien extends Enemy {
	constructor(name, phrase, power, speed) {
		super(name, phrase, power, speed);
		this.species = "alien";
	}
	fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
	attack = () => console.log("Now I'm doing a different thing, HA!"); // Override the parent method.
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);
alien1.attack(); // output: "Now I'm doing a different thing, HA!"
