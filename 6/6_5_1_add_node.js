document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn').addEventListener('click',function(){
    let name = document.getElementById('name');
    let url = document.getElementById('url');

    // document.createElement(タグ名)でDOMを生成
    // reciever.属性で必要な属性をついかしていくイメージｓ
    let anchor = document.createElement('a');
    anchor.href = url.value;
    // 上記コードは以下でも書き換え可能
    //  href = document.createAttribute('href');
    //  href.value = url.value;
    //  anchor.setAttributeNode(href); #<=ここが特に重要

    anchor.target = 'blank'
    
    //<h1>test</h1>みたいな入力もちゃんとエスケープされている
    let text = document.createTextNode(name.value);

    // <a href="...">ここにテキストを入れいるイメージ</a>
    anchor.appendChild(text);

    let br = document.createElement('br');

    let list = document.getElementById('list');
    // けつに足していくのがappendChild
    list.appendChild(anchor);
    list.appendChild(br);
    // insertBeforeはanchorの直前にいれる
    list.insertBefore(br, anchor)
  },false)
},false)