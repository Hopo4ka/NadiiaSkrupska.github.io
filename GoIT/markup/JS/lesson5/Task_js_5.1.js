// in order to deliver the rigth solution, I have changed conditions a little bit, as 99 was the last number
var tasksCompleted = {
    'Anna': 29,
    'Serg': 99,
    'Elena': 1,
    'Anton': 35
};

function maxNum(obj) {
    var counter = 0;
    for (var item in obj) {
        if (counter < obj[item]){
            counter = obj[item];
            var result = item + ' - ' +counter;
        } else {
            continue;
        }
    }
    return result;
}

console.log(maxNum(tasksCompleted));