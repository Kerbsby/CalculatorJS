//clear

function evaluateExpression(expression) {
    // Split the expression into operands and operators
    const operands = expression.split(/[+\-*/%]/);
    const operators = expression.match(/[+\-*/%]/g);


    // Convert operands to numbers
    const numericOperands = operands.map(parseFloat);

    // Initialize the result with the first operand
    let result = numericOperands[0];

    // Iterate through the operators and perform operations
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const operand = numericOperands[i + 1];

        // Perform the operation based on the operator
        switch (operator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                result /= operand;
                break;
            case '%':
                result /= 100;
                break;
            default:
                return "Invalid operator";
        }
    }

    return result;
}



document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#display").value = "";
});

document.querySelector("#delete").addEventListener("click",()=>{
    let displayValue = document.querySelector("#display").value;
    let newValue = displayValue.slice(0, -1);
    document.querySelector('#display').value=newValue;
})



document.querySelector("#equal").addEventListener("click",()=>{
    const displayValue = document.querySelector("#display").value;
    const result = evaluateExpression(displayValue); // Evaluate the expression manually
    document.querySelector("#display").value = result;


})


const display = document.querySelector("#display");

document.querySelectorAll("#digit").forEach(button => {
    button.addEventListener("click", () => {
        display.value = display.value + button.value;
    });
});



document.querySelector("#addition").addEventListener("click", () => {
    const currentValue = document.querySelector("#display").value;
    document.querySelector("#display").value = currentValue + "+";
    
});


document.querySelector("#percent").addEventListener("click", () => {
    const currentValue = document.querySelector("#display").value;
    document.querySelector("#display").value = currentValue + "%";
    
});

document.querySelector("#multiplication").addEventListener("click", () => {
    const currentValue = document.querySelector("#display").value;
    document.querySelector("#display").value = currentValue + "*";
    
});

document.querySelector("#subtraction").addEventListener("click", () => {
    const currentValue = document.querySelector("#display").value;
    document.querySelector("#display").value = currentValue + "-";
    
});


document.querySelector("#division").addEventListener("click",()=>{
    const currentValue = document.querySelector("#display").value;
    document.querySelector('#display').value = currentValue + "/";
})
