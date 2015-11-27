var date = new Date(2012, 0, 3); // 3 января 2012

function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[date.getDay()];
}

alert(getWeekDay(date)); // Должно вывести 'вт'
