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
  work(){
    return this.getName() + 'is working'
  }
}

let bm = new BusinessMember('Tamachi','Maki');
console.log(bm.getName());
console.log(BusinessMember.getFullNameWithHonorific('Tamachi','Mitaka'))
