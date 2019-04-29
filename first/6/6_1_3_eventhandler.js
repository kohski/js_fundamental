// イベントの発生要素,
// どのイベントか,
// どのイベントハンドラ/イベントリスナーに紐づけるか
//を決める方法が3つ
// 1. Tag内の属性として宣言
//    HTML: <タグ onイベント名="JSコード">
//    JS  : 呼び出された関数を作成する
// 2. Elementオブジェクトのプロパティとして宣言
//    HTML: 普通にタグ付け
//    JS  : 要素.onイベント名 = function(){ 処理 }
// 3. addEventListenerメソッドの使用 <= 推奨！

//イベント名は全て小文字

//手法1
function btn_click(){
  window.alert("手法1: onclick属性としてタグに埋め込み")
}

//手法2:取得した要素オブジェクトにjs側でプロパティとして追加
// 渡すのは匿名関数がよい。
// 別に関数を定義しておくのも可だけど、名前空間の衝突防止は意識したい。
// window.onloadイベント内に個別要素のイベントを入れておくと、
// HTML側のsriptタグの記載場所に寄らず正常に動作する
window.onload=function(){
  document.getElementById('btn').onclick = function(){
    window.alert('手法2:HTML側はシンプルで、JS側で要素を補足して、プロパティ追加')
  }
}

//手法3:addEventListener
// 要素オブジェクトにたいして、addEventListenerメソッドを呼ぶ。
// addEveneListener要素は第一引数にイベント名(Eventインターフェースに準拠).
// 第二引数に関数をとる
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn2').addEventListener('click',function(){
    window.alert('method3: Button is clicked')
  },false)
},false)