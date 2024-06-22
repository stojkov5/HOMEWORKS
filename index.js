const firstDiv = document.getElementById("firstDiv");

function changeColor() {
  firstDiv.style.background = "blue";
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.textContent = "Homework 10";
  card.style.color = "red";
});
const firstCard = document.querySelector(".card");
const span = document.createElement("span");
span.textContent = " Hello from span";
firstCard.style.background = "pink";
firstCard.appendChild(span);

const button = document.createElement("button");

button.textContent = "Button before First Div";
button.classList.add("btn-style");
document.body.insertBefore(button, firstDiv);

button.style.padding = "10px";
button.style.margin = "10px";
button.style.background = "black";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";

function toggleParagraph() {
  const paragraph = document.getElementById("toggleParagraph");
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
}
