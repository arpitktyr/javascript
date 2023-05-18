let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth()).padStart(2, "0");
let yyyy = today.getFullYear();
let curDate = dd + "/" + mm + "/" + yyyy;
console.log(curDate);

// comparing dates in js

let today2 = new Date(today);
console.log(today2 === today); // false but date are same wrong result we cant compare like this
console.log(today2.getTime() === today.getTime()); // true - right way to do this
console.log(today2.getTime());

// checking- two value same or not using objects
console.log(Object.is("hello", "hello")); // true
//Object.is(window, window); // true
console.log(Object.is([], [])); // false
