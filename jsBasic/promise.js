function doAsyncTask() {
  const proObj = new Promise((resolve, reject) => {
    console.log("inside promice");
    if (false) resolve();
    else reject("reject testing");
  });
  return proObj;
}

doAsyncTask().then(
  () => {
    console.log("this is success Handler");
  },
  (err) => {
    console.log(`inside second function which is reserved for error`);
    console.log(err);
  }
);

// You can use second function of then (success, error)for error handling
// or you can use catch block after then

function doAsyncTask2() {
  return Promise.resolve();
  //return Promise.reject();
}

doAsyncTask2()
  .then(() => {
    console.log("This is a Promise Success");
  })
  .catch((err) => {
    console.log(`inside catch blcock`);
    console.log(err);
  });

console.log("this will print first then promise callbacks");

//Promise chain example
// Sometimes, you want to execute two or more related asynchronous operations,
// where the next operation starts with the result from the previous step.

Promise.resolve("Done")
  .then((val) => {
    console.log(val);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Done 2");
      }, 1000);
    });
  })
  .then((val2) => {
    console.log(val2);
  });

//Promises all
const doAsyncLazyTask = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};

// promises all take a array of promises
// and execute them in parallel and return a promise that resolves with an array of results.

Promise.all([
  doAsyncLazyTask(1000),
  doAsyncLazyTask(2000),
  doAsyncLazyTask(3000),
  doAsyncLazyTask(4000),
])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });
