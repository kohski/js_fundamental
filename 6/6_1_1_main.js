var current = new Date()
var result = document.getElementById('result');
result.textContent = current.toLocaleString();

var list = document.getElementsByTagName('a');
// 個別のアクセスはitemメソッドを通すか、for of文で。
// と思ったけどなんでもいいみたい。
// for(let i = 0; i < list.length; i++){
//   console.log('exp1/**/'+list.item(i).href);  
// }
// for(let d of list){
//   console.log('exp2/**'+d.href);
// }

// let name = document.getElementsByName('time')
// name[0].value = current.toLocaleTimeString();

// let names = document.getElementsByClassName('my');
// for(let d of name){
//   console.log('exp3/**'+d);
// }

let list_q = document.querySelectorAll('#list .exp4_tgt');
for(let d of list_q){
  console.log(d);
}

//get***シリーズの方が高速なのでそちらを使うのが吉！