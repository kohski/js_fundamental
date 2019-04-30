let data_ary = ['one','two','three'];
let data_str = 'あいうえお';
let data_map = new Map([['MON','月曜日'],['TUE','火曜日'],['WED','水曜日']]);

for(let d of data_ary){
  console.log(d);
}
for(let d of data_str){
  console.log(d);
}
for(let [key,value] of data_map){
  console.log(`${key}: ${value}`);
}

// arrayには[Symbol.iterater]が暗黙のうちに規定されている
// それを呼び出すと、iteraterオブジェクトが帰ってくる。
// iteraterオブジェクトは内部のどこのyieldまで進んだかを記憶している。
// 返却は{ value: ... , done: boolean }を返す！
let itr = data_ary[Symbol.iterator]();
let d;
while(d = itr.next()){
  if(d.done){ break; }
  console.log(d.done);
  console.log(d.value);
}