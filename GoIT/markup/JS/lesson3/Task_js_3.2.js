var a=2, b=10;
nextnum: for (i=a; i<=b; i++) {
    for(j=2; j<=Math.sqrt(i); j++){
        if(i%j===0) {
            continue nextnum;
        }
    }
    console.log(i + ' - prime');
}