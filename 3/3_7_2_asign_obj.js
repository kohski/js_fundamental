let pet = {
  type: 'hamster',
  name: 'hamu-taro',
  description:{
    birth: '2018-05-30'
  }
}

let pet2 = {
  name: 'kirara',
  color:'white',
  description:{
    food: 'seeds of sunflower'
  }
}

let pet3 = {
  weight:42,
  photo:'placeholder'
}

Object.assign(pet,pet2,pet3);
console.log(pet);

// 同名のプロパティは後のもので上書き
// 再帰的マージには非対応
