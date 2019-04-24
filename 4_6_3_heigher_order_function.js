function arrayWalk(data,f){
  for(var key in data){f(data[key],key)}
};

function showElement(value,key){
  console.log(key + ':' + value );
};

var result = 0;
function sumElement(value,key){
  console.log(result += value);
}


var ary = [1,2,4,8,16];
arrayWalk(ary, showElement);
arrayWalk(ary, sumElement);
// arrayを循環する動作はそのままにここのelmに加える処理は別途指定できる

var ary = [1,2,4,8,16]

arrayWalk(
  ary,
  function(value,key){
    console.log(key + ':' + value);
  }
);
