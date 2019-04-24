function getTriangle(base=1, height=1){
  return base * height / 2
}
console.log(getTriangle(5));

// 引数に別の引数を渡すことも可能
function multi(a,b = a){
  return a * b;
}
console.log(multi(3));

// 0/null/falseも渡してしまえばそれが適用されてdefault引数は無視される
console.log(getTriangle(5,null));  
// undefinedを私場合は、デフォルト引数が渡される
console.log(getTriangle(5,undefined));  

// デフォルト引数は引数リストの末尾にすべき
function getTriangel2(base=1,height){
  return base * height /2
}
//こうなっちゃうから。
console.log(getTriangel2(19));


//

