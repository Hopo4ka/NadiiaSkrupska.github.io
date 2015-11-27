function sum(array) {
    var result = array.reduce(function (sum, current) {
        return sum + current;
    });
    return result;
}
