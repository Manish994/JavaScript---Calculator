//Select All Elements
const inputElement = document.querySelector(".input");
const operationValueElement = document.querySelector(".operation .value");
const resultValueElement = document.querySelector(".result .value");

//Created Object Property which is inside Array
let calculatorButtons = [{
   name: "delete",
   symbol: "⌫",
   formula: false,
   type: "key"
}, {
   name: "clear",
   symbol: "C",
   formula: false,
   type: "key"
}, {
   name: "percent",
   symbol: "%",
   formula: "/100",
   type: "number"
}, {
   name: "division",
   symbol: "÷",
   formula: "/",
   type: "operator"
}, {
   name: "7",
   symbol: 7,
   formula: 7,
   type: "number"
}, {
   name: "8",
   symbol: 8,
   formula: 8,
   type: "number"
}, {
   name: "9",
   symbol: 9,
   formula: 9,
   type: "number"
}, {
   name: "multiplication",
   symbol: "x",
   formula: "*",
   type: "operator"
}, {
   name: "4",
   symbol: 4,
   formula: 4,
   type: "number"
}, {
   name: "5",
   symbol: 5,
   formula: 5,
   type: "number"
}, {
   name: "6",
   symbol: 6,
   formula: 6,
   type: "number"
}, {
   name: "addition",
   symbol: "+",
   formula: "+",
   type: "operator"
}, {
   name: "1",
   symbol: 1,
   formula: 1,
   type: "number"
}, {
   name: "2",
   symbol: 2,
   formula: 2,
   type: "number"
}, {
   name: "3",
   symbol: 3,
   formula: 3,
   type: "number"
}, {
   name: "subtraction",
   symbol: "–",
   formula: "-",
   type: "operator"
}, {
   name: "0",
   symbol: 0,
   formula: 0,
   type: "number"
}, {
   name: "comma",
   symbol: ".",
   formula: ".",
   type: "number"
}, {
   name: "calculate",
   symbol: "=",
   formula: "=",
   type: "calculate"
}];

function createCalculatorButton() {
   const btnPerRow = 4;
   let addedBtn = 0;

   calculatorButtons.forEach((button, index) => {
      //0/4, 1/4, 2/4, 3/4, 4/4, 5/4--18/4.
      if (addedBtn  % btnPerRow == 0) {
         inputElement.innerHTML += `<div class="row"></div>`;
      }


      const row = document.querySelector(".row:last-child");
      row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;

      addedBtn++;
   });
}
createCalculatorButton();