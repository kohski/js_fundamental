window.onload = function(){
  // DOM経由で要素の取得
  let btn = document.getElementById('btn');
  // イベントハンドラーの設定
  btn.onclick = function(){
    window.alert('Hello, World!')
  }
  // イベントハンドラにnullを渡せば削除可能
  // btn.onclick = null;
}