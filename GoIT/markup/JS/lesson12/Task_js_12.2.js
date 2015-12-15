function printNumbersInterval() {
    var i = 1,
        timerId = setTimeout(function smt() {
            console.log(i);
            if (i === 20) clearInterval(timerId);
            i++;
            timerId = setTimeout(smt, 100);
        }, 100);
}

printNumbersInterval();