// 定義前呼び出しできなくなってる
// let m2 = new Member('Yoko','Miyamoto');

// 非常に理にかなってるね。
class Member {
  // def initialize(); end in Ruby
  constructor(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
  }

  // puroperty定義
  get function(){
    return this.first_name;
  }
  set function(val){
    return this.first_name = val;
  }
  get function(){
    return this.last_name;
  }
  set function(val){
    return this.last_name = val;
  }

  //静的メソッド定義
  static greeting(first_name){
    return `hello, ${first_name}`;
  }

  // all methods are public in JS differet from Ruby.
  getName(){
    return this.last_name + this.first_name
  }
}

// 特に対策せずとも関数呼び出しできなくなってる。
// レガシー環境では、if( arg instanceof クラス){ new クラス }って対策していたけど。
// let m3 = Member('Yoko','Miyamoto');
let m = new Member('Yoko','Miyamoto');
console.log(m.getName());
console.log(Member.greeting('Yoko-chan'));

// 継承はextendsで！

class BusinessMember extends Member{
  work(){
    return super.getName() + ' is working!'
  }
  getName(){
    return super.getName() + ' likes me'
  }
}
let bm = new BusinessMember('Yoko','Miyamoto');

console.log(bm.getName());
console.log(bm.work());

