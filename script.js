const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function ClearDisplay() {
    display.value = '';
}

function Calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
function Backspace() {
    display.value = display.value.slice(0, -1);
}