var data = 'Global Data'
var obj1 = { data:'obj1 data' };
var obj2 = { data:'obj2 data'};

function hoge(){
  return this.data;
}

console.log(hoge.call(null));
console.log(hoge.call(obj1));
console.log(hoge.call(obj2));


function hogehoge(){
  // var args = Array.prototype.slice.call(arguments);
  // console.log(args.join('/')); 
  let args = Array.from(arguments);
  console.log(args);
   
}

hogehoge('Angular','React','Vue.js');


