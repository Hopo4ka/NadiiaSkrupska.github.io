function makeOrder(str) {
    var output = [];
    output = str.toLowerCase().split('').sort().join('');
    return output;
}

console.log(makeOrder('webmaster'));