function makeOrder(str) {
    var t = [];

    t = str.split(' ');

    for (i = 0; i < t.length; i++) {
        t[i] = t[i].charAt(0).toUpperCase() + t[i].slice(1);
    }
    return t.join(' ');
}

console.log(makeOrder('the quick brown fox'));