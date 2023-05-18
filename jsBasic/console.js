const parent = {
  sayHello() {
    console.log("Hello From Preant");
  },
};

const user = { name: "John", id: 1, city: "Delhee" };

user.__proto__ = parent;

user.sayHello();
//The console.dir() is used to display an interactive list
// of the properties of the specified JavaScript object as JSON.
//try in broswer console
console.dir(user);

{
  const users = [
    { name: "John", id: 1, city: "Delhi" },
    { name: "Max", id: 2, city: "London" },
    { name: "Rod", id: 3, city: "Paris" },
  ];
  console.table(users);
}
//==================================//
