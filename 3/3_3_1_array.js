
let array = new Array(10,20,30,)
array
// [10]ではなく10のから要素をもつ配列と判断
array = new Array(10)
array
//空の配列マイナス10個となり、エラーを返す
// array = new Array(-10)
// array

// usage
ary1 = ['sato','suzuki','enomoto','enomoto']
ary2 = ['tsuruta','kanayama']

console.log(ary1.length);
console.log(Array.isArray(ary1));
console.log(ary1.toString());
console.log(ary1.indexOf('enomoto'));
console.log(ary1.lastIndexOf('enomoto'));

console.log(ary1.concat(ary2));
console.log(ary1.join('/'));
console.log(ary1.slice(2,));
console.log(ary1.slice(1,2));
//spliceは第3引数以降で置き換えを指定できる
console.log(ary1.splice(ary1.splice(1,2,'tokisaki','okada')));

// 新規配列の作成
console.log(Array.of(10,20,30));
console.log(ary2.fill('Sasaki',1,2));
console.log(ary2);

console.log(ary2.push('kondo'));
console.log(ary2);

console.log(ary2.pop());
console.log(ary2);

console.log(ary2.shift());
console.log(ary2);

console.log(ary2.unshift('uchiyama'));
console.log(ary2);

console.log(ary2.reverse());
console.log(ary2.sort();

