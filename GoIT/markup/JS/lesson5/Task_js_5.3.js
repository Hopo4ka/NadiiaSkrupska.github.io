var calc = [];

do {
    var num = prompt ('Enter a number');
    calc.push(parseInt(num));
} while (num);

var sum = 0;
for (var i = 0; i < calc.length-1; i++) {
    var j = calc[i];
    sum += j;
}

console.log(sum);