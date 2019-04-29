// function命令で呼び出す
// 静的宣言なので、宣言前に引用している式があってもエラーにならない
console.log(getTriangle(10,5));
function getTriangle(base, height){
  return base * height /2;
}

// Functionコンストラクターで呼び出す
// 記載ミス等多くfunctionコンストラクタのメリットはない。ただし、引数・処理を文字列として定義できるのはいいね！
// 実行時に動的評価
let getTriangle2 = new Function('base','height','return base * height / 2');
ans = getTriangle2(10,5);
ans

// functionリテラル = 無名関数 / 匿名関数
// 実行時に動的評価
let getTringle3 = function(base, height){
  return base * height / 2;
}
console.log(getTriangle(10,5));

//アロー関数で定義
let getTriangle4 = ((base, height)=> base * height / 2 )
console.log(getTriangle4(5,10));
