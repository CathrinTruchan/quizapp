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
    textField.style.color = "red";
  } else textField.style.color = "var(--tertiary-color)";
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
  createQuestionCard(data);
  form.reset();
  question.focus();
});

function createQuestionCard(data) {
  const card = document.createElement("section");
  newCardSection.append(card);
  card.classList.add("card", "form__cards");
  card.setAttribute("data-js", "card");

  const bookmark = document.createElement("div");
  card.append(bookmark);
  bookmark.classList.add("card__bookmark");
  bookmark.setAttribute("data-js", "bookmark");

  const bookmarkIcon = document.createElement("i");
  bookmark.append(bookmarkIcon);
  bookmarkIcon.classList.add("fa", "fa-bookmark");
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card__bookmark--active");
  });

  const question = document.createElement("span");
  card.append(question);
  question.classList.add("card__text");
  question.setAttribute("data-js", "question");
  question.textContent = data.question;

  const answer = document.createElement("span");
  card.append(answer);
  answer.classList.add("card__text", "card__text--hidden");
  answer.setAttribute("data-js", "answer");
  answer.textContent = data.answer;

  const button = document.createElement("button");
  card.append(button);
  button.classList.add("card__button");
  button.setAttribute("data-js", "button");
  button.textContent = "Show Answer";
  button.addEventListener("click", () => {
    if (button.textContent === "Show Answer") {
      button.classList.add("card__button-hide");
      button.textContent = "Hide Answer";
      question.classList.add("card__text--hidden");
      answer.classList.remove("card__text--hidden");
    } else {
      button.classList.remove("card__button-hide");
      button.textContent = "Show Answer";
      question.classList.remove("card__text--hidden");
      answer.classList.add("card__text--hidden");
    }
  });

  const tagList = document.createElement("ul");
  card.append(tagList);
  tagList.classList.add("card__tags");
  const tagElement = document.createElement("li");
  tagList.append(tagElement);
  tagElement.classList.add("card__tagbox");
  tagElement.textContent = data.tag;
}
