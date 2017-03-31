class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
  }

  greet() {
  	return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

console.log("check value: ", greeter.greeting);
console.log("check method: ", greeter.greet());

//Class Types
interface ICar {  
    horsePower: number;
    drive(speed: number): void;
}

class Vehicle implements ICar {  
    horsePower: number;

    constructor() {
        console.log('inside the vehicle constructor');
    }

    drive(speed: number): void {
        console.log('driving ' + speed + ' miles per hour');
    }
}

function driveFast(car: ICar): void {  
    car.drive(100);
}

let raceCar = new Vehicle();  
driveFast(raceCar);  

//Extending Class
interface IFamilyCar extends ICar {  
    numPhoneChargers: number;
}

function driveFamily(car: IFamilyCar): void {  
    console.log('horsepower: ' + car.horsePower + ', chargers: ' + car.numPhoneChargers);
}

let sedan: IFamilyCar = <IFamilyCar>{  
    horsePower: 150,
    numPhoneChargers: 4
}

driveFamily(sedan);  

//Hybrid Types
interface Counter {  
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {  
    let counter: Counter = <Counter>function(start:number): string {
        console.log('in the counter function');
        return 'done';
    };
    counter.interval = 123;
    counter.reset = function(){ console.log('in the reset function'); };
    return counter;
}

let c: Counter = getCounter();  
c(10);  
c.reset();  
c.interval = 5.0;  