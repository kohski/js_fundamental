var Member = function(name, age){
  this.name = name;
  this.age = age;
}

Member.prototype = {
  getName: function(){
    return this.name;
  },
  getAge: function(){
    return this.age;
  }
}