document.addEventListener('DOMContentLoaded',function(){
  let elm = document.getElementById('elm');

  elm.addEventListener('click',function(){
    // classListにToggleの方が直感的だね！
    this.classList.toggle('hightlight');
  },false)
},false)