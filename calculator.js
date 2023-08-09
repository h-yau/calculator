const buttons = document.querySelectorAll('.calculator-container .btn');
const displayScreen = document.querySelector('#display');

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
    e.preventDefault();
    changeDisplayScreen(button.textContent);
    });
});


function changeDisplayScreen(input) {
    if (input == "C") {
        displayScreen.textContent = "0";
        return;
    }
    if (input == "AC") {
        displayScreen.textContent = "0"
        // Add some more functions to clear history
        return;
    }
    displayScreen.textContent = input;
}