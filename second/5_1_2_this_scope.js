let data = 'Global data';
let obj1 = { data:'obj1 data' }
let obj2 = { data:'obj2 data' }

function hoge(){
  //ここのthisはhogeがcallで呼ばれた場合は、callに渡されたオブジェクトになる！
  console.log(this.data);
}

hoge.call(null);
hoge.call(obj1);
hoge.call(obj2);


function hoge(){
  // argsは配列ではなくて配列ライクなのでそのまま配列系のオブジェクトが使えない場合も多い
  // そこでcallを使える。argumentsオブジェクトをthisとして、Array.sliceを呼ぶと言う意味
  let args = Array.prototype.slice.call(arguments);
  console.log(args.join('/'));
}

hoge('','','')

