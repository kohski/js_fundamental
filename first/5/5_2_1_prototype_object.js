// コンストラクタで定義されたオブジェクトはインスタンス化するたびに全てをコピーする
// メソッドが多いとメモリを無駄に食う原因となりうる。
// そこでprototypeオブジェクトにメソッド定義をすると、
// instanceが暗黙的にそれを参照するようになる

let Member = function(firstName, lastName){
  this.firstName = firstName,
  this.lastName = lastName
};

Member.prototype.getName = function(){
  return this.lastName + ' ' + this.firstName
};

//mem自身の特異メソッドを検索=>なければprototypeオブジェクトを参照
let mem = new Member('Miyamoto','Yoko');
console.log(mem.getName());
