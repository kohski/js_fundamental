(function(){
  var i = 5;
  console.log(1);
}).call(this)
// 擬似的にiのスコープを閉じることができる
// console.log(i);

if(true){
  let h = 5
}
//letはブロックレベル
// console.log(h);

