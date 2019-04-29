let Animal = function(){};

Animal.prototype ={
  walk: function(){
    console.log('dodododododododododo');
  }
}

let SuperAnimal = function(){};
SuperAnimal.prototype = {
  walk: function(){
    console.log('tottokotottoko');
  }
}

// JSでの継承関係は動的なのでインスタンス生成後に継承関係を変えることもできる。
// 誰得？
let Dog = function(){};
Dog.prototype = new Animal();

let d1 = new Dog();
d1.walk();

Dog.prototype = new SuperAnimal();
let d2 = new Dog();
d2.walk();