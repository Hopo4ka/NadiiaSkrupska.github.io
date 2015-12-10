/* Создайте декоратор makeLogging(func, log), для функции func
возвращающий обёртку, которая при каждом вызове добавляет её
аргументы в массив log.
 Условие аналогично задаче Логирующий декоратор (1 аргумент),
 но допускается func с любым набором аргументов.
*/

function work(a, b) {
    console.log( a + b );
}

function makeLogging(f, log) {
    function wrap() {
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }
    return wrap;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i];
    console.log( 'Лог:' + args.join(',') );// "Лог:1,2", "Лог:4,5"
}