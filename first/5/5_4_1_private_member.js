function Triangle(){
  // privateメンバーはthisじゃなくてvarで定義
  var _base;
  var _height;
  var _checkArgs = function(val){
    return (typeof val === 'number' && val > 0);
  }

  // privateメンバーにアクセスできるのは、コンストラクタ内に定義した特権メソッドのみ
  // これはfunctionの入れ子なので、要はクロージャーである。
  // 特権メソッドが定義時のコンテキストに則り、privateメンバーを参照しているので
  // いい感じになった
  this.setBase = function(base){
    if(_checkArgs(base)){
      _base = base;
    }
  }
  this.getBase = function(){
    return _base;
  }
  this.setHeight = function(height){
    if(_checkArgs(height)){
      _height = height;
    }
  }
  this.getHeight = function(){
    return _height
  }
}

Triangle.prototype.getArea = function(){
  return this.getBase() * this.getHeight() / 2;
}

var t = new Triangle();
t._base = 10;
t._height = 2;
console.log(t.getArea());

t.setBase(10);
t.setHeight(2);
console.log(t.getBase());
console.log(t.getHeight());
console.log(t.getArea());











