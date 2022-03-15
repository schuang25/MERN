/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let indexA = 0;
    let indexB = 0;
    let union = [];
    while (indexA < sortedA.length && indexB < sortedB.length) {
        if (sortedA[indexA] < sortedB[indexB])
            indexA++;
        else if (sortedB[indexB] < sortedA[indexA])
            indexB++;
        else {
            if (union[union.length - 1] != sortedA[indexA])
                union.push(sortedA[indexA]);
            indexA++;
            indexB++;
        }
    }
    return union;
}

console.log(orderedIntersection(arrA1, arrB1));
console.log(orderedIntersection(arrA2, arrB2));
console.log(orderedIntersection(arrA3, arrB3));