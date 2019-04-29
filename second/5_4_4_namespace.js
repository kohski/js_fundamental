var Wings = Wings || {};


Wings.Member = function(first_name, last_name){
  this.first_name = first_name;
  this.last_name = last_name;
};

Wings.Member.prototype = {
  getName:function(){
    return this.last_name + ' '+ this.first_name;
  }
}

let mem = new Wings.Member('Miyamoto','Yoko');
console.log(mem.getName());
