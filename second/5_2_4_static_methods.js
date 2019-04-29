let Area = function(){};

// クラスの定数
Area.version = '1.0.0';

// クラスメソッドはプロトタイプに定義しない
// 読み取り専用の用途で。
// thisはインスタンスを参照するので、instanceから参照できない
// クラスメソッドに定義しても仕方がない。
Area.triangle = function(base, height){
  return base * height / 2
}
Area.square = function(base, height){
  return base * height 
}

// 
console.log(Area.triangle(10,2));
console.log(Area.square(10,2));
console.log(Area.version);

// インスタンスからは呼び出せない
// ar = new Area()
// console.log(ar.triangle(10,2));
