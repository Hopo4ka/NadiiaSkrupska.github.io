function isPal(str) {
    var arr = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ")
            arr.push(str[i].toLowerCase());
        else
            continue;
    }
    var trimmed = arr.join('');
    arr.reverse();
    var trimmed_reverse = arr.join('');
    return (trimmed === trimmed_reverse) ? true : false;
}

console.log(isPal('Anna')); // true
console.log(isPal('? ???? ????? ?? ???? ?????')); //true
console.log(isPal('????')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false