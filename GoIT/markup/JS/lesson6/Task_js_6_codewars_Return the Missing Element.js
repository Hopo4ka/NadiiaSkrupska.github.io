var missingArr = ['1', '3', '2', '5', '4', '9', '7', '6', '0'];

function anClean(arr) {
    arr.sort();
    var t = new Array();
    for (var i = 0; i <= 9; i++)
        if (arr.indexOf(i.toString()) == -1)
            t.push(i);
    return t;
}

console.log(anClean(missingArr));
