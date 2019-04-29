let m = new Map();

m.set('miyamoto','yoko');
m.set('ishihara','fuki');
m.set('nagamine','yuki');

console.log(m);
console.log(m.size);
console.log(m.has('miyamoto'));
console.log(m.has('enomoto'));

for(let key of m.keys()){
  console.log(key);
}

for(let value of m.values()){
  console.log(value);
}

for(let [key, value] of m){
  console.log(key);
  console.log(value);
}

m.delete('ishihara');
console.log(m);

m.clear();
console.log(m);

