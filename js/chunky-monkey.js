function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var numSegs;
  if (size <= arr.length) {
    numSegs = arr.length/size;
  }
  else {
    numSegs = arr.length;
  }
  /*if (arr.length%size > 0) {
    numSegs += 1;
  } */
  for (i = 0; i < numSegs; i++) {
    newArr.push(arr.slice((size*i),(size*(i+1))));
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
