function Triangle(){
  let _base;
  let _height;

  // base プロパティの設定
  Object.defineProperty(
    // propertyを設定するオブジェクト。ここではthis = Triangleオブジェクト
    this,
    // property名
    'base',
    // propertyの構成要素ｓ
    {
      get: function(){
        return _base;
      },
      set: function(base){
        if(typeof base === 'number' && base > 0){
          _base = base
        }
      }
    }
  )
  
  Object.defineProperty(
    this,
    'height',
    {
      get: function(){
        return _height;
      },
      set: function(height){
        if(typeof height === 'number' && height > 0){
          _height = height
        }
      }
    }
  )
}

Triangle.prototype.getArea = function(){
  return this.base * this.height / 2;
}
let t =  new Triangle();
t.base = 10;
t.height = 3;
console.log(t.getArea());



