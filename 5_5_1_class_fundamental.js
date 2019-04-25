class Member{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get function(){
    return this.firstName
  }
  set function(value){
    this.firstName = value;
  }
  get function(){
    return this.lastName
  }
  set function(value){
    this.lastName = value;
  }
  getName(){
    return this.lastName + this.firstName;
  }

  static getFullNameWithHonorific(firstName, lastName){
    return firstName +' '+ lastName + ' san'
  }
}

let m = new Member('Yoko','Miyamoto');
console.log(m);
console.log(m.firstName = 'YokoChan');
console.log(m.firstName);
console.log(m.lastName);

console.log(Member.getFullNameWithHonorific('miya','yo'));
// console.log(m.getFullNameWithHonorific('miya','yo'));

