window.onload = function(){
  let btn = document.getElementById('btn');

  btn.onclick = function(){
    window.alert('Hello, World');
  }
  // 削除方法その1。イベントハンドラーでやってるなら、nullを代入してやればOK
  btn.onclick = null;

  document.getElementById('btn').addEventListener('click',function(e){
    let target = e.target;
    console.log(e);
    console.log(target);
    console.log(target.nodeName);
    console.log(target.id);
    console.log(e.type);
  });
}