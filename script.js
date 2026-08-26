const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let expression = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
    const value = button.textContent;

 // Numbers and decimal point
 if (!isNaN(value) || value === ".") {

         expression += value;
        display.textContent = expression;

        }

        // Operators
        else if (["+", "-", "*", "/", "%"].includes(value)) {

            firstNumber = expression;
            operator = value;

            expression += ` ${value} `;
            display.textContent = expression;
        }

        // Equal button
        else if (value === "=") {

            secondNumber = expression.split(operator)[1];

            let num1 = Number(firstNumber);
            let num2 = Number(secondNumber);
            let result;

            if (operator === "+") {
                result = num1 + num2;
            }
            else if (operator === "-") {
                result = num1 - num2;
            }
            else if (operator === "*") {
                result = num1 * num2;
            }
            else if (operator === "/") {
                result = num1 / num2;
            }
            else if (operator === "%") {
                result = num1 % num2;
            }

            display.textContent = result;
            expression = result.toString();
        }

        // Clear button
        else if (value === "C") {

            expression = "";
            firstNumber = "";
            operator = "";
            secondNumber = "";

            display.textContent = "0";
        }

        // Backspace button
        else if (value === "x") {

            expression = expression.slice(0, -1);
            display.textContent = expression || "0";
        }

    });
});