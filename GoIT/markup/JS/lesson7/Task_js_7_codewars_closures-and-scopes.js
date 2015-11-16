function createFunctions(n) {
  var callbacks = new Array(n);
  
  for (i = 0; i < n; i++)
    callbacks[i] = 1;
  
  callbacks.forEach(function(v, i, a){
    a[i] = function(){ return i; };
  });
  
  
  return callbacks;
}


var array = createFunctions(5);

console.log(array[0]());
