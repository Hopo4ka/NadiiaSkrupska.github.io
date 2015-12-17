/*Create a class Ghost
 Ghost objects are instantiated without any arguments.
 Ghost objects are given a random color attribute of white" or "yellow"
 or "purple" or "red" when instantiated

 ghost = new Ghost();
 ghost.color //=> "white" or "yellow" or "purple" or "red"*/

var Ghost = function() {
    var color = ['white', 'yellow', 'purple', 'red'];
    this.color = color[Math.floor(Math.random() * color.length)];
};

var ghost = new Ghost();

console.log( ghost.color );