function Calculator(){

    var func_arr = {
        "+" : function(a,b){return a+b;},
        "-" : function(a,b){return a-b;}
    };

    this.calculate = function(value) {
        var elem = value.split(' ');
        return func_arr[ elem[1] ](+elem[0], +elem[2]);
    };

    this.addMethod = function(name, func){
        func_arr[name] = func;
    };

}

var calc = new Calculator();

calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("pov", function(a, b) {
    return Math.pow(a,b);
});
console.log( calc.calculate("3 * 7") );
console.log( calc.calculate("2 pov 2") );
console.log( calc.calculate("3 + 7") ); // 10
console.log( calc.calculate("3 - 7") );