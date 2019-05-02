let time = new Date();
result = document.getElementById('result')
result.textContent = time;


// HTML Collectionオブジェクトが返る。
// これは配列ライクなオブジエクトだが配列ではないので、
// 配列っぽく扱いたいときは、
// Array.prototype.slice.call()
// Array.from()
// let list = document.getElementsByTagName('a');

// Array.from(list).forEach(elm => {
//   console.log(elm.href);
// })

// inputボックスへの値のセット
// let time_input = document.getElementById('time')
// time_input.value = time

// let list_query = document.querySelectorAll('.external');
// for(let item of list_query){
//   console.log(item.href);
// }

// // node walking
// let s = document.getElementById('food');

// // ここでのポイントはs.childNodesで子ノードを一括取得できる。
// let opts = s.childNodes;
// for(let i = 0, len = opts.length; i < len; i++){
//   let opt = opts.item(i);
//   // 一括取得した子ノードには要素以外のノードもあるので、nodeTypeで選別
//   if(opt.nodeType === 1){
//     console.log(opt.value);
//   }
// }

let s = document.getElementById('food');
// sから一段階子供へ
let child = s.firstChild;
while(child){
  if(child.nodeType === 1){
    console.log(child.value);
  }
  // 兄弟を巡回
  child = child.nextSibling;
}