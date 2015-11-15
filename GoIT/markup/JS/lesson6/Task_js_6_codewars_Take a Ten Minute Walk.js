function isValidWalk(walk) {
  if (walk.length === 10) {  
    var x = 0, y = 0;
    for (var k in walk) {
      if (walk[k] === 'n') y++;
      if (walk[k] === 's') y--;
      if (walk[k] === 'w') x++; 
      if (walk[k] === 'e') x--;
    }
   if (x === 0 && y === 0) return true;
  } 
  return false;
 
 }
