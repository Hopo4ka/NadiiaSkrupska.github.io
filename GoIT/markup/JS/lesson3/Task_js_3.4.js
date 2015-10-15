var j = 3, k = 5,
    num = prompt('Enter a number bigger than 100');

while (num <= 100) {
    num = prompt('Enter a number bigger than 100');
}

if (num % j === 0) {
    if (num % k === 0) {
        alert('FizzBuzz');
    }
}

