// functionオブジェクトにクラスの役割を与えている
// アロー関数だと定義できない。
// アロー関数使える環境なんだったら素直にclass使えやって意味
// let Animal = ()=>{}
// let anim = new Animal();

let Member = function(first_name, last_name){
  // クラス定義しているfunctionはreturnしたらだめ！
  this.first_name = first_name;
  this.last_name = last_name;
  // valueが関数のものはメソッドと見なされる
  this.getName = function(){
    return this.last_name + this.first_name;
  }
};
let mem = new Member('Yoko','Miyamoto');
console.log(mem); 
console.log(mem.getName());

// 後からメソッド追加も可能
// これを許しなくない場合は、Object.seal(Member)とする。
mem.greet = function(){
  return 'hello, ' + this.first_name
}
// これは静的には呼び出せない
console.log(mem.greet());





