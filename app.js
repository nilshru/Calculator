var btn = document.querySelectorAll('.btn');
var result = document.getElementById('result');

function ac() {
    result.value = "";
}

function show(value) {
    result.value += value;
}

function showEqual() {
    var expression = result.value;
    var answer = eval(expression);
    result.value = answer;
}

function deleteLastChar() {
    var expression = result.value;
    result.value = expression.slice(0, -1);
}

function toggleSign() {
    var expression = result.value;
    if (expression.startsWith('-')) {
        result.value = expression.substring(1);
    } else {
        result.value = '-' + expression;
    }
}

function calculatePercentage() {
    var expression = result.value;
    var answer = eval(expression) / 100;
    result.value = answer;
}

function mousedown(button) {
    button.style.backgroundColor = "rgb(15, 15, 15)";
}

function mouseup(button) {
    button.style.backgroundColor = "";
}