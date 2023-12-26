const body = document.querySelector("body");
const button = document.querySelector("button.change-color");
const span = document.querySelector("span.color");

button.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  span.textContent = String(newColor);
}
