let Member = function(firstName, lastName){
  // ここを加えるとthisがMemberのインスタンスならって条件分岐ができる
  if(!(this instanceof Member)){
    return new Member(firstName, lastName);
  }
  this.firstName = firstName;
  this.lastName = lastName;
};

let m = Member('Yoko','Miyamoto');
console.log(m);
console.log(firstName);
firstName
// functionとして呼び出すと、thisはグローバルオブジェクトを指し示す。
// ということで、firstNameはグローバル変数になってしまう。
// console.log(m.firstName);



