function getMaxMin(...nums){
  return [Math.max(...nums),Math.min(...nums)]
}

let result = getMaxMin(2,4,1,3);
console.log(result);

let [max, min] = getMaxMin(2,4,1,3);
console.log(max);
console.log(min);
