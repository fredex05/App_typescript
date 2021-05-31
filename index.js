"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = readline_sync_1.question("Enter First number:\n");
    var operator = readline_sync_1.question("Enter Operator:\n");
    var secondtStr = readline_sync_1.question("Enter Second number:\n");
    var validinput = isNumber(firstStr) && isOperator(operator) && isNumber(secondtStr);
    if (validinput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondtStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("\ninvalid Input\n");
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
// check if the number is a number
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
