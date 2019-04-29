let Member = function(firstName, lastName){
  // 呼び出された時点でインスタンスを返しちゃう！
  if(!(this instanceof Member)){
    return new Member(firstName,lastName)
  };
  this.firstName = firstName;
};

let m = Member('Yoko','Miyamoto');
console.log(m);
console.log(m.firstName);
console.log(m.lastName);
// console.log(firstName);

