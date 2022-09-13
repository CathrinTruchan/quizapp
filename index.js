import createQuestionCard from "./components/cards.js";

const cardsContent = [
  {
    question: "Wie heißt Ross Gellers Affe?",
    answer: "Marcel",
    tag: "#Friends",
  },

  {
    question: "In welchem Cafe arbeitet Rachel?",
    answer: "Central Perk",
    tag: "#Friends",
  },

  {
    question: "Wer ist Chandlers Mitbewohner?",
    answer: "Joey Tribbiani",
    tag: "#Friends",
  },

  {
    question: "Wie heißt Pheobes Zwillingsschwester?",
    answer: "Ursula",
    tag: "#Friends",
  },
];

const myButton = document.querySelector('[data-js="button"]');
const myQuestion = document.querySelector('[data-js="question"]');
const myAnswer = document.querySelector('[data-js="answer"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

const newCards = cardsContent.forEach((card) => {
  const singleCard = createQuestionCard(card.question, card.answer, card.tag);
  cardContainer.append(singleCard);
});

// Funktionalität Card
/*
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
}); */
