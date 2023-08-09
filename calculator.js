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
        // Add some more functions to clear history
        return;
    }
    displayScreen.textContent = input;
}