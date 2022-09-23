//Below are four different promises that resolve

const promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1 resolved!");
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Promise 2 resolved!");
});

const promise3 = new Promise((resolve, reject) => {
  resolve("Promise 3 resolved!");
});

const promise4 = new Promise((resolve, reject) => {
  resolve("Promise 4 resolved!");
});
// *************** Promise.all() *************** //
//Promise.all() takes an array of promises and returns a single promise
//We can use Promise.all() to run all of these promises in parallel
//so we don't have to worry about waiting for one to finish before starting the next one.
//Promise.all() takes an array of promises as an argument and returns a single promise.
//The single promise that is returned will resolve when all of the promises in the array have resolved.
//If any of the promises in the array fail, the single promise that is returned will fail.
//The .then will only run if all of the promises in the array resolve.
//The .then will return an array of the results of each promise in the array.
//The .catch will run if any of the promises in the array fail.
//The .catch will return the error of the first promise that failed.
Promise.all([promise1, promise2, promise3, promise4]) 
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
//all of the promises in the array are running at the exact same time
//so if one promise takes longer than the rest to resolve,  the promises that take less time to resolve will still finish first

// *************** Promise.race() *************** //
//Promise.race() returns as soon as the first promise is completed instead of waiting for them all to resolve
//Therefore, it will return only one result in the .then => change results to result to reflect this difference
Promise.race([promise1, promise2, promise3, promise4])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
//Run this and see result of only one promise