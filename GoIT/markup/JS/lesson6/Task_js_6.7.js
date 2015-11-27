var string = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function unique(value, index, arr) {
    var t = [];
    for (i = 0; i < arr.length; i++) {
        t[i] = arr[i].toLowerCase().split("").sort().join("");
        var edited = value.toLowerCase().split("").sort().join("");
    }

    return t.indexOf(edited) == index;
}

function anClean(arr) {
    return arr.filter(unique);
}

console.log(anClean(string)); 
