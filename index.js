const display = document.querySelector(".display");

const controlBtns = document.querySelector(".controls").children;
const allSymbols = ["+", "-", "X", "÷", "%", "C", "="];

//2
let firstValue = "";
let secondValue = "";
let symbol = "";
let result = "";

//calculate function
const calculate = () => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  //if statements
  if (symbol === "+") result = firstValue + secondValue;
  if (symbol === "-") result = firstValue - secondValue;
  if (symbol === "X") result = firstValue * secondValue;
  if (symbol === "÷") result = firstValue / secondValue;
  if (symbol === "%") result = firstValue % secondValue;

  display.innerText = result;
  firstValue = result;
  secondValue = "";
};

//1
//array of buttons named controlBtns with a event listener
for (let button of controlBtns) {
  button.addEventListener("click", () => {
    const { innerText: btnValue } = button;

    //declare a variable
    const btnValueIsSymbol = allSymbols.includes(btnValue);

    //if statements true or false

    if (firstValue && btnValueIsSymbol) {
      ///calling calculate function
      secondValue && calculate();

      symbol = btnValue;
    }

    // else if statement  - if there's no symbol, that means the user is still inputting first value
    else if (!symbol) firstValue += btnValue;
    // if there's a symbol, that means the user is done with the first value then add to second
    else if (symbol) secondValue += btnValue;

    if (btnValue !== "=") display.innerText += btnValue;
  });
}
