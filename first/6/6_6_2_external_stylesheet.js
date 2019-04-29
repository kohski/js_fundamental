document.addEventListener('DOMContentLoaded',function(){
  let elm = document.getElementById('elm');
  let clicks = document.getElementById('clicks')

  elm.addEventListener('mouseover',function(){
    // inlineのstyleは保守性ガタ落ちなのでダメ
    // 普通はclassの着脱でやる！
    this.className = 'highlight';
  },false)

  elm.addEventListener('mouseout',function(){
    this.className = '';
  },false)

  clicks.addEventListener('click',function(){
    let classes = this.className.split(' ');
    let index = classes.indexOf('highlight');
    if(index === -1){
      classes.push('highlight');
    }else{
      classes.splice(index,1);
    }
    this.className = classes.join(' ');
  },false);
},false);