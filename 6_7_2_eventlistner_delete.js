document.addEventListener('DOMContentLoaded',function(){
  let btn = document.getElementById('btn');
  let listener = function(){
    window.alert('Hello, Yoko')
  };
  btn.addEventListener('click',listener,false);
  // eventlistenerはremoveEventListenerで削除
  btn.removeEventListener('click',listener,false)
})