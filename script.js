let maxNumber;
let roundedMax;
let tries = [];
let randomNum;

function getMax() {
  maxNumber = prompt("Select a maximum number for the guessing game.");
  while (maxNumber <= 0 || isNaN(maxNumber)) {
    if (maxNumber <= 0) {
      maxNumber = prompt(
        "Try again. Please enter a positive number to be the maximum in the guessing game."
      );
    } else if (isNaN(maxNumber)) {
      maxNumber = prompt(
        "Invalid data type. Please enter a number to be the maximum in the guessing game."
      );
    }
  }
  roundedMax = Math.round(maxNumber);
  displayMax(roundedMax);
  getRandomNum(roundedMax);
}

function displayMax(roundedMax) {
  document.getElementById(
    "title"
  ).innerHTML = `Guess a number between 1 and ${roundedMax}`;
  return;
}

function getRandomNum(roundedMax) {
  randomNum = Math.floor(Math.random() * roundedMax) + 1;
}

function guess() {
  let guess = document.getElementById("guess").value;
  let result = document.getElementById("result");

  let duplicate = tries.find((number) => number === guess);

  if (duplicate !== undefined) {
    result.innerHTML = `You already guessed ${guess}!`;
    return;
  }

  if (isNaN(guess)) {
    result.innerHTML = "That is not a number!";
  } else if (guess > roundedMax || guess < 1) {
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

function displayGuesses(tries) {
  return tries.join(", ") + ".";
}

getMax();
