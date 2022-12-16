const numberButtons = document.querySelectorAll(".data-number");

const operationButtons = document.querySelectorAll(".data-operator");
console.log(operationButtons);
const equalsButtom = document.querySelector("#data-equals");
const deleteButtons = document.querySelector("#data-delete");
const allClearButton = document.querySelector(".data-all-clear");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  adicionarNumber(number) {
    this.currentOperand = `${this.currentOperand}${number.toString()}`;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  updateDisplay() {
    this.previousOperandTextElement.innerText = this.previousOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

for (const btnNumber of numberButtons) {
  btnNumber.addEventListener("click", mensagem, () => {
    calculator.adicionarNumber(btnNumber.innerHTML);
  });
}

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
  alert("está tudo certo.");
});

for (const operacoes of operationButtons) {
  operacoes.addEventListener("click", mensagem, () => {});
}

function mensagem() {
  alert("Botão clicado.");
}
