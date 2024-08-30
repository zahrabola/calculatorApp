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

    //Preventing Nan - when there is no second value
    if (!secondValue && btnValue === "=") return null;


    //clear button
    if (btnValue === "C") {
      firstValue = "";
      secondValue = "";
      symbol = "";
      return (display.innerText = "");
    }

    // backspace functunality

    if (btnValue === "⌫") {
      if (symbol && secondValue) {
        secondValue = secondValue.slice(0, -1);
      } else if (symbol && !secondValue) {
        symbol = "";
      } else if (!symbol && firstValue) {
        firstValue = firstValue.slice(0, -1);
      }
      display.innerText = firstValue + symbol + secondValue;
      return;
    }

/// // Prevent multiple symbols
/*
if (btnValueIsSymbol && symbol !== "") {
    return; // Do nothing if a symbol is already present
}
*/
if (btnValueIsSymbol && symbol !== "" && btnValue !== "=") {
    display.innerText = firstValue + btnValue;
    symbol = btnValue;
    return;
}


    //if statements true or false
    if (firstValue && btnValueIsSymbol) {
      ///calling calculate function
      secondValue && calculate();
      symbol = btnValue;
    } else if (!symbol) {
      if (btnValue === "." && firstValue.includes(".")) return; // Prevent multiple decimal points
      firstValue += btnValue;
    } else if (symbol) {
      if (btnValue === "." && secondValue.includes(".")) return; // Prevent multiple decimal points
      secondValue += btnValue;
    }

    //display of numbers

    // else if (!symbol) firstValue += btnValue;
    // if there's a symbol, that means the user is done with the first value then add to second
    //else if (symbol) secondValue += btnValue

    if (btnValue !== "=") display.innerText += btnValue;
  });
}


////workbox cli
//https://developer.chrome.com/docs/workbox/modules/workbox-cli 