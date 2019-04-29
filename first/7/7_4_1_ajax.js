document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn').addEventListener('click',function(){
    let result = document.getElementById('result');
    // 1. XMLHttpRequestオブジェクトの生成
    let xhr = new XMLHttpRequest();
    // 2.サーバーア通信時の処理を定義
    //  on ready state change　プロパティに処理を定義
    // 通信状態が変化したタイミングで呼ばれるイベントハンドラ
    xhr.onreadystatechange = function(){
      //readuStateは0:未初期化/1:ロード中/2:ロード済/3:一部取得/4:全て取得済
      if(xhr.readyState === 4){
        //status: ステータスコードのこと
        // Ajax使用時はブラウザ側でステータスを表示しないのでユーザーがわからなくなる
        // と言うことで、開発側で作ってあげなければいけない
        if(xhr.status === 200){
          result.textContent = xhr.responseText;
        }else{
          result.textContent = 'Server Error is occured!'
        }
      }else{
        result.textContent = 'now connecting ...';
      }
    };
    // 3.非同期通信を開始
    // 第1引数はメソッド GET/POST
    // 第2引数はURL
    // 第3引数は非同期の有無。基本的にはtrueで
    // xhr.open('GET','hello_ajax.php?name='+
    //   encodeURIComponent(document.getElementById('name').value),true);
    // xhr.send(null);

    //ポストの場合は、header情報、request bodyを別途指定する必要があり
    xhr.open('POST','hello_ajax.php',true);
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded;charset=UTF-8');
    xhr.send('name='+encodeURIComponent(document.getElementById('name').value));
  },false)
},false)