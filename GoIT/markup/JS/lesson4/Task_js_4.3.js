function strCut(str) {
    if (str.length <= 20) {
        return str;
    } else {
        return str.slice(0, 21);
    }
}
console.log(strCut('Hey there! Nice to meet you!'));
console.log(strCut('Hey there!'));