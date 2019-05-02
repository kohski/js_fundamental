document.addEventListener('DOMContentLoaded',function(){
  // 一つ目のイベント
  document.getElementById('inner').addEventListener('click',function(e){
    window.alert("#inner Listener");
    // 上の階層へのバブリング停止。
    // e.stopPropagation();
    e.stopImmediatePropagation();
  },false)

  // 同じ種類のイベントリスナーだけど、別個のものとして扱われるイベントチェーン2
  // 同階層だけどバブリングしてくる
  document.getElementById('inner').addEventListener('click',function(e){
    window.alert('#inner Listener second');

  },false)

  // バブリングネクスト階層
  document.getElementById('outer').addEventListener('click',function(e){
    window.alert('#outer Listener');
  },false)
},false)