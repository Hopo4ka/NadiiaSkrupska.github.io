var image = {
    width: 100,
    height: 400,
    title: 'Cool image',
    title1: '200'
};

function multiplyNumeric(image) {
    for (var key in image) {
        if (typeof image[key] == 'string') {
            image[key] = image[key];
        } else {
            image[key] = image[key] * 2;
        }
    }
    return image;
}

console.log(multiplyNumeric(image));