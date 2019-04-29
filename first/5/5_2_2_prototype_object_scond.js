let Member = function(firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
}

let mem = new Member('Yoko','Miyamoto');

// インスタンス生成後にprototypeオブジェクトにメソッドを追加
Member.prototype.getName = function(){
  return this.lastName + ' ' + this.firstName;
};

// インスタンスへのコピーではなくprototypeオブジェクトへの暗黙の参照なので
// インスタンスから問題なく参照できている
console.log(mem.getName());

