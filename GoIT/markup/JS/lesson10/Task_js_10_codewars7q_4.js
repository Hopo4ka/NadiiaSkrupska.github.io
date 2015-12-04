/*You have to write a function pattern which returns the following Pattern(See
examples) upto n rows, where it is parameter.
Rules/Note:
If the Argument is non-positive integer then it should return "" i.e. empty
string.
The length of each line = (2n - 1).
Range of n is (-infinity, 100)*/

function pattern(n) {
    var output = '',
        i;
    if (n > 0) {
        var results = [],
            line = Array(n).join(' ');

        for (i = 1; i <= n; i++) {
            line += (i % 10);
        }
        results.push(line);

        for (i = 1; i < n; i++) {
            results.push(results[i-1].substring(1) + ' ');
        }
        output = results.join('\n');
    }
    return output;
}

console.log(pattern(10));

//не мое решение
//function pattern(n) {
//    var i, line = '', lines = [];
//    for (i = 1; i <= n; i++) line += i % 10;
//    for (i = 0; i < n; i++) lines.push(Array(n-i).join(' ') + line + Array(i+1).join(' '));
// return lines.join('\n');
//}
// console.log(pattern(10));