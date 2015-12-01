/*Write a JavaScript function that accepts a string as a parameter
and find the longest word within the string. Go to the editor
 Example string: Web Development Tutorial and something else
 Expected Output: Development*/

function makeOrder(str) {
    var t = [];

    t = str.split(' ').sort(function (a, b) {
        return b.length - a.length;
    });

    return t[0];
}

console.log(makeOrder('Web Development Tutorial and something else'));