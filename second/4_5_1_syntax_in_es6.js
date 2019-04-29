// default引数！楽チン！
function getTriangle(a, b = 2){
  return a * b;
}
console.log(getTriangle(10));

//末尾がデフォルト値じゃないパターン
function getValue(a = 10, b){
  return a * b
}
//undefinedを明示的に渡した場合のみdefault数値が当たる
console.log(getValue(undefined,20));



// 必須引数の定義
function required(){
  throw new Error('lack of arguments count');
}

function hoge(value = required() ){
  return value;
}

try{
  hoge()
}catch(e){
  console.log(e);
}