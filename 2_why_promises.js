const userDistracted = true;
const myTime = 1;
function manageMyTime(callback, errorCallback) {
  if (myTime > 10) {
    callback("I have enough time!");
  } else if (userDistracted) {
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
