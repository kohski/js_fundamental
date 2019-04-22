// 定義式 new Symbolはできない
let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1);
console.log(sym1.toString());
console.log(sym1 === sym2)

// あるあるの型変換はできないが、Boolean型へはOK
// console.log(sym1 + '');
// console.log(sym1 - 0);
console.log(!!sym1);

// usecaseは以下
const MONDAY = 0; // <= if文で0とか記述するのは可読性落ちる
const MONDAY = Symbol(); // <= こっちなら安心
console.log(typeof(MONDAY));
  