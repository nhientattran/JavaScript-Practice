// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

function checkForFactor(base, factor) {
    if (base % factor == 0) {
        return true
    } else {
        return false
    }
}

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let letter of str) {
        if (vowels.includes(letter)) {
            count += 1
        }
    }
    return count
}

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmiStat = weight / (height ** 2)
    if (bmiStat <= 18.5) {
        return 'Underweight'
    } else if (bmiStat <= 25) {
        return 'Normal'
    } else if (bmiStat <= 30) {
        return 'Overweight'
    } else {
        return 'Obese'
    }
}

// Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
    return string.split(' ')
}

)