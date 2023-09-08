// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons) {
    return bullets >= dragons*2
}

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// String.prototype.toJadenCase = function () {
//     let sentence = this.split(' ')
// }

String.prototype.toJadenCase = function () {
    let sentence = this.split(' ')
    let captializeSentence = sentence.map((word)=>{
          return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return captializeSentence.join(' ')
  };

//   A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < string.length; i ++) {
        if (alphabet.includes(string.toLowerCase()[i])) {
            alphabet = alphabet.replace(string.toLowerCase()[i], "")
        }
    }
    return alphabet.length == 0
}