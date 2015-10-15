var a = 1, b = 100, j = 3, k = 5;
for (i = a; i <= b; i++) {
    if (i % j === 0 & i % k === 0) {
        console.log(i + 'FizzBuzz');
    } else {
        console.log(i);
    }
}