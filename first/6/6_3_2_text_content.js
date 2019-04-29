document,addEventListener('DOMContentLoaded',function(){
  //innerHTML/textContentも配下の要素を完全に置き換えるので留意
  //escapeされたtextが描画される（高速） <= こっちが推奨
  //innerHTMLはXSSの危険があるので注意！
  // ただし文字列からHTMLを生成したい場合も...createElement/createTextNodeというメソッドあり

  document.getElementById('btn_text').addEventListener('click',function(){
    document.getElementById('result_text').textContent = '<a href="#">timtim</a>'
  })
  document.getElementById('btn_html').addEventListener('click',function(){
    document.getElementById('result_html').innerHTML = '<a href="#">timtim</a>'
  })
  document.getElementById('btn_text_get').addEventListener('click',function(){
    console.log(document.getElementById('result_text').textContent);
  })
  document.getElementById('btn_html_get').addEventListener('click',function(){
    console.log(document.getElementById('result_html').innerHTML);
  })
})
