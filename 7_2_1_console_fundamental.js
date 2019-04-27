//コンソールの種類。ブラウザ側でソート可能
console.log('ログ');
console.info('情報');
console.warn('警告');
console.error('エラー');

// グループ化できる。
console.group('outer');
for(var i = 0 ; i < 3 ;i ++){
  console.group('inner group'+i);
  for(let j = 0; j < 3; j ++){
    console.log(i,j);
    
  }
  console.groupEnd();
}
console.groupEnd();


// console.count(ラベル名) ラベルを通過した回数が出力される
// 複数箇所に同名ラベルがあってもカウントアップされる
for(let i = 0;i < 3; i++){
  for(let j = 0; j < 3; j++){
    console.count('Loop');
  }
}
console.count('Loop');

//console.timer() => console.timerEnd()
console.time('MyTimer');
window.alert('確認して');
console.timeEnd('MyTimer');

// console.assert()
function circle(radius){
  console.assert(typeof radius === 'number' && radius>0,'正の数で入力なさい');
  return radius*radius*Math.PI;
}
console.log(circle(-5));

//console.dir()みやすい！
console.log(window);
console.dir(window);