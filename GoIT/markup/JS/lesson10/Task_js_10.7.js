/*Write a function shuffle(arr) to shuffle an array.*/

function shuffle(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {

        var randInd = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = arr[randInd];

        arr[randInd] = arr[i];
        arr[i] = itemAtIndex;
    }
    return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));