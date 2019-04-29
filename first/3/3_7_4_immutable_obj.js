// use strictにしないと全部通っちゃうので注意！
'use strict'

let pet = {
  type: 'snow white hamster',
  name: 'kirara'
}

Object.preventExtensions(pet); //#=> 3.がだめ！
// Object.seal(pet); //#=> 2.,3.がだめ！
// Object.freeze(pet); //#=> 1.,2.,3.がだめ！

//1.既存プロパティの値の変更
pet.name = "timtim"
//2.プロパティの削除
delete pet.type;
//3.プロパティの追加
pet.weight = 42;