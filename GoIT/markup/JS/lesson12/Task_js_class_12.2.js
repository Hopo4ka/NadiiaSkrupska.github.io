function func(x) {
    console.log(x);
}

function debounce (f, time) {
    var state = true;

    return function() {
        if (!state) return;
        
        f.apply(this, arguments);
        state = false;
        setTimeout (function() {
            state = true;
        }, time)
    }
}

var func1 = debounce(func, 1000);

func1(1); //выполнится сразу же
func1(2); //игнор

setTimeout( function() {func1(3)}, 100 ); // игнор (прошло только 100мс)
setTimeout( function() {func1(4)}, 1100 ); // выполнится
setTimeout( function() {func1(5)}, 1500 ); // игнор
setTimeout( function() {func1(6)}, 2500 );
