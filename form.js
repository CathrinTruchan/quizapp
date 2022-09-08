// Funktionalität Form

const form = document.querySelector('[data-js="form"]');
const newCardSection = document.querySelector('[data-js="new-cards"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  createQuestionCard(data);
});

function createQuestionCard(data) {
  const card = document.createElement("section");
  newCardSection.append(card);
  const question = document.createElement("span");
  card.append(question);
  card.classList.add();
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
