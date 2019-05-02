document.addEventListener('DOMContentLoaded',function(){
  
  let elem = document.getElementById('elem')
  // elem.addEventListener('click',function(){
  //   // classNameプロパティは配列で帰ってくるのでめんどくさい。
  //   let classes = this.className.split(' ');
  //   let index = classes.indexOf('highlight');
  //   if(index === -1){
  //     classes.push('highlight');
  //   }else{
  //     classes.splice(index,1);
  //   }
  //   this.className = classes.join(' ');
  // },false)

  elem.addEventListener('click',function(){
    // DOMTokenObjectListのメンバー
    this.classList.toggle('highlight');
    this.classList.toggle('weight');
  })

},false)