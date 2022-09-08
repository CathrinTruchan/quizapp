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

// Funktionalität Form

const form = document.querySelector('[data-js="form"]');
const newCardSection = document.querySelector('[data-js="new-cards"]');
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
});

function createQuestionCard(data) {
  const card = document.createElement("section");
  newCardSection.append(card);
  const bookmark = document.createElement("div");
  card.append(bookmark);
  bookmark.classList.add("card__bookmark");
  const bookmarkIcon = document.createElement("i");
  bookmark.append(bookmarkIcon);
  bookmarkIcon.classList.add("fa fa-bookmark");
}

/*<section class="card" data-js="card">
  <div class="card__bookmark" data-js="bookmark" aria-label="Bookmark">
    <i class="fa fa-bookmark"></i>
  </div>
  <span class="card__text" data-js="question">
    What property changes the axis in flexbox?
  </span>
  <span class="card__text card__text--hidden" data-js="answer">
    The property "flex direction"
  </span>
  <button class="card__button" data-js="button">
    Show Answer
  </button>
  <ul class="card__tags">
    <li class="card__tagbox">#html</li>
    <li class="card__tagbox">#flexbox</li>
    <li class="card__tagbox">#css</li>
  </ul>
</section>; */
