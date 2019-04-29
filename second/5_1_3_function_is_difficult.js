let Member = function(first_name, last_name){
  this.first_name = first_name
  this.last_name = last_name
}

// 関数として呼び出しちゃう。
let m = Member('Yoko','Miyamoto');
console.log(m);
// this.first_nameはグローバルに定義されてしまう
console.log(first_name);
// インスタンス化していないので呼び出せない
console.log(m.first_name);



