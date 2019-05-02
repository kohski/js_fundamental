document.addEventListener('DOMContentLoaded',function(){
  // setIntervalはコールバック関数を第二引数ミリ秒ごとに実行する。
  // setIntervalはwindowオブジェクトの中の関数だよ！
  // let timer = window.setInterval(() => {
  //   let date = new Date();
  //   document.getElementById('timer').textContent = date.toLocaleString();
  // }, 1000);

  // setTimeoutは1回だけ実施
  let timer = window.setTimeout(() => {
    let date = new Date();
    document.getElementById('timer').textContent = date.toLocaleString();
  }, 1000);

  // ボタンクリック時にタイマー処理を中止
  document.getElementById('btn').addEventListener('click',function(){
    window.clearInterval(timer);
  },false);
},false);