document.addEventListener('DOMContentLoaded',function(){
  // setIntervalはwindowドキュメントのメソッドだったのか
  // setTimeoutは経過秒数経過後1度処理を実施
  // setIntervalは経過秒数ごとに処理を繰り返す
  // 必ず秒数を保証する訳では無い
  let timer = window.setInterval(
    function(){
      let dat = new Date();
      document.getElementById('result').textContent = dat.toLocaleTimeString();
    },1000);

    document.getElementById('btn').addEventListener('click',function(){
      window.clearInterval(timer);
    },false);
},false);

function hoge(){
  console.log('あいうえお');
  //setTimeoutは非同期で進む
  setTimeout(function(){
    console.log('かきくけこ');
  },0);
  console.log('さしすせそ');
}
hoge();