function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}

function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

alert(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
alert(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24