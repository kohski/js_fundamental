let Animal = function(){};
Animal.prototype = {
  walk:function(){
    console.log('nosso... nosso...');
  }
};
let Dog = function(){
  Animal.call(this);
};
Dog.prototype = new Animal();
Dog.prototype.bark = function(){
  console.log('bow wow');
};
let d = new Dog();
d.walk();
d.bark();