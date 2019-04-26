window.addEventListener('DOMContentLoaded',function(){
  document.getElementById('file').addEventListener('change',function(){
    let input = document.getElementById('file').files[0];
    // FileReaderオブジェクトを生成
    let reader = new FileReader();
    reader.addEventListener('load',function(){
      // resultプロパティはオブジェクトの内容を返す
      document.getElementById('result').textContent = reader.result;
    },true)
    reader.readAsText(input,'UTF-8');
  },true)
})