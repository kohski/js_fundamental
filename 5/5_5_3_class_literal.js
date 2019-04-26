// objectリテラルの話
let member = {
  name: 'Miyamoto Yoko',
  birth: new Date(1990,7,2),
  toString(){
    return this.name + ' / birthday:' + this.birth.toLocaleString()
  }
};
console.log(member.toString());

//===============================================================


// つまりオブジェクトリテラルの記法強化により、
// key,valueが同名なら省略可能になった
let name = 'Yoko';
let birth = new Date(1990,7,2);
let member2 = {name, birth};
console.log(member2.name);
