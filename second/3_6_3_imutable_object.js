'use strict'

let pet = {
  type: 'snow white hamster',
  name: 'tempra'
}


// Object.preventExtensions(pet); //属性の追加を防止
// Object.seal(pet); //属性の削除を防止
// Object.freeze(pet); //値の変更を防止


pet.name = 'tsukudani'
delete pet.type
pet.weight = 42