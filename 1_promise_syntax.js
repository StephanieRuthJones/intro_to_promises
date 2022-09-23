//Syntax
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
promiseToTeachYouPromises
  .then((resultOfPromise) => {
    //do this when it succeeds
    console.log("The result of promiseToTeachYouPromises is ", resultOfPromise);
  })
  .catch((error) => {
    //do this when it fails
    console.error(error);
  });
