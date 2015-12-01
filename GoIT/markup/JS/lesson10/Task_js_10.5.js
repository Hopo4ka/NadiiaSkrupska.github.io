function makeOrder(str) {
    var t = [];

    t = str.split(' ').sort(function (a, b) {
        return b.length - a.length;
    });

    return t[0];
}

console.log(makeOrder('Web Development Tutorial and something else'));