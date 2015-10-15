function Fib(n) {
    return (n <= 1) ? n : (Fib(n-1) + Fib(n-2));
}
console.log(Fib(3));
console.log(Fib(7));
console.log(Fib(77));