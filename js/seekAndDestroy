
function destroyer(arr) {
   var badValues = Array.prototype.slice.call(arguments);
   badValues.shift();
  return arr.filter(function(x) {return badValues.indexOf(x) == -1;});
}



destroyer([1, 2, 3, 1, 2, 3], 2, 3);
