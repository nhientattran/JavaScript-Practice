// Given two ordered lists and a limit, return an ordered list of the n smallest elements from the lists where n equals the limit.

// This should be done in linear 0(n) time, and is doable using no external packages.

// Example:
// list_a = [1, 3, 5, 7]
// list_b = [0, 6, 8]
// limit = 4

// Answer = [0, 1, 3, 5]

// list_a = [1, 1, 5, 5, 9]
// list_b = [7]
// limit = 8

// Answer = [1, 1, 5, 5, 7, 9]

function mergeSmallestElements(arr1, arr2, limit) {
    let arr = [...arr1, ...arr2]
    let out = []
    arr.sort(function(a, b){return a-b})
    for (let i = 0; i < limit; i ++) {
        out.push(arr[i])
    }
    return out
}

function mergeSmallestElements2(arr1, arr2, limit) {
    const newArray = []
    const indexA = 0
    const indexB = 0

    while (indexA < arr1.length & indexb < arr2.length & newArray.length < limit) {
        if (arr1[indexA] <= arr2[indexB]) {
            newArray.push(arr1[indexA])
            indexA ++
        } else {
            newArray.push(arr2[indexB])
            indexB ++
        }
    }

    return newArray
}