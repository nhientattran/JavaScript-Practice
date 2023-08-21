// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash(words) {
    output = ''
    for (let i = 0; i < words.length; i ++) {
        if (i != words.length - 1) {
            output += words[i] + ' '
        } else {
            output += words[i]
        }
    }
    return output
}

function smash2(words) {
    return words.join(' ')
}

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]
}

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
    if (!Array.isArray(array) || array.length <= 2) {
        return 0
    }
    let output = 0
    let min = Math.min(...array)
    let max = Math.max(...array)
    for (let i = 0; i < array.length; i ++) {
        output += array[i]
        }
    return output - min - max
}

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

function century(year) {
    return Math.ceil(year / 100)
}

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
    if (!Array.isArray(numbers) || numbers.length < 1) {
        return 0
    }
    output = 0
    for (let i = 0; i < numbers.length; i ++) {
        output += numbers[i]
    }
    return output
}

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function(a,b) {return a-b})
    return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))