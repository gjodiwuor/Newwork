function interactiveFactorial() {
    while (true) {
        let input = prompt("Enter a non-negative integer to find its factorial (or type 'exit' to quit):");

        if (input === null || input.toLowerCase() === "exit") {
            alert("Exiting the factorial calculator.");
            break;
        }

        let num = parseInt(input);

        if (isNaN(num) || num < 0) {
            alert("Please enter a valid non-negative integer.");
            continue;
        }

        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }

        alert(`Factorial of ${num} is ${factorial}`);
    }
}

// To run the function
interactiveFactorial();
