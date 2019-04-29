// 基本形
function getTriangle(base, height){
  return base * height / 2
}
console.log(getTriangle(5,2)); 


// functionオブジェクトのコンストラクタを生成する形も一応可能
let getTriangle2 = new Function('base','height','return base * height /2;');
console.log(getTriangle2(10,3));

// Topレベルオブジェクトっぽいこともいける
let getTriangle3 = Function('base','height','return base * height /2;');
console.log(getTriangle3(15,4));

// 関数リテラル(無名関数)
let getTriangle4 = function(base, height){
  return base * height /2 
}
console.log(getTriangle(20,5));

// アロー関数
let getTriangle5 = (base, height)=>{
  return base * height /2 
}
console.log(getTriangle5(25,6));

// 特殊ルール
// 1.return だけなら{}省略可
getTriangle6 = (base,height) => base * height /2
console.log(getTriangle6(30,7));

getTriangle7 = radius =>{
  return Math.floor(radius ** 2 * Math.PI)
}
console.log(getTriangle7(4));


