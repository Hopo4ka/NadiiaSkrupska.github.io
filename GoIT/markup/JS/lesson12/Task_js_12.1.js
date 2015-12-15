/* Напишите функцию printNumbersInterval(), которая
последовательно выводит в консоль числа от 1 до 20,
с интервалом между числами 100мс. То есть, весь вывод
должен занимать 2000мс, в течение которых каждые
100мс в консоли появляется очередное число.
 P.S. Функция должна использовать setInterval.*/
function printNumbersInterval() {
    var i = 1,
        timerId = setInterval(function() {
            console.log(i);
            if (i === 20) clearInterval(timerId);
            i++;
        }, 100);
}

printNumbersInterval();