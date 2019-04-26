var Wings = Wings || {};

Wings.Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

Wings.Member.prototype = {
  getName : function(){
    return this.lastName + ' ' + this.firstName;
  }
};

var mem = new Wings.Member('Miyamoto','Yoko');
console.log(mem.getName());
