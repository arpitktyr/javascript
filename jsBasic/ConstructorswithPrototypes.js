"use strict";
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

Person.prototype.fullName_prototype = function () {
  return this.firstName + " " + this.lastName;
};

let dude = new Person("aman", "katiyar");
console.log(dude.fullName());

console.log(dude.fullName_prototype());

//----------------------------------------------------------------//

//A single instance of fullName_prototype() will now be shared between all person objects.
//prototype is good for memory consumption;
//because instances for fullName() method will depend on
//how much objects you will create with Person Constructor.

function Man(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Man.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
function Professional(honorific, firstName, lastName) {
  Man.call(this, firstName, lastName);
  this.honorific = honorific;
}
//below is magic line - by this we can call the fullName() method with Professional Object;
Professional.prototype = Object.create(Man.prototype);

Professional.prototype.professional_name = function () {
  return this.honorific + ", " + this.firstName + " " + this.lastName;
};
var prof = new Professional("Er", "Aman", "Ktyr");
console.log(prof.professional_name());
console.log(prof.fullName()); //Professional.prototype = Object.create(Man.prototype);

//----------------------------------------------------------------
let car = {
  modelName: function () {
    return this.carName + " " + this.year;
  },
};

let fordCar = Object.create(car, {
  carName: { value: "Ford_model" },
  year: { value: 2022 },
});

console.log(fordCar.modelName());

const newPrototype = { a: "1212" };
const newObject = Object.create(newPrototype);

console.log(Object.getPrototypeOf(newObject) === newPrototype); // true
