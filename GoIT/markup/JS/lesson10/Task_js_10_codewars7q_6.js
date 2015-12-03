/*Given an array, find the duplicates in that array, and return a
new array of those duplicates.
Note: numbers and their corresponding string representations
should not be treated as duplicates (i.e., '1' !== 1). */

var arr = ['s', 'r', 3, 3, '3', 'y', '3', 't', 's', 3, 't', 't'];

function duplicates(value, index, arr) {
    return arr.indexOf(value) !== index;
}

console.log(arr.filter(duplicates));