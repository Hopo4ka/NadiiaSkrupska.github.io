/*Write a JavaScript function that accepts a string as a parameter
and converts the first letter of each word of the string in upper case.
Go to the editor
 Example string: the quick brown fox
 Expected Output: The Quick Brown Fox*/

function makeOrder(str) {
    var t = [];

    t = str.split(' ');

    for (i = 0; i < t.length; i++) {
        t[i] = t[i].charAt(0).toUpperCase() + t[i].slice(1);
    }
    return t.join(' ');
}

console.log(makeOrder('the quick brown fox'));