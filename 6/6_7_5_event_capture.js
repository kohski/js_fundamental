document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('inner').addEventListener('click',function(e){
    console.log('#inner listener is fired');
    // e.stopPropagation(); #=>自分の階層でイベント伝播を終了
    // e.stopImmediatePropagation(); #=> 自分のイベントで直ちに終了
    e.preventDefault(); // 本来のイベントをキャンセル
  },false)

  document.getElementById('inner').addEventListener('click',function(e){
    console.log('#inner listener is fired secondly');
  },false)

  document.getElementById('outer').addEventListener('click',function(e){
    console.log('#outer listener is fired!');
  },false)
},false);