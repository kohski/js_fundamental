let obj = {x:1,y:2,z:3}
console.log(obj);


let obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;
console.log(obj2);


// prototype継承について！
// configuration 属性の変更の許可
// enumerable 列挙を可能とするか
// value 値
// writable 書き換え可能か
// get / set => getter / setter
let obj3 = Object.create(Object.prototype,{
  x:{value:1, writable: true, configurable: true, enumerable: true},
  y:{value:2, writable: true, configurable: true, enumerable: true},
  z:{value:3, writable: true, configurable: true, enumerable: true},
})
console.log(obj3);
