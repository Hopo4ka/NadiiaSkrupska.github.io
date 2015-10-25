var arr = [5, 7, 4, 8, 3, 0],
    filtered = [];

function filterRange(arr, a, b){
    for (i = 0; i < arr.length; i++) {
        if (a <= arr[i] && arr[i] <= b) filtered.push(arr[i]);
    } return filtered;
}

console.log(filterRange(arr, 3, 5));