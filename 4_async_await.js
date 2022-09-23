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

