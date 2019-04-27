// session strage / local strageについては、
// 保存単位:
// セッション単位 / オリジン単位
// window/tabまたぎ:
// できない / できる
// ブラウザ閉じたら...
// データが消える / データは消えない
//  
// 値のセット
// let storage = localStorage;
// storage['js_entry'] = new Date();
// // 値のゲット
// date = storage['js_entry']
// console.log(date + 'yeah!');

// //sessionStrage
// ss = sessionStorage;
// ss['js_entry'] = new Date();

// localStrageから全てのデータを取得
// StorageObject.lengthでkey,valueの長さを取得可能だし、
// StorageObject.key(i)でキーを取得可能
// keyが取れたら、StorageObject[key]でOK
// let storage2 = localStorage;
// for(let i = 0; i < storage2.length; i++){
//   let k = storage2.key(i);
//   let v = storage2[k];
//   console.log(`${k} : ${v}`);  
// }

// 文字列が前提なんだけど、オブジェクトを保存したい時は
// JSON.Stringify(オブジェクト);
// JSON.parse(文字列)
// localStrageからはgetItem,setItemでやりとり
let storage = localStorage;
let woman = {
  first_name: 'Yoko',
  last_name: 'Miyamoto',
  gender: 'female'
}
j_woman = JSON.stringify(woman);
storage.setItem('yoko',j_woman);
let data = JSON.parse(storage.getItem('yoko'));
console.log(data.first_name);




