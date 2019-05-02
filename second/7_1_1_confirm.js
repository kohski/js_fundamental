document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('fm').addEventListener('submit',function(){
    // windowオブジェクトはWindowへの自己参照プトパティ
    // confirmはtrue/false
    if(!window.confirm('can I sumit?')){
      e.preventDefault();
    }
  },false)
},false);