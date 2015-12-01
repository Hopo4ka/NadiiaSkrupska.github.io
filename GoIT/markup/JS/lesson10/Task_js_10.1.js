/*Есть объект из чисел, строк и прочих данных. Необходимо его превратить в
массив состоящий только из чисел или строк. Написать метод extractNumber или
extractString, который будет возвращать массив.*/

var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

function extractString(obj) {
    var names = [];
    for (var key in obj) {
        if (typeof obj[key] == 'string') {
            names.push(obj[key]);
        }
    }
    return names;
}

function extractNumber(obj) {
    var ages = [];
    for (var key in obj) {
        if (!isNaN(+obj[key])) {
            ages.push(obj[key]);
        }
    }
    return ages;
}

console.log(extractNumber(obj));
console.log(extractString(obj));