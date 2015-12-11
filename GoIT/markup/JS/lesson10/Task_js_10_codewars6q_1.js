/*The function 'fibonacci' should return an array of fibonacci
 numbers. The function takes a number as an argument to decide
 how many no. of elements to produce. If the argument is less than
 or equal to 0 then return empty array*/


function fibAmount(n) {
    if (n <= 0) {
        return [];
    }

    if (n == 1) {
        return [0];
    }

    if (n == 2) {
        return [0, 1];
    }

    var arr = [0, 1];

    for (var i = 3; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 3]);
    }
    return arr;
}

console.log(fibAmount(4)); // should return [0,1,1,2]
console.log(fibAmount(-1)); // should return []
console.log(fibAmount(7));