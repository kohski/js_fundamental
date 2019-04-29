function Triangle(){
  // thisじゃなくてTriangleにスコープを持ったローカル変数 = プライベートメンバー
  // provateメンバーは変数であれ関数であれ_をつけるのが通例。やんなくてもいい。
  let _base;
  let _height;

  // 引数のtypeと0以上かをチェック
  let _checkArgs = function(val){
    return (typeof val === 'number' && val > 0);
  }
  
  // this.method名で特権メソッド（プライベートメンバにアクセスできるメソッド）を定義
  // functionの入れ子なので、プライベートメンバをスコープにもったクロージャとして使用
  // ただこれはかなりレガシーな書き方なので、Object.definePropertyでアクセサーメソッドを定義する
  this.setBase = function(base){
    if(_checkArgs(base)){ _base = base; }
  
  this.getBase = function(){ return _base; }

  this.setHeight = function(height){
    if(_checkArgs(height)){ _height = height; }
  }
  this.getHeight = function(){ return _height; }
}

Triangle.prototype.getArea = function(){
  return this.getBase() * this.getHeight() / 2;
}

let t = new Triangle();
t._base = 10;
t._height = 2;
console.log(t.getArea());

t.setBase(10);
t.setHeight(2);
console.log(t.getBase());
console.log(t.getHeight());
console.log(t.getArea());

