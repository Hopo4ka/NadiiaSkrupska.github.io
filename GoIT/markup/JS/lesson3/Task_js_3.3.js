var a = 1, b = 100, j = 3, k = 5;
for (i = a; i <= b; i++) {
    if (i % j === 0) {
        console.log(i + ' - Fizz');
    } else if (i % k === 0) {
            console.log(i + ' - Buzz');
    } else {
        console.log(i);
    }
}