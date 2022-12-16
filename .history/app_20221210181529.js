const numberButtons = document.querySelector("#data-number1");

numberButtons.value = 150;

const operationButtons = document.querySelectorAll("#data-operator");
const equalsButtom = document.querySelector("#data-equals");
const deleteButtons = document.querySelector("#data-delete");
const allClearButton = document.querySelector("#data-all-clear");
const previousOperandTextElement = document.querySelector(
  "#data-previous-operand"
);
previousOperandTextElement.value = 150;

const currentOperandTextElement = document.querySelector(
  "#data-current-operand"
);
currentOperandTextElement.value = 150;
