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

cardsContent.forEach((card) => {
  const newCard = createQuestionCard(card.question, card.answer, card.tag);
  cardContainer.append(newCard);
});
