// Convert a Number to a String!
// 93421388% of 19,441116,492 of 298,592AKJ.IO1 Issue Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
    return String(num)
}

// Summing a number's digits
// 2898093% of 3,07714,242 of 32,580mweiss
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    const numString = String(Math.abs(number))
    let out = 0

    for (let i = 0; i < numString.length; i ++) {
        out += Number(numString[i])
    }

    return out
}