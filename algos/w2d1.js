// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < arr1.length || index2 < arr2.length) {
        if (index1 >= arr1.length) {
            if (arr2[index2] != merged[merged.length - 1])
                merged.push(arr2[index2]);
            index2++;
        } else if (index2 >= arr2.length) {
            if (arr1[index1] != merged[merged.length - 1])
                merged.push(arr1[index1]);
            index1++;
        } else if (arr1[index1] < arr2[index2]) {
            if (arr1[index1] != merged[merged.length - 1])
                merged.push(arr1[index1]);
            index1++;
        } else if (arr2[index2] < arr1[index1]) {
            if (arr2[index2] != merged[merged.length - 1])
                merged.push(arr2[index2]);
            index2++;
        } else {
            if (arr1[index1] != merged[merged.length - 1])
                merged.push(arr1[index1]);
            index1++;
            index2++;
        }
    }
    return merged;
}

// console.log(mergeDedupe(arr1, arr2));
// console.log(mergeDedupe(arrA, arrB));

// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])) // [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6])) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]
