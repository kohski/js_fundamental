document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('file').addEventListener('change',function(){
    // file typeのinputタグからfileの一覧を引っ張ってくるときは.filesで取得
    // HTML5からはmultipleが許容されてるから。
    let files = document.getElementById('file').files;
    console.log(files);
    Array.from(files).forEach(elm=>{
      console.log(elm.name);
      // ここでfile typeを取得できそう
      console.log(elm.type);
      console.log(elm.size);
      console.log(elm.lastModifiedDate);
    })  
  })
})