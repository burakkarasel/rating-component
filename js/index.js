const ratingsDOM = document.getElementById("ratings");
const btnDOM = document.getElementById("btn");
const ratingResultDOM = document.getElementById("rating-result");
const resultContainer = document.getElementById("result-container");
const ratingContainer = document.getElementById("rating-container");

let rating;

ratingsDOM.addEventListener("click", (e) => {
  if (
    (e.target.innerHTML === "5" ||
      e.target.innerHTML === "4" ||
      e.target.innerHTML === "3" ||
      e.target.innerHTML === "2" ||
      e.target.innerHTML === "1") &&
    rating
  ) {
    rating.style.backgroundColor = "hsl(214, 18%, 27%)";
    e.target.style.backgroundColor = "hsl(25, 97%, 53%)";
  } else if (
    e.target.innerHTML === "5" ||
    e.target.innerHTML === "4" ||
    e.target.innerHTML === "3" ||
    e.target.innerHTML === "2" ||
    e.target.innerHTML === "1"
  ) {
    e.target.style.backgroundColor = "hsl(25, 97%, 53%)";
  }
  rating = e.target;
});

btnDOM.addEventListener("click", () => {
  ratingResultDOM.innerText = rating.innerText;
  resultContainer.style.display = "flex";
  ratingContainer.style.display = "none";
});
