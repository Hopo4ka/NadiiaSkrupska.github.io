var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(image) {
    for (var key in image) {
        if (isNaN(image[key])) {
            image[key] = image[key];
        } else {
            image[key] = image[key] * 2;
        }
    }
    return image;
}

console.log(multiplyNumeric(image));