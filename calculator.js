const buttons = document.querySelectorAll('.calculator-container .btn');
const displayScreen = document.querySelector('#display');
const inputDisplay = displayScreen.querySelector('.input-display');
const answerDisplay = displayScreen.querySelector('.answer-display');

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
    e.preventDefault();
    changeDisplayScreen(button.textContent);
    });
});


function changeDisplayScreen(input) {

    // check for ERROR
    if (inputDisplay.textContent == "ERROR") {
        if (input != "AC") {
            return;
        }
    }

    // check for Ans = something
    if (inputDisplay.textContent.includes("Ans = ")) {
        inputDisplay.textContent = inputDisplay.textContent.replace("Ans = ", "");
    }

    // for clearing displays
    if (input == "C") {
        if (!isNaN(inputDisplay.textContent)) {
            clearInputDisplay();
        }
        clearAnswerDisplay();
        ///////// needs to consider "C" changing a number (multiple digits too) that is already in inputDisplay
        return;
    }
    if (input == "AC") {
        clearInputDisplay();
        clearAnswerDisplay();
        return;
    }

    // when input is a digit or a decimal
    if (Number.isInteger(+input) || input == "."){

        // check last string if it already contains a "."
        if (!canItDecimal(answerDisplay.textContent) && input == ".") {
            return;
        }

        // chekc inputDisplay.textContent to see what's in there
        if (isNaN(inputDisplay.textContent)) {
            inputDisplay.textContent += input;
            answerDisplay.textContent = input;
            return;
        }

        inputDisplay.textContent += input;
        if (answerDisplay.textContent == "0" || answerDisplay.textContent == "") {
            answerDisplay.textContent = input;
        } else {
            answerDisplay.textContent += input;
        }
        return;
    }

    // when input is an operator
    const operationResult = operations(input, inputDisplay.textContent);
    if (!isNaN(operationResult)){
        inputDisplay.textContent = "Ans = " + operationResult;
        answerDisplay.textContent = operationResult;
    } else {
        inputDisplay.textContent = operationResult;
    }
    return;
}

function clearInputDisplay() {
    inputDisplay.textContent = "";
}

function clearAnswerDisplay() {
    answerDisplay.textContent = "0";
}

function canItDecimal(lastInput) {
    return !lastInput.toString().includes(".");
}


function operations(operator, inputs) {
    if (operator == "=" && !isNaN(inputs)) {
        return `Ans = ${inputs}`;
    }
    if (isNaN(inputs)) {
        return calculate(operator, inputs);
    }
    return inputs + ` ${operator} `;
}

function calculate(operator, inputs) { 
    [firstNum, opt, secondNum] = inputs.split(" ");
    a = +firstNum;
    b = +secondNum;
    this.methods = {
        "÷": (a, b) => (b != 0) ? a / b : "ERROR",
        "x": (a, b) => a * b,
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };
    // returns a number
    return this.methods[opt](a, b);
}