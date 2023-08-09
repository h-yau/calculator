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
    if (input == "C") {
        answerDisplay.textContent = "0";
        return;
    }
    if (input == "AC") {
        inputDisplay.textContent = "";
        answerDisplay.textContent = "0";
        return;
    }
    if (Number.isInteger(+input) || input == "."){
        // check last string if it already contains a "."
        if (!canItDecimal(answerDisplay.textContent) && input == ".") {
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

    operations(input, inputDisplay);
    return;
}

function canItDecimal(lastInput) {
    return !lastInput.toString().includes(".");
}


function operations(operator, inputs) {
    
}