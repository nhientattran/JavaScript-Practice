// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function points(game) {
    let point = 0
    for (let i = 0; i < game.length; i++) {
        if (parseInt(game[i][0]) > parseInt(game[i][2])) {
            point += 3
        } else if (parseInt(game[i][0]) == parseInt(game[i][2])) {
            point += 1
        } 
    }
    return point
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    if (bool == true) {
        return 'Yes'
    } else if (bool == false) {
        return 'No'
    } else {
        return ''
    }
}

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b) {
    return b.toString()
}

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
    let speed = Math.floor((s*100000)/(3600))
    return speed
}

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
    if (str.length < 2) {
        return str
    } else {
        var newStr = str.slice(1, (str.length - 1))
    }
    console.log(123)
    return newStr
}


// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
    var output = ''
    for (let i = 0; i < string.length; i ++) {
        if (string[i] === '0') {
            output += 'O'
        } else if (string[i] === '5') {
            output += 'S'
        } else if (string[i] === '1') {
            output += 'I'
        } else {
            output += string[i]
        }
    }
    return output
}
