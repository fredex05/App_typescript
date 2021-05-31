import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void
{

    const firstStr: string = question("Enter First number:\n");
    const operator: string = question("Enter Operator:\n");
    const secondtStr: string = question("Enter Second number:\n");

    const validinput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondtStr);

    if (validinput)
    {
        
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondtStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(result); 
    }
    else
    {
        console.log("\ninvalid Input\n");
        main()
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number)
{
    switch(operator)
    {
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

function isOperator(operator: string): boolean
{
     switch(operator)
     {
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
function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

main();