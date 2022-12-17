const numberButtons = document.querySelectorAll(".data-number");
const operationButtons = document.querySelectorAll(".data-operator");
const equalsButtom = document.querySelector("#data-equals");
const deleteButtons = document.querySelector("#data-delete");
const allClearButton = document.querySelector(".data-all-clear");
const previousOperandTextElement = document.querySelector(
  ".data-previous-operand"
);
const currentOperandTextElement = document.querySelector(
  ".data-current-operand"
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  chooseOperation(operation) {
    /*if (this.currentOperand === "") return;

    if (this.previousOperand !== "") {
      this.calculate();
    }
     */

    this.operation = operation;

    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
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
  btnNumber.addEventListener("click", () => {
    calculator.adicionarNumber(btnNumber.innerText);
    calculator.updateDisplay();
    console.log(btnNumber);
  });
}

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

for (const operacoes of operationButtons) {
  operacoes.addEventListener("click", () => {});
}

function mensagem() {
  alert("Botão clicado.");
}
