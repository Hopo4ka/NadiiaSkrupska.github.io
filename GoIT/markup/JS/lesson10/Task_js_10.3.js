function makeOrder(str) {
    return str.toLowerCase().split('').sort().join('');
}

console.log(makeOrder('webmaster'));