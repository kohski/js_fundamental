let s = document.getElementById('food');
// childNodesで子ノードの一覧のNodeListオブジェクトが返ってくる
let opts = s.childNodes;
for(let i = 0; i < opts.length; i++ ){
  let opt = opts.item(i);
  // nodeTypeメソッドでノードの種類を取得できる
  // 1 => 要素ノード, 2 => 属性ノード, 3 => テキストノードなど
  if(opt.nodeType === 1){
    console.log(opt.value); 
  }
}

console.log("==================================================");

let child = s.firstChild;

while(child){
  if(child.nodeType === 1){
    console.log(child.value);
  }
  // 指定した親の子ノードリストのsucc命令みたいなもの
  // 最後のノードで呼び出したらnullが変えるので安心
  // ちなみにSiblingは兄弟という意味のようだ
  child = child.nextSibling;
}


