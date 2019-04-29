// construactorに直接メソッドを定義していると、インスタンスにも全てコピーしてしまい、
// 非常にメモリーの効率が悪い。
// と言うことで、methodだけは、コンストラクタのprototypeオブジェクトにまとめめて定義しておく。
// インスタンスは自身の領域にメソッドをもつのではなく、prototypeを参照することで、
// メモリの効率化を図ることができる。
// また、各オブジェクトはprototypeを暗黙的・静的に参照するので、後から定義してもOK

let Member = function(lastName, firstName){
  this.lastName = lastName;
  this.firstName = firstName;
}
Member.prototype.getName = function(){
  return this.lastName + ' ' + this.firstName
}

let mem = new Member('Miyamoto','Yoko');

console.log(mem);
console.log(mem.getName());
