/**
 * Created by Nadine on 10/12/2015.
 */
function pow(x, n) {
    for (i=1; i<n; i++) {
        x *= x;
    }
    return x;
}
console.log(pow(3, 2));
console.log(pow(1, 100));