
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return 'Hi!' + this.name + '!';
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` their major is ${this.major} `;
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I'm from visiting from ${this.homeLocation}`;
        }
        return greeting;
    }

}

const me = new  Student('Andrew Mead', 26, 'Computer Sience');
console.log(me);
console.log(me.getDescription());

const andrew = new Traveler('Andrw Meat', 62, 'LaLa-Land');
console.log(andrew.getGreeting());

const andrew2 = new Traveler('Andrw Meat', 62);
console.log(andrew2.getGreeting());