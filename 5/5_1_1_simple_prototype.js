let Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function(){
    return this.lastName + ' ' + this.firstName;
  }
}
let mem = new Member('Yoko','Miyamoto');
console.log(mem);
console.log(mem.getName());
