function add(n1, n2) {
  return n1 + n2;
}
function subtract(n1, n2) {
  return n1 - n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  return n1 / n2;
}

function operate(nr1, op, nr2) {
  const n1 = Number(nr1);
  const n2 = Number(nr2);

  let result = 0;
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = subtract(n1, n2);
      break;
    case "X":
      result = multiply(n1, n2);
      break;
    case "/":
      result = divide(n1, n2);
      break;
  }
  return Math.round(result * 10000) / 10000;
}

function writeToScreen(str) {
  let val = str.length >= 9 ? "Max Digits!" : String(str);

  document.querySelector("#display").innerHTML = val;
}

// Main
let n1 = 0;
let op = "";
let n2 = 0;

// Event listners

// clear screen
document.querySelector("#AC").addEventListener("click", () => {
  n1 = 0;
  n2 = 0;
  op = "";
  writeToScreen("0");
});

// add events to numbers
const numberNodes = document.querySelectorAll(".number");
numberNodes.forEach((node) =>
  node.addEventListener("click", () => {
    if (op.length === 1) {
      n2 === 0 ? (n2 = node.innerHTML) : (n2 = n2 + node.innerHTML);
      writeToScreen(n2);
    } else {
      n1 === 0 ? (n1 = node.innerHTML) : (n1 = n1 + node.innerHTML);
      writeToScreen(n1);
    }
  })
);

// add events to operators
const operationNodes = document.querySelectorAll(".operation");
operationNodes.forEach((node) =>
  node.addEventListener("click", () => {
    if (n1 > 0 && n2 > 0) {
      const result = operate(n1, op, n2);
      writeToScreen(result);
      n1 = result;
      n2 = 0;
    }
    op = node.innerHTML;
  })
);

// add events to "="
document.querySelector("#equal").addEventListener("click", () => {
  const result = operate(n1, op, n2);
  writeToScreen(result);
  n1 = result;
  n2 = 0;
});
