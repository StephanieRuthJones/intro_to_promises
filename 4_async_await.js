//async await are just syntactic sugar over promises
//async await is a way to write asynchronous code that looks synchronous

//Let's take a look at the functions in this file so far
//The timeForDinner function takes in a timeOfDay parameter and returns a promise that resolves or rejects with a string
//The handleTimeForDinner function takes in a result parameter
//and returns a promise that resolves or rejects with a string

//first, let's call this code using promise chaining methods
//then, we will refactor using async...await syntax

function timeForDinner(timeOfDay) {
  return new Promise((resolve, reject) => {
    if (timeOfDay >= 18) {
      resolve("Time for dinner!");
    } else {
      reject("Sorry, you'll have to stay hungry!");
    }
  });
}

function handleTimeForDinner(result) {
  return new Promise((resolve, reject) => {
    if (result === "Time for dinner!") {
      resolve("I'm hungry!");
    } else {
      reject("I'm not hungry anyway!");
    }
  });
}
//1. call the timeForDinner function with a timeOfDay parameter of 19
//2. call the .then method on the promise returned by timeForDinner
//3. pass in a callback function that takes in a result parameter
//4. let's console log the result parameter so we can see it when it runs
//5. after that, we'll call the handleTimeForDinner function with the result parameter
//=> we will return the handleTimeForDinner function call so that we can pass it to another .then method
//6. call a .catch method on the promise returned by handleTimeForDinner so we can catch any errors
timeForDinner(18)
  .then((result) => {
    console.log("The result of timeForDinner is ", result);
    return handleTimeForDinner(result);
  })
  .then((handledResult) => {
    console.log(handledResult);
  })
  .catch((error) => {
    console.error(error);
  });

//refactor using async...await and try...catch syntax to make it easier to read
//1. create an async function called asyncTimeForDinner
//2. remove the return keyword from the timeForDinner function
async function asyncTimeForDinner() {
  try {
    //3. call the timeForDinner function with a timeOfDay parameter of 19
    //4. await the result of the timeForDinner function
    //5. let's console log the result parameter so we can see it when it runs
    //6. after that, we'll call the handleTimeForDinner function with the result parameter
    //=> we will return the handleTimeForDinner function call so that we can pass it to another .then method
    //7. await the result of the handleTimeForDinner function
    //8. console log the result of the handleTimeForDinner function

    //once js reaches the await keyword, it will wait for this function to finish before moving on to the next line
    //and it will continue running other functions in the meantime
    //once the function finishes, it will return the result of the timeForDinner function
    //and js will continue running the rest of the code in this function
    const result = await timeForDinner(19);
    console.log("The result of timeForDinner is ", result);
    const handledResult = await handleTimeForDinner(result);
    console.log(handledResult);
  } catch (error) {
    //9. call a .catch method on the promise returned by handleTimeForDinner so we can catch any errors
    console.error(error);
  }
}
//10. call the asyncTimeForDinner function
asyncTimeForDinner();
