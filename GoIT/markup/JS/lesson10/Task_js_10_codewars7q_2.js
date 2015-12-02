/*Given a string, swap the case for each of the letters.
 e.g. CodEwArs --> cODeWaRS*/

function swap(str) {

    var strOrigin = str.split(''),
        strLow = str.toLowerCase().split(''),
        t = [];

    for (var i = 0; i < strOrigin.length; i++) {
        if (strOrigin[i] === strLow[i]) {
            t.push(strOrigin[i].toUpperCase());
        } else {
            t.push(strOrigin[i].toLowerCase());
        }
    }
    return t.join('');
}

//не мое решение, но мне очень понравилось
//function swapCase(x) {
//    return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()
//}
//function swap(str) {
//    return str.split("").map(swapCase).join("")
//}

console.log(swap('CodEwArs'));