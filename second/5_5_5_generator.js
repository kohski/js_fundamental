function* myGenerator(){
  yield 'aiueo';
  yield 'kakkikukeko';
  yield 'sasisuseso';
}

for(let t of myGenerator()){
  console.log(t);
}

