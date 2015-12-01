/*Напишите функцию unique(arr), которая возвращает массив,
содержащий только уникальные элементы arr (arr — массив строк).*/

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе',
    'кришна', 'кришна', '8-()' ];

function unique(value, index, arr) {
    return arr.indexOf(value) == index;
}

console.log(strings.filter(unique)); // кришна, харе, 8-()