document.addEventListener('DOMContentLoaded',function(){
  let Counter = function(elem){
    this.counter = 0;
    this.elem = elem;
    elem.addEventListener('click',()=>{
      this.counter ++;
      this.show();
    },false)
  };

  Counter.prototype.show=function(){
    console.log(this.elem.id + ' is clicked '+this.counter+'times')
  }

  let c = new Counter(document.getElementById('btn'))

})