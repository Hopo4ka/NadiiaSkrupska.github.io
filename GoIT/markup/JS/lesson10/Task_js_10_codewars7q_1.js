/*Write a single function that can be invoked by either
 sum(2,3); //5
 //or
 sum(2)(3); //5*/

function sum(a, b) {
    if (b !== undefined) {
        return a + b;
    } else {
        return function (b) {
            return a + b;
        };
    }
}

console.log(sum(2, 0)); //5
console.log(sum(0)(3)); //5