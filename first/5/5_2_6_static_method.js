// そもそもそ静的メソッドって？
// クラスメソッドの事。prototypeには登録できないので注意

let Area = function(){};

Area.version = '1.0';

Area.triangle = function(base, height){
  return base * height / 2 ;
};

Area.diamond = function(width, height){
  return width * height / 2;
}

console.log(Area.version);
console.log(Area.triangle(5,4));

let a = new Area();
// インスタンスからは呼び出せない
// console.log(a.diamond(10,2));


// オブジェクトで値を保持したいときに、外部から読み取り専用で使う用途に絞るべき
// 静的メソッド内でのthisはコンストラクタ自信をさし、基本的には意味ない。
// 静的メソッドは働きはほぼグローバル関数だけど、名前衝突を防ぐ為に用いられる
