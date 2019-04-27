document.addEventListener('DOMContentLoaded',function(){
  main = document.getElementById('main')
  main.addEventListener('mousemove',function(e){
    main.innerHTML = 
    'screen: ' + e.screenX + '/' + e.screenY +'<br>'
    + 'page: ' + e.pageX + '/' + e.pageY + '<br>'
    + 'offset: ' + e.offsetX + '/' + e.offsetY + '<br>';
  },false)

  document.getElementById('key').addEventListener('keydown',function(e){
    document.getElementById('result').textContent += e.keyCode;
  },false)
},false)