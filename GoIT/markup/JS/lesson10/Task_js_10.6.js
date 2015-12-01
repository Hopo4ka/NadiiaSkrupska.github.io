/*Write a JavaScript function which accepts an argument and
returns the type. Note: There are six possible values that
typeof returns: object, boolean, function, number, string, and
undefined.*/

function type(a) {
    return typeof(a);
}

console.log(type([1, 2, 3, 4, 5]));
console.log(type(true));
console.log(type(function add() {
    return 7;
}));
console.log(type(2));
console.log(type('vode'));
console.log(type());