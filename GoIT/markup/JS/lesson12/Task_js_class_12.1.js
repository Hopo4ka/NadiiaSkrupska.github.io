function delay(func, time) {
    return function () {
        var arg = arguments,
            ctx = this;
        setTimeout(function () {
            func.apply(ctx, arg);
        }, time);
    }
}

function f(x) {
    console.log('Hello: ' + x);
}

function f2(x) {
    console.log(2 + 2 + ' ' + x);
}

var f1000 = delay(f, 1000);
f2 = delay(f2, 3000);

f1000('Hello: test');
f2('Hello: test 2');