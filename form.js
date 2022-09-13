import createQuestionCard from "./components/cards.js";

// Funktionalität Form

const form = document.querySelector('[data-js="form"]');
const newCardSection = document.querySelector('[data-js="new-cards"]');
const inputQuestion = document.querySelector('[data-js="question"]');
const inputAnswer = document.querySelector('[data-js="answer"]');
const charactersLeftInfoQuestion = document.querySelector(
  '[data-js="characters-left-question"]'
);
const charactersLeftInfoAnswer = document.querySelector(
  '[data-js="characters-left-answer"]'
);

function calculateCharactersLeft(inputField, textField) {
  const charactersLeft = 150 - parseInt(inputField.value.length);
  textField.textContent = `${charactersLeft} characters left`;
  if (parseInt(charactersLeft) <= 10) {
    textField.classList.add("form__text-info--red");
  } else textField.classList.remove("form__text-info--red");
}

inputQuestion.addEventListener("input", () => {
  calculateCharactersLeft(inputQuestion, charactersLeftInfoQuestion);
});

inputAnswer.addEventListener("input", () => {
  calculateCharactersLeft(inputAnswer, charactersLeftInfoAnswer);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  const newCard = createQuestionCard(data.question, data.answer, data.tag);
  console.log(data.question);
  newCardSection.append(newCard);
  form.reset();
  question.focus();
});
