let Animal = function(){};

Animal.prototype = {
  walk: function(){
    console.log('animal walk');
  }
}

// DogのインスタンスのthisがAnimalを参照するようにしている？
let Dog = function(){
  Animal.call(this);
}

// DogのprototypeにAnimalを代入する。
Dog.prototype = new Animal();
Dog.prototype.bark = function(){
  console.log('bowwow');
};

let d = new Dog();
d.walk();
d.bark();