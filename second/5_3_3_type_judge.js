let Animal = function(){};
let Hamster = function(){};
Hamster.prototype = new Animal();


let a = new Animal();
let h = new Hamster();

console.log(a.constructor);
console.log(h.constructor);
// hはHamsterクラスのインスタンスだけど、あくまでコンストラクタは継承元のAnimalなので
// これはfalseになる
console.log(h.constructor === Hamster);


// instanceofなら直の関係がわかる
console.log(a instanceof Animal);
console.log(h instanceof Hamster);

//prototype継承も確認できる
console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(a));

// in演算子でメンバー判定
let obj = { hoge: function(){}, foo: function(){} };

console.log('hoge' in obj);
console.log('bar' in obj);
