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

class BusinessMember extends Member{
  constructor(firstName, lastName, clazz){
    // superは必ず先頭で！
    super(firstName, lastName);
    this.clazz = clazz;
  }
  getName(){
    return super.getName() + '/' + this.clazz 
  }
  work(){
    return this.getName() + 'is working'
  }
}

let bm = new BusinessMember('Tamachi','Maki','Manager');
console.log(bm.getName());
console.log(BusinessMember.getFullNameWithHonorific('Tamachi','Mitaka'))
