const display = document.getElementById('calculator-input');

function addToDisplay(keyss) {
    display.value += keyss;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "ERROR"
    }

}

function clearDisplay() {
    display.value = "";
}