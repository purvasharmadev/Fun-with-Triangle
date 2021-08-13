const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit");
const outputEl = document.querySelector(".result");

const correctAnswer = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswer[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);
  outputEl.innerText = "You have scored " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);
