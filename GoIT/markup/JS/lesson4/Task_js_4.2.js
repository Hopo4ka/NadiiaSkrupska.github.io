function checkSpam(str) {
    var lower = str.toLowerCase();
    if (lower.indexOf('sex') !== -1 || lower.indexOf('spam') !== -1) {
        return true;
    } else {
        return false;}
}

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));