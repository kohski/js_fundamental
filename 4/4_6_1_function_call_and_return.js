function getMaxMin(...nums){
  return [Math.max(...nums),Math.min(...nums)]
};

console.log(getMaxMin(1,3,4,2,4,6));

let [max,min] = getMaxMin(1,3,5,2,4,6)
console.log(max);
console.log(min);

