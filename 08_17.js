// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 == 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
    if (n >= 10) {
        return 'Great, now move on to tricks'
    } else {
        return 'Keep at it until you get it'
    }
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultplication(number) {
    if (number % 2 == 0) {
        return number*8
    } else {
        return number*9
    }
}

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function(num) {
    var output = ''
    for (let i = 1; i <= num; i ++) {
        output += i + ' sheep...'
    }
    return output
}

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.