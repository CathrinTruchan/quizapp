import createQuestionCard from "./components/cards.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

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
];

const newCards = cardsContent.forEach((card) => {
  const singleCard = createQuestionCard(card.question, card.answer, card.tag);
  cardContainer.append(singleCard);
});
