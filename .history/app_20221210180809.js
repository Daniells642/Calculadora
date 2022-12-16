let button = document.querySelector("#teste");
button.value = 25;

let teste = document.querySelector("#data-previous-operand");
teste.value = 10;

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButtom = document.querySelector("[data-equals]");
const deleteButtons = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
let previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);

previousOperandTextElement.value = 100;
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
