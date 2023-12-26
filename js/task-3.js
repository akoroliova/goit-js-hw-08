const inputElement = document.querySelector("input#name-input");
const outputElement = document.querySelector("span#name-output");

inputElement.addEventListener("input", (event) => {
  inputElement.value = inputElement.value.trim();
  const trimmedValue = event.currentTarget.value.trim();
  outputElement.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
});

//For CSS markup task:
const greeting = document.querySelector("h1");
greeting.classList.add("greeting");
