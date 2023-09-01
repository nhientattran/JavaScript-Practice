// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    if (text === '' || n <= 0) {
        return text
    }

    if (text === null) {
        return null
    } 
    let oddOut = ''
    let evenOut = ''
    let out = text

    for (let i = 0; i < n; i ++){
        for (let j = 0; j < text.length; j ++) {
            if (j % 2 != 0) {
                oddOut += out[j]
            } else {
                evenOut += out[j]
            }
        } 
        out = oddOut + evenOut
        oddOut = ''
        evenOut = ''
    }
    return out
}

function decrypt(encryptedText, n) {
    if (encryptedText === '' || n <= 0) {
        return encryptedText
    }

    if (encryptedText === null) {
        return null
    }

    let textLength = encryptedText.length
    let mid = Math.floor(textLength/2)

    let oddOut = encryptedText.slice(0, mid)
    let evenOut = encryptedText.slice(mid)

    for (let i = 0; i < n; i ++) {
        let decryptedText = ''

        for (let j = 0; j < mid; j ++) {
            decryptedText += evenOut[j] + oddOut[j]
        }

        if (textLength % 2 !== 0) {
            decryptedText += evenOut[mid]
        }

        oddOut = decryptedText.slice(0, mid)
        evenOut = decryptedText.slice(mid)
    }

    return oddOut + evenOut
}

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {
    let sortedList = [...triplet].sort(function(a, b){return a - b});
    return triplet.indexOf(sortedList[1])
}

