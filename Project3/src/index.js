const basicForm = document.querySelector("#basic-form");
const limit = document.querySelector("#limit");
const guess = document.querySelector("#guess");
const answerMsg = document.querySelector("#answerMsg");
const resultMsg = document.querySelector("#resultMsg");

function playFun(event) {
  event.preventDefault();
  const answer = Math.floor(Math.random() * (parseInt(limit.value) + 1));
  console.log(answer);
  answerMsg.classList.remove("hidden");
  resultMsg.classList.remove("hidden");
  answerMsg.innerText = `You chose: ${guess.value}, the machine chose: ${answer}`;
  if (parseInt(guess.value) === answer) {
    resultMsg.innerText = "You won!";
  } else {
    resultMsg.innerText = "You lost!";
  }
  console.log(resultMsg);
}

basicForm.addEventListener("submit", playFun);