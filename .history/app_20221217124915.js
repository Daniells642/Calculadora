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

  formatDisplayNumber(number) {
    const stringNumber = number.toString();

    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];

    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;

    if (this.previousOperand !== "") {
      this.calculate();
    }

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
    this.previousOperandTextElement.innerText = `${this.formatDisplayNumber(
      this.previousOperand
    )} ${this.operation || ""}`;
    this.currentOperandTextElement.innerText = this.formatDisplayNumber(
      this.currentOperand
    );
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

for (const operacoes of operationButtons) {
  operacoes.addEventListener("click", () => {
    calculator.chooseOperation(operacoes.innerText);
    calculator.updateDisplay();
  });
}

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

function mensagem() {
  alert("Botão clicado.");
}
