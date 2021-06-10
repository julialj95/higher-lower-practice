function guess() {
  let guess = document.getElementById("guess").value;
  let randomNum = Math.floor(Math.random() * 20) + 1;

  let result = document.getElementById("result");

  if (randomNum == guess) {
    result.innerHTML = "You got it!";
  } else if (randomNum > guess) {
    result.innerHTML = "No, try a higher number.";
  } else {
    result.innerHTML = "No, try a lower number.";
  }
}
