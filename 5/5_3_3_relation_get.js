let Animal = function(){};
let Hamster = function(){};
Hamster.prototype = new Animal();

let a = new Animal();
let h = new Hamster();

// constructorメソッドでコンストラクタを取得できるが
console.log(a.constructor === Animal);
//以下二つより、継承先で生成されたインスタンスでも、
//constructorメソッドで取得できるのは親クラス
console.log(h.constructor === Animal);
console.log(h.constructor === Hamster);

//isntanceofはprototypeチェーンを遡って確認する
console.log(h instanceof Animal);
console.log(h instanceof Hamster);

//オブジェクトが参照しているプロトアイプを参照
console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(h));


let obj = {
  hoge: function(){},
  foo: function(){}
}

console.log('hoge' in obj);
console.log('bar' in obj);

