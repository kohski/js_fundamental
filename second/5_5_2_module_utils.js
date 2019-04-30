const AUTHOR = 'Miyamoto Yoko';

module.exports = class Member{
  constructor(name, age){
    this.name = name
    this.age = age
  };
  getName(){
    return this.name + ' ' + this.age;
  }
};

class Area{
  constructor(base, height){
    this.base = base 
    this.height = height
  }
  getTriangle(){
    return this.base *  this.height / 2;
  }
  getSquare(){
    return this.base * this.height;
  }
};
