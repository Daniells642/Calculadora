const numberButtons = document.querySelectorAll(".data-number");
console.log(numberButtons);
const operationButtons = document.querySelectorAll("#data-operator");
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
    this.currentOperandTextElement = `${
      this.currentOperand
    }${number.toString()}`;
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

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
  alert("está tudo certo.");
});

for (const btnNumber of numberButtons) {
  btnNumber.addEventListener("click"),
    () => {
      calculator.adicionarNumber(btnNumber.innerText);
    };
}

function mensagem() {
  alert("Botão clicado.");
}
