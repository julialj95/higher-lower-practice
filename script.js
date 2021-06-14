// let maxNumber = prompt("Select a maximum number for the guessing game.");

// let randomNum = Math.floor(Math.random() * getMax(Math.round(maxNumber))) + 1;
// console.log(randomNum);
let maxNumber;
let roundedMax;
let tries = [];

function getMax() {
  maxNumber = prompt("Select a maximum number for the guessing game.");

  while (maxNumber <= 0 || isNaN(maxNumber)) {
    console.log("in while clause");
    maxNumber = prompt(
      "Try again. Please enter a positive number to be the maximum in the guessing game."
    );
  }
  // if (maxNumber <= 0) {
  //   maxNumber = prompt(
  //     "Please enter a positive number to be the maximum in the guessing game."
  //   );
  // } else if (isNaN(maxNumber)) {
  //   maxNumber = prompt(
  //     "Invalid data type. Please enter a number to be the maximum in the guessing game."
  //   );
  console.log(maxNumber);
  console.log(isNaN(maxNumber));
  displayMax(maxNumber);
}

function displayMax(maxNumber) {
  roundedMax = Math.round(maxNumber);
  document.getElementById(
    "title"
  ).innerHTML = `Guess a number between 1 and ${roundedMax}`;
  return roundedMax;
}

function guess() {
  console.log("calling guess function");
  let randomNum =
    Math.floor(Math.random() * getMax(Math.round(roundedMax))) + 1;
  console.log("randomNum", randomNum);

  let guess = document.getElementById("guess").value;
  let result = document.getElementById("result");

  findDuplicate(guess);

  if (isNaN(guess)) {
    result.innerHTML = "That is not a number!";
  } else if (guess > getMax(maxNumber) || guess < 1) {
    result.innerHTML = "That number is out of range.";
  } else if (randomNum == guess) {
    tries.push(guess);
    result.innerHTML = `You got it! It took ${
      tries.length
    } tries and your guess were ${displayGuesses(tries)}`;
  } else if (randomNum > guess) {
    result.innerHTML = "No, try a higher number.";
    tries.push(guess);
  } else {
    result.innerHTML = "No, try a lower number.";
    tries.push(guess);
  }
}

function findDuplicate(guess) {
  console.log("calling findDuplicate");
  let duplicate = tries.find((number) => number === guess);

  if (duplicate !== undefined) {
    result.innerHTML = `You already guessed ${guess}!`;
    return;
  }
}

function displayGuesses(tries) {
  console.log("callingDisplayGuesses");
  return tries.join(", ") + ".";
}

getMax();
