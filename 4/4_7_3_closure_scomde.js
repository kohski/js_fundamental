let createCounter = function(){
  let cnt = 0;
  return function(){
    cnt += 1;
    return cnt;
  }
};

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


