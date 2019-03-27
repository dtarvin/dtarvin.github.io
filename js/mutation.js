function mutation(arr) {
  /* var array = arr.split(','); */
  var allLtrs;
  var ltr;
  arr = arr.map(function(e) {
       return e.toLowerCase();               
          });
  for (i = 0; i < arr[1].length; i++) {
    ltr = arr[1].charAt(i);
    if (arr[0].indexOf(ltr) === -1) {
      allLtrs = false;
    }
    if (allLtrs !== false) {
      allLtrs = true;
    }
  } 
  return allLtrs;
}

mutation(["hello", "hey"]);
