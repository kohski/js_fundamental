document.addEventListener('DOMContentLoaded',function(){
  let elem = document.getElementById('elem');

  elem.addEventListener('mouseover',function(){
    // このthisはイベントの発生元のこと！
    // JSでは-を扱えないので、background-color => backgroundColorにする！
    this.style.backgroundColor="Yellow";
  },false)

  elem.addEventListener('mouseout',function(){
    this.style.backgroundColor = '';
  },false)
})