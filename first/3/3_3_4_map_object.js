let m = new Map();
m.set('dog','bowwow');
m.set('cat','miew');
m.set('mouse','choochoo');
//コンストラクタからいきなり定義もOK
m2 = new Map([['Miyamoto','Yoko'],['Kimura','Kosuke']])
m2

for(let key of m.keys()){
  console.log(key)
}

for(let key of m.values()){
  console.log(key)
}

for(let [key,value] of m){
  console.log(key);
  console.log(value);
}

console.log(m.size);


m.delete('dog');
m

m.clear();
m

