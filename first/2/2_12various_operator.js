// deleteの性質

let ary = ['JS','Python','Ruby'];

// index番号はくらい上がらない。空要素になるだけ
console.log(delete ary[0]);
console.log(ary);

// objectの場合はなくなる
let obj = {x: 1, y: 2}
console.log(delete obj.x);
console.log(obj);

//----------------------------

var num = 1;
console.log(typeof num);

var str = 'timm'
console.log(typeof str)

var flag = true
console.log(typeof flag);

var array = []
console.log(typeof array);

var object = {}
console.log(typeof object);