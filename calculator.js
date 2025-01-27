// Function to perform basic arithmetic operations
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return 'Error: Division by zero is not allowed.';
            }
            result = num1 / num2;
            break;
        default:
            return 'Error: Invalid operator. Please use +, -, *, or /.';
    }

    return `Result: ${result}`;
}

module.exports = { calculator };
