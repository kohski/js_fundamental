// let以前は即時関数と言う手法でブロックレベル変数を実装していた
(function(){
  var i = 5;
  console.log(i);
}).call(this);

// scope外になってる！
// console.log(i);
