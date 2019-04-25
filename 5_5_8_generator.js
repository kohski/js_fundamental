function* myGenerator(){
  yield 'aiueo';
  yield 'kakikukeko';
  yield 'sasisuseso';
}

for(let t of myGenerator()){
  console.log(t);  
}