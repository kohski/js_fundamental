function sum(){
  var result = 0;
  // argumentsでアクセスする
  for(var i = 0; i < arguments.length; i++){
    var tmp = arguments[i];
    if (typeof tmp !== 'number'){
      throw new Error('at least one argument is not number')
    }
    result += tmp;
  };
  return result;  
}

try{
  console.log(sum(1,3,4,5,6));
}catch(e){
  console.log(e.message)
}