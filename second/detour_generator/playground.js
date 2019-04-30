// とりあえずfor of ループ
const colors = ['red','green','blue'];
for(let color of colors){
  console.log(color);
}

const numbers = [1,2,3,4,5]
let total = 0;
for(let number of numbers){
  total += number;
}
total


// よろしい、ならばgeneraterだ
function* numbers(){
  yield;
}
const gen = numbers();
gen.next();
gen.next();


