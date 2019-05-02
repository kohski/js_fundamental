document.addEventListener('DOMContentLoaded',function(){
  // ここでli(HTMLCollection)を取得。
  let li = document.getElementsByTagName('li');
  console.log('変更前'+ li.length);
  
  let ul = document.getElementById('list');
  ul.appendChild(document.createElement('li'));
  // 実行時にはちゃんと6つになってる。（このことを生きた状態と言っている）
  console.log('変更後'+li.length);
},false);