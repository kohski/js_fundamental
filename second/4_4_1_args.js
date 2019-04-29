function showMessage(value){
  console.log(value);
}

// 引数の不足も問題なし
showMessage();
showMessage('kimkim');
// 引数の過剰も問題なし。無視されるだけ。
showMessage('miyamoto','yoko');


// 対策するならこんな感じ
function showMessage2(value){
  // ここで引数チェック
  if(arguments.length !== 1){
    throw new Error('wrong number of arguments:' + arguments.length);
  };
  console.log(value);
}
try{
  showMessage2('miyamoto','yoko')
}catch(e){
  console.log(e);
}


// デフォルト引数を設定する（旧来スタイル）
function getTriangle(base, height){
  if(base === undefined){base = 1};
  if(height === undefined){height = 1};
  return base * height / 2;
}
// 省略できるのはあくまで一番後ろから連続する引数だけ
console.log(getTriangle());


// lengthable arguments
function sum(){
  let result = 0;
  for(let i = 0; i < arguments.length; i++ ){
    let tmp = arguments[i];
    if(typeof tmp !== 'number'){
      throw new Error('not number arguments exists :' + tmp);
    }
    result += tmp
  }
  return result;
}

try{
  console.log(sum(1,3,5,7,''));
}catch(e){
  console.log(e);
  
}

