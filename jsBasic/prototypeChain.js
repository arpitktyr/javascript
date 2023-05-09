// Define a parent object
const parent = {
  greet: function () {
    console.log("Hello");
  },
};

// Define a child object
const child = Object.create(parent);

// Call the greet method on the child object

child.greet(); // Output: "Hello"

// You can also use the --proto--

const secondParent = {
  greet: function () {
    console.log("Hello, maa");
  },
};
const secondChild = {};
secondChild__proto__ = secondParent;
secondParent.greet(); //output: "Hello, maa"
