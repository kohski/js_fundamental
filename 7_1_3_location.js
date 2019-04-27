document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('isbn').addEventListener('change',function(){
    //locationオブジェクトのhref属性にurlを渡すとリンクする
    // location.href = 'http://www.wings.msn.to/index.php/-/A-03/'+this.value
    // リンク残さない（戻るボタン無効化）はreplaceメソッドをつかう
    location.replace('http://www.wings.msn.to/index.php/-/A-03/'+this.value);
  },false);
},false);