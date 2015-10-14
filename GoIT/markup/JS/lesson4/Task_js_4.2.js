/**
 * Created by Nadine on 10/14/2015.
 */

function checkSpam(str) {
    var lower = str.toLowerCase();
    if (~lower.indexOf('sex')||~lower.indexOf('spam')) {
        return true;
    } else {
        return false;}
}

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));