document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('fm').addEventListener('submit',function(e){
    //window.confirmメソッド ok => true / キャンセル => false
    if(!window.confirm('Can I submit?')){
      e.preventDefault();
    }
  },false)
},false)