// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator) {
    if (operator === 'add') {
        return a + b;
    } else if (operator === 'subtract') {
        return a - b;
    } else if (operator === 'multiply') {
        return a * b;
    } else {
        return a / b
    }
}

// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

const sequenceSum = (begin, end, step) => {
    if (end < begin) {
        return 0
    }

    let out = 0

    for (let i = begin; i <= end; i += step) {
        out += i
    }

    return out
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
    if (a == b) {
        return a
    }
    let output = 0
    if (a < b) {
        for (let i = a; i <= b; i ++) {
            output += i
        }
    } else {
        for (let i = b; i <= a; i ++) {
            output += i
        }
    }
    return output
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    const averagePoints = (classPoints.reduce((a, b) => a + b)) / classPoints.length
    return yourPoints > averagePoints
}

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
    let wrongCount = 0
    for (let i = 0; i < s.length; i ++) {
        if (s[i] > 'm') {
            wrongCount += 1
        }
    }
    return wrongCount + '/' + s.length
}

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss'
    } else {
        return 'Hello guest'
    }
}

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
    let out = []
    let count = {} 
    for (let num of arr) {
        if (!(num in count) || count[num] < n) {
            out.push(num)
            count[num] = (count[num] || 0) + 1
        }
    }
    return out
}

console.log(deleteNth([1,2,3,1,1,2,1,2,3,3,2,4,5,3,1], 3))