// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
    let validSums = [];
    for (let i = 0; i < arr.length; i++) {
        let currentArr = [arr[i]];
        let currentSum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (currentSum <= k) {
                currentArr.push(arr[j]);
                currentSum += arr[j];
                if (currentSum === k)
                    validSums.push(currentArr.slice());
            }
            else 
                break;
        }
    }
    return validSums;
}

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));