//First, let's look at the code below.
//We have the manageMyTime function that takes in a callback and errorCallback parameter.
//The callback parameter is a function that will be called if the user has enough time.
//The errorCallback parameter is a function that will be called if the user does not have enough time.
//If a user does not have enough time or a user is distracted, the errorCallback will be called.
//We call the manageMyTime function with a callback and errorCallback parameter, then log either the result or the error
const isDistracted = true;
const myTime = 1;
function manageMyTime(callback, errorCallback) {
  if (myTime > 10) {
    callback("I have enough time!");
  } else if (isDistracted) {
    errorCallback("I'm not paying attention!");
  } else {
    errorCallback("I don't have enough time!");
  }
}
manageMyTime(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.error(error);
  }
);

//Now, let's refactor using promises
//1. remove callback and errorCallback parameters because the point of promises is that we no longer have need for callbacks
//2. return a promise, input resolve and reject params
//3. put the logic from the callback and errorCallback into the resolve and reject
//4. call resolve or reject in the if/else statements
//==> replace callback with resolve
//==> replace errorCallback with reject
//5. call manageMyTimePromise() and use .then and .catch to handle the result of the promise
function manageMyTimePromise() {
  return new Promise((resolve, reject) => {
    if (myTime > 10) {
      resolve("I have enough time!");
    } else if (isDistracted) {
      reject("I'm not paying attention!");
    } else {
      reject("I don't have enough time!");
    }
  });
}
//Let's see how we can use the manageMyTimePromise() function
//1. Copy and paste the manageMyTime function from above
//2. We'll update the name of the manageMyTime function to manageMyTimePromise
//3. Then we'll invoke it because we want to get the result of the promise
//4. We'll use .then and .catch to handle the result of the promise
//Now that we're using promises, our code is relatively cleaner and easier to read
//This is the purpose of promises: to avoid callback hell which is nesting callbacks within callbacks
//Using promises flattens the code and makes it easier to read
//Promises give us the ability to write cleaner code but reducing (or entirely removing) call-back hell.
//Something you'll also find is that promises help us by doing automatic error handling.
//They allow errors to be passed down the chain and handled in one common place without having to put in layers of manual error handling.
manageMyTimePromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
