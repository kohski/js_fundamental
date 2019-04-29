document.addEventListener('DOMContentLoaded',function(){
  let books = [
    {title: "AAA", price:3200},
    {title: "BBB", price:1400},
    {title: "CCC", price:2400}
  ]

  let list = document.getElementById('list');

  //fragmentという臨時のオブジェクトを生成する
  let frag = document.createDocumentFragment();

  for(let i = 0; i < books.length; i++){
    let b = books[i];
    let li = document.createElement('li');
    let text = document.createTextNode(b.title + ':' + b.price+'円');
    li.appendChild(text);
    //ここで毎回描画してしまうのでオーバーヘッドが大きい
    // list.appendChild(li);
    frag.appendChild(li);
  }
  list.appendChild(frag);
})