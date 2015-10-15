function drawBoard(w, h) {
    var str = '';
    for (i=1; i<=h; i++) {
        for (j=1; j<=w; j++) {
            if (((i+j) % 2) == 1)
            str += ' ';
            else
            str += '#';
        }
        str += '\r\n';
    }
    console.log(str);
}
drawBoard(8, 8);