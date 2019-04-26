const AUTHOR = 'Miyamoto Yoko';

module.exports =class Member {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  get function(){
    return this.firstName
  }
  set function(value){
    this.firstName = value
  }
  get function(){
    return this.lastName
  }
  set function(value){
    this.lastName = value
  }
  getName(){
    return this.firstName + this.lastName
  }
}

class Area {
  constructor(base, height){
    this.base = base
    this.height = height
  }
  get function(){
    return this.base
  }
  set function(value){
    this.base = value
  }
  get function(){
    return this.height
  }
  set function(value){
    this.height = value
  }
  getArea(){
    return this.base * this.height / 2;
  }
}

