// tree構造でのiteraterの実用
// コメントのツリー構造をつけることができる

class Comment {
  constructor(content, children){
    this.content = content
    this.children = children
  }
  // クラス内は直接メソッド書いたけどその亜種。
  // getName(){ return first_naem +' '+ last_name }
  *[Symbol.iterater](){
    yield this.conten;
    // map forEach　はgeneraternaiでは使えない
    for (let child of this.chiledren ){
      yield* child;
    }
  }
}

const children = [
  new Comment('ageree!!',[]),
  new Comment('Objected!!',[]),
  new Comment('middle way',[])
]

const tree = new Comment('This is very good article!',children);
// console.log(tree);

const values = [];
for(let value of tree){
  values.push(value);
}
console.log(vlues);
