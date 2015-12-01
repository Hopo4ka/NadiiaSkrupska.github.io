/*Your task is to make a function that can take any non-negative integer as a
 argument and return it with it's digits in descending order. Descending order
 means that you take the highest digit and place the next highest digit immediately
 after it. */

function descendingOrder(n) {
    var arr = String(n).split('').sort().reverse().join('');

    return +arr;
}

console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(123456789));

