let pet = {
  type:'snow white hamster',
  name: 'timtim',
  description:{
    birth:"2019-04-10"
  }
}

let pet2 = {
  name: 'kirara',
  color: 'white',
  description:{
    food:'seeds of sun flower'
  }
}

let pet3 = {
  weight: 42,
  photo: 'http://timtim.com'
}

Object.assign(pet,pet2,pet3)
console.log(pet);

// Objectオブジェクトのassingnメソッドでマージができる
// ファーストレベルの同名メソッドで上書き。再帰的評価はしない。
