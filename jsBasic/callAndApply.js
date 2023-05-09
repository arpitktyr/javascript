function sayName(na) {
  this.name = na;
}

const person1 = { name: "John" };
const person2 = { name: "Jane" };

sayName.call(person1);
sayName.apply(person2);
