let numbers = [1, 2, 3, 4, 5, 6, 10, 7, 9, 12, 11];
let SortedArray = numbers.reverse();

console.log(...SortedArray); //both are same
console.log(...numbers);
console.log(Math.min(...numbers));

//comma operator
//It is normally used to include multiple expressions in a location that requires a single expression.
// One of the common usages of this comma operator is to supply multiple parameters in a for loop.

var x = 1;
x = (x++, x);

console.log(x); // 2
