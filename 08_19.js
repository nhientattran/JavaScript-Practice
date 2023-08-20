// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
    let output = ''
    for (let i = 0; i < dna.length; i ++) {
        if (dna[i] == 'T') {
            output += 'U'
        } else {
            output += dna[i]
        }
    }
    return output
}

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    let smallest = Math.min(...numbers)
    let output = []
    for (const num of numbers) {
        if (num != smallest) {
            output.push(num)
        }
    }
    return output
}

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let output = 0
    for (const num of arr) {
        if (num > 0) {
            output += num
        }
    }
    return output
}

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let arr = s.split(' ')
    let shortestLength = arr[0].length
    for (const word of arr) {
        if (word.length < shortestLength) {
            shortestLength = word.length
        }
    }
    return shortestLength
}

findShort('bitcoin take over the world maybe who knows perhaps')

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length*width*height
    }
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
    let output = 0
    for (const num of numbers){
        output += num ** 2
    }
    return output
}