//Syntax
// Let’s see what a promise looks like. 

// - First we declare a variable called `promiseToTeachYouPromises`.
// - We assign the `promiseToTeachYouPromises` variable to the promise object which
//     - takes in a function
//     - the function inside the promise object takes in two parameters: `resolve` and `reject`
//     - inside the body of the function passed to the promise object, we define what the promise is
// - First, we’ll define the variable `stephTaughtPromises` and set it to `true`
// - Then we’ll write an `if condition` so that the promise `resolves` if I keep my promise and `rejects` if I do not
//     - can pass anything you want to the resolve and reject methods
const promiseToTeachYouPromises = new Promise((resolve, reject) => {
  let stephTaughtPromises = false;
  if (stephTaughtPromises) {
    //tell the promise what to do when it succeeds

    resolve("Steph taught me promises!"); //can pass whatever you want
  } else {
    //tell the promise what to do when it fails

    reject("Steph did NOT teach me promises!"); //can pass whatever you want
  }
});
//Use
// Let’s look at how we use promises. When we consume a promise, we use callback functions for the fulfilled and rejected states of that promise.

// - We will call the `promiseToTeachYouPromises` function which returns a promise
// - We will use the `.then()` method which takes in the result of the promise before it, then returns a promise
// - In case the original promise is rejected, we will use the `.catch()` method to catch that error.
// - Using the `.then` and `.catch` methods in tandem is called `promise chaining`
promiseToTeachYouPromises
  .then((resultOfPromise) => {
    //do this when it succeeds
    console.log("The result of promiseToTeachYouPromises is ", resultOfPromise);
  })
  .catch((error) => {
    //do this when it fails
    console.error(error);
  });

//   **Comprehension Questions:** 

// 1. What is a promise?
// 2. What are the three states of a promise?
// 3. What does the `then` method do?
// 4. What does the `catch` method do?