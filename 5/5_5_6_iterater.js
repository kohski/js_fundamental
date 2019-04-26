let data_ary = ['one','two','three']
let data_str = 'aioueo'
let data_map = new Map([['MON','月曜'],['TUE','火曜'],['WED','水曜']])

for(let d of data_ary){
  console.log(d);
}
for(let d of data_str){
  console.log(d);
}
for(let [key,value] of data_map){
  console.log(`${key}:${value}`);
}

// 原始的な記述は以下
// Symbol.IteratorメソッドはIteraterオブジェクトを返す
// Iteratorオブジェクトはnextメソッドをもつ　{ done: true/ flase, value: ... }
let itr = data_ary[Symbol.iterator]();
let d;
while(d = itr.next()){
  if(d.done){
    break;
  }
  console.log(d.done);
  console.log(d.value);
}