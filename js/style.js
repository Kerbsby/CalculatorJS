//clear
document.querySelector("#clear").addEventListener("click",()=>{
    document.querySelector("#display").value=" ";
})


document.querySelector("#parenthesis").addEventListener("click",()=>{
    let displayValue = document.querySelector("#display").value;
    let newValue = displayValue.slice(0, -1);
    document.querySelector('#display').value=newValue;
})

const digitsBtn = document.querySelectorAll('#digit');

digitsBtn.forEach((button) =>{
    button.addEventListener("click",() => {
        const currentValue = document.querySelector('#display').value;
        document.querySelector('#display').value = currentValue + button.value;
    }
    )
}
)




function evaluateExpression(expression) {
    try {
       
        const func = new Function('return ' + expression);
       
        return func();
    } catch (error) {
       
        console.error('Error evaluating expression:', error);
        return 'Error';
    }
}


function changeDiv(){
    var divisionBtn = document.querySelector("#division");
    divisionBtn.value = "÷";
}


document.querySelector("#equal").addEventListener("click", () => {
    const currentValue = document.querySelector("#display").value;
    const result = evaluateExpression(currentValue);

    document.querySelector("#display").value = result;
});


document.querySelector("#addition").addEventListener("click",() => {
    const currentValue = document.querySelector("#display").value;
    document.querySelector('#display').value = currentValue + "+";

})


document.querySelector("#subtraction").addEventListener("click", () => {
    const currentValue = document.querySelector("#display").value;
    document.querySelector("#display").value = currentValue + " - ";
});

document.querySelector("#multiplication").addEventListener("click", () => {
    const currentValue = document.querySelector("#display").value;
    document.querySelector("#display").value = currentValue + " * ";
});

document.querySelector("#division").addEventListener("click", () => {
    changeDiv();
    const currentValue = document.querySelector("#display").value;
    document.querySelector("#display").value = currentValue + "/";
});

document.querySelector('#period').addEventListener("click", () => {
    console.log("Decimal button clicked");
    const currentValue = document.querySelector('#display').value;
    document.querySelector('#display').value = currentValue + ".";
});