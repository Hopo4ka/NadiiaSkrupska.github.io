/**
Home task from presentation
 */

function countFact(n) {
    return (n <= 2) ? n : n * countFact(n-1);
}

console.log(countFact(5));