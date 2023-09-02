// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

let sif = new SmallestIntegerFinder()
// console.log(sif.findSmallestInt([1,2,3,4]))

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
    let output = []

    for (let i = 0; i <= n; i ++){
        output.push(2 ** i)
    }
    return output
}

console.log(powersOfTwo(3))

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
    if (arr.length === 0) {
        return 0
    }
    let count = 0
    for (let i = 0; i < arr.length; i ++) {
        const face = arr[i]

        if (
            (face.length === 3) &&
            (face[0] === ':' || face[0] === ';') &&
            (face[1] === '-' || face[1] === '~') &&
            (face[2] === ')' || face[2] === 'D')) {
                count += 1
            }
        else if 
            (
                (face.length === 2) &&
                (face[0] === ':' || face[0] === ';') &&
                (face[1] === ')' || face[1] === 'D')){
                    count += 1
                }
    }   return count
}