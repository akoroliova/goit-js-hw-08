const boxes = document.querySelector("div#boxes");
const buttonCreate = document.querySelector("div#controls button[data-create]");
const buttonDestroy = document.querySelector(
  "div#controls button[data-destroy]"
);
const input = document.querySelector("div#controls input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxes.appendChild(fragment);
  input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

buttonCreate.addEventListener("click", handleCreate);
function handleCreate(event) {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    return;
  }
}

buttonDestroy.addEventListener("click", handleDestroy);
function handleDestroy(event) {
  destroyBoxes();
}
