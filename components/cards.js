function createQuestionCard(userQuestion, userAnswer, userTag) {
  const card = document.createElement("section");
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
  question.textContent = userQuestion;

  const answer = document.createElement("span");
  card.append(answer);
  answer.classList.add("card__text", "card__text--hidden");
  answer.setAttribute("data-js", "answer");
  answer.textContent = userAnswer;

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
  tagElement.textContent = userTag;

  return card;
}

export default createQuestionCard;
