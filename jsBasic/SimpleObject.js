const object = {
  a: "Good morning",
  b: 100,
};

console.log(Object.keys(object)); //['a', 'b']
console.log(Object.values(object)); //['Good morning', '100']

//using for of loop
for (let value of Object.values(object)) {
  console.log(`${value}`);
}

//using for in loop best for access objects
for (let key in object) {
  console.log(`${key} -> ${object[key]}`);
}

//using for of loop with Object.entries ( It return key and values)
for (let [key, value] of Object.entries(object)) {
  console.log(`${key} => ${value}`);
}
