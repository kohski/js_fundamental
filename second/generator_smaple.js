function* shopping(){
	//歩道
  //歩く
  //店に行く
  const stuffFromStore = yield 'money';
  const cleanClothes = yield '汚れた服';
  return [stuffFromStore, cleanClothes];
}

let gen = shopping();
console.log(gen.next());
console.log(gen.next('grossary'));
console.log(gen.next('clean clothes'));

