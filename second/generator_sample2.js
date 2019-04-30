function* colors(){
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

let myColors = [];
// yieldが終わるまでfor ofで自動管理してくれる
for(let color of colors()){
  myColors.push(color);
}
myColors
