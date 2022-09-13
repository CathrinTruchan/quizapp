import createQuestionCard from "./components/cards.js";

const myCard = document.querySelector('[data-js="card"]');
const myButton = document.querySelector('[data-js="button"]');
const myQuestion = document.querySelector('[data-js="question"]');
const myAnswer = document.querySelector('[data-js="answer"]');
const myBookmark = document.querySelectorAll('[data-js="bookmark"]');

const cardContainer = document.querySelector('[data-js="card-container"]');

const questionOne = createQuestionCard(
  "Meine erste Frage",
  "Meine erste Anwort",
  "mein erster Tag"
);
cardContainer.append(questionOne);

const questionTwo = createQuestionCard(
  "Meine zweite Frage",
  "Meine zweite Anwort",
  "mein zweiter Tag"
);
cardContainer.append(questionTwo);

const questionThree = createQuestionCard(
  "Meine dritte Frage",
  "Meine dritte Anwort",
  "mein dritter Tag"
);
cardContainer.append(questionThree);

const questionFour = createQuestionCard(
  "Meine vierte Frage",
  "Meine vierte Anwort",
  "mein vierter Tag"
);
cardContainer.append(questionFour);

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

/*
for (const bookmark of myBookmark) {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card__bookmark--active");
  });
} */
