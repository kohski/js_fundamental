document.addEventListener('DOMContentLoaded',function(){
  let elm = document.getElementById('elm');

  elm.addEventListener('mouseover',function(){
    // ハイフンで2音節以上の単語はキャメルケースで表現！
    this.style.backgroundColor = 'Yellow';
  },false);
  
  elm.addEventListener('mouseout',function(){
    this.style.backgroundColor = '';
  },false);
},false)