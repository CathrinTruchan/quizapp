const myCard = document.querySelector('[data-js="card"]');
const myButton = document.querySelector('[data-js="button"]');
const myQuestion = document.querySelector('[data-js="question"]');
const myAnswer = document.querySelector('[data-js="answer"]');
const myBookmark = document.querySelector('[data-js="bookmark"]');

// myButton.addEventListener("click", () => {
// myButton.classList.toggle("card__button-hide");
// myQuestion.classList.toggle("card__text--hidden");
// myAnswer.classList.toggle("card__text--hidden");
// myQuestion.classList.toggle("card__text--hidden");
// });

// Funktionalität Card

myButton.addEventListener("click", () => {
  if (myButton.textContent === "Show Answer") {
    myButton.classList.add("card__button-hide");
    myButton.textContent = "Hide Answer";
    myQuestion.classList.add("card__text--hidden");
    myAnswer.classList.remove("card__text--hidden");
  } else {
    myButton.classList.remove("card__button-hide");
    myButton.textContent = "Show Answer";
    myQuestion.classList.remove("card__text--hidden");
    myAnswer.classList.add("card__text--hidden");
  }
});

myBookmark.addEventListener("click", () => {
  myBookmark.classList.toggle("card__bookmark--active");
});
