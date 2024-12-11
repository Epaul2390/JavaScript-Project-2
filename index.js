//String Manipulation Functions:

//a function that reverses a given string.

function reverseString(str) {
    return str.reverse();
}

// a function that counts the number of characters in a string.

function countCharacters(str) {
    return str.length;
}

//function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentence) {
    return sentence.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
     .join(' ');
}




// Array Functions:



//function that finds the maximum values in an array of numbers.

function findMax(arr) {
    return Math.max(...arr);
}


//function that finds the minimum values in an array of numbers.
function findMin(arr) {
    return Math.min(...arr);
}

//function that calculates the sum of all elements in an array.

function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

// function that filters out elements from an array.

function filterArray(arr, condition) {
    return arr.filter(condition);
}



//Mathematical Functions.

//Write a function to calculate the factorial of a given number.

function factorial(n) {
     // Check if n is a non-negative integer
     if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive case: factorial of n is n * factorial of (n-1)
    return n * factorial(n - 1);
}



// Create a function to check if a number is prime or not.

function isPrime(n) {
    // Check if the number is less than 2 (prime numbers are greater than 1)
    if (n <= 1) {
        return false;
    }

    // Check divisibility from 2 to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // n is divisible by i, hence not a prime number
        }
    }

    // If no divisors are found, the number is prime
    return true;
}



//Implement a function to generate the Fibonacci sequence up to a given number of terms.


function fibonacci(n) {
    // Initialize an array to store the Fibonacci sequence
    let sequence = [];

    // Loop through and generate the Fibonacci sequence
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0);  // First Fibonacci number
        } else if (i === 1) {
            sequence.push(1);  // Second Fibonacci number
        } else {
            // For all other terms, the next number is the sum of the last two numbers
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }

    return sequence;
}

