document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn').addEventListener('click',function(e){
    let target = e.target
    console.log('Origin:'+target.nodeName+'/'+target.id);
    console.log('Type:'+e.type);
  },false)

  document.getElementById('area').addEventListener('mouseover',function(e){
    console.log(e.clientX,e.clientY);
    
  })


},false)