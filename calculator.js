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

// Example usage
console.log(calculator(10, 5, '+'));  // Output: Result: 15
console.log(calculator(8, 2, '-'));   // Output: Result: 6
console.log(calculator(6, 3, '*'));   // Output: Result: 18
console.log(calculator(9, 0, '/'));   // Output: Error: Division by zero is not allowed.
console.log(calculator(10, 2, '%'));  // Output: Error: Invalid operator.
