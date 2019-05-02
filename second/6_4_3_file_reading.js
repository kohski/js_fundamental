// 疑問点1...readAsTextで読み込んでるけどさ、なんで後からでいいの？静的なの？
// なんとなくfileの読み込みとかって、非同期処理しないといけない気がするけど...
// readerインスタンス内で全部タイミングあってるんだ。
// 読み込み=> readAsTextが完了して => loadイベントが呼ばれて => 描画される

document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('file').addEventListener('change',function(){
    let files = document.getElementById('file').files[0];
    // FileReaderAPIを読み込んでインスタンス生成
    let reader = new FileReader();
    // 
    reader.readAsText(files,'UTF-8');
    // FileReaderで読み込みが完了したら、loadイベントが発生する
    reader.addEventListener('load',function(){
      // そしたら、resultプロパティにアクセスが可能になるのでその中身を
      // #resultに代入
      document.getElementById('result').textContent = reader.result;
    },true);

  },true);
});