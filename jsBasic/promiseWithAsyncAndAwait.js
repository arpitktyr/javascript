const doAsyncTask = () => Promise.resolve("Task completed");

//used IIFE (Immediate invoked function Expression) ((val)=>{})()

// .then pattern is not blocking the code
//but when we use async / await pattern then it wait untill the promise is resolved or rejected

(() => {
  doAsyncTask().then((val) => console.log(`from first method : ${val}`));
  console.log("does not blocking the code");
})();

//async function expression

let asyncFunction = async function () {
  try {
    const result = await doAsyncTask();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

asyncFunction();

//Promises all

const doAsyncLazyTask = (delay) => {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    });
};

// promises all take a array of promises
// and execute them in parallel and return a promise that resolves with an array of results.

let tasks = [
  doAsyncLazyTask(1000),
  doAsyncLazyTask(2000),
  doAsyncLazyTask(3000),
  doAsyncLazyTask(4000),
];

(async () => {
  for (let task of tasks) {
    console.log(await task());
  }
})();
// when you are using async await it is taking more time
