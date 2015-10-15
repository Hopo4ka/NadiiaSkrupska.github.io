function pow(x, n) {
    var y = x;
    for (i=1; i<n; i++) {
        y *= x;
    }
    return y;
}
console.log(pow(3, 2));
console.log(pow(1, 100));