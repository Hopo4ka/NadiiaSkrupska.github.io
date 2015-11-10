var globalObj = {
    className: 'open open menu blabla'
};

var arr = globalObj.className.split(' ');

function removeClass(localObj, cls){
    var t = [];
    for (var i=0; i<localObj.length; i++) {
        if (localObj[i] !== cls) {
            t.push(localObj[i]);
        }
    }
    return t;
}

console.log(removeClass(arr, 'open'));
console.log(removeClass(arr, 'blabla'));