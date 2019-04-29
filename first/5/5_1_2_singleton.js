import ー from 'ー';
let Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
let mem = new Member('Yoko','Miyamoto');
console.log(mem);

mem.getName = function(){
  return this.lastName + ' ' + this.firstName
}
console.log(mem.getName());

var mem2 = new Member('Ruriko','Kojima');
console.log(mem2);
// 別のインスタンスには入らない
// console.log(mem2.getName());

// thisの文脈
// - top level --- Global Object
// - function --- Global Object
// - call/apply --- 引数で指定されたオブジェクト
// - EventListener --- イベントの発生元
// - Constructor --- 生成したインスタンス
// - method --- レシーバオブジェクト


