function closure(init){
  let counter = init;
  return function(){
    return init++;
  }
}

let myClosure = closure(10);
console.log(myClosure());
console.log(myClosure());
console.log(myClosure());
