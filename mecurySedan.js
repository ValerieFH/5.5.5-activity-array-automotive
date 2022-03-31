//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 6;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.needMaintenance = false;
    }

    loadPassenger(num) {
        if ((this.passenger + num) < this.maximumPassengers){
            this.passenger += num;
            console.log(`Passenger(s) loaded. ${this.maximumPassengers - this.passenger} spots remaining.`);
            return this.availableRoom = true;
        } else {
            console.log("The car is full!")
            return this.availableRoom = false;
        }
    }

    scheduleService(mileage){
        if (mileage > 30000){
            return this.needMaintenance = true;
        }
    }

}

let testCar = new Car("Mercury", "A28 Sedan", 2022, "black", 0);

//testing loadPassenger method

// console.log(testCar.passenger)
// testCar.loadPassenger(2)
// console.log(testCar.passenger)

//Test for start method and fuel reduction

// testCar.start()
// testCar.accelerate()
// console.log(testCar.fuel)
// console.log(testCar.started)

//testing scheduleService function

console.log(testCar.needMaintenance)
console.log(testCar.mileage)
testCar.scheduleService(testCar.mileage)
console.log(testCar.needMaintenance)

testCar.mileage = 40000
console.log(testCar.mileage)
testCar.scheduleService(testCar.mileage)
console.log(testCar.needMaintenance)
