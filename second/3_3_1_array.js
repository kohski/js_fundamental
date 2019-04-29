ary = [];
ary
ary = new Array('sato','suzuki','tanaka')
ary
ary = new Array(10)
ary

ary2 = ['sato','suzuki','tanaka']
ary3 = ['miyamoto','ishihara','sato']
console.log(ary2.length);
console.log(Array.isArray(ary2));
console.log(ary2.toString());
console.log(ary2.indexOf('suzuki'));
console.log(ary2.indexOf('ayanokoji'));

console.log(ary2.join('/'));
console.log(ary2.join('/').split('/'));

console.log(ary2.slice(1));
// 1 から2の手前まで
console.log(ary2.slice(1,2));
// 1 から1個分 破壊的なんやな！
console.log(ary2.splice(1,1));

//Arrayオブジェクトのofメソッドで配列生成
console.log(Array.of(10,20,30,));
console.log(new Array(10).fill('tim'));

//配列操作系
  console.log(ary2.pop());
  console.log(ary2);

  console.log(ary2.push('enomoto'));
  console.log(ary2);
  
  // 末尾をpop
  console.log(ary2.shift());
  console.log(ary2);
  
  // 先頭にpush
  console.log(ary2.unshift('sato'));
  console.log(ary2);
  
//配列整える系
console.log(ary3.reverse());
console.log(ary3.sort());
  



