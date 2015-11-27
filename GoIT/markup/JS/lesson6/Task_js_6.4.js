var vasya = {name: '????', age: 23};
var masha = {name: '????', age: 18};
var vovochka = {name: '???????', age: 6};

var people = [masha, vovochka, vasya];

function sortName(a, b) {
    return a.age - b.age;
}

console.log(people.sort(sortName));