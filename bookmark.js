import createQuestionCard from "./components/cards.js";

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
