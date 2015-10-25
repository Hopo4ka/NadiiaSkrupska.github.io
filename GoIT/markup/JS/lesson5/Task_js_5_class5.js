var arr = ['go', 3, 'value', false];

function find(arr, elem) {
    var result = -1;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === elem) result = i;
    } return result;
}

console.log(find(arr, 'value'));