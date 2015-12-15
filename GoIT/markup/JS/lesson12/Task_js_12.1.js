function printNumbersInterval() {
    var i = 1,
        timerId = setInterval( function() {
            console.log(i);
            if (i === 20) clearInterval(timerId);
            i++;
        }, 100);
}

printNumbersInterval();