// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
    return arr.slice(0, n)
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let o_count = 0
    let x_count = 0
    for (let i = 0; i < str.length; i ++) {
        if (str[i] == 'x' || str[i] == 'X') {
            x_count += 1
        }
        else if (str[i] == 'o' || str[i] == 'O') {
            o_count += 1
        }
    }

    return x_count == o_count
}

// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

function addFive(num) {
    const total = num + 5
    return total
  }