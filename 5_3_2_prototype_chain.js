let Animal = function(){};

Animal.prototype = {
  walk: function(){
    return 'nosso... nosso...';
  }
}

let SuperAnimal = function(){};
SuperAnimal.prototype = {
  walk: function(){
    return 'dadadadada...';
  }
};

// JSにおいては継承関係は動的に決まるので、同じDogクラスからのインスタンスである
// d1/d2だけど、継承元を途中で変えたのでwalk()がちがうという...
// インスタンスの生成時点で固定されると考えるようだ！

let Dog = function(){};
Dog.prototype = new Animal();
let d1 = new Dog();
console.log(d1.walk());

Dog.prototype = new SuperAnimal();
let d2 = new Dog();
console.log(d2.walk());

