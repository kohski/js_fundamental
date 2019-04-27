document.addEventListener('DOMContentLoaded',function(){
  let Counter = function(elm){
    this.count = 0;
    this.elm = elm;
    elm.addEventListener('click',
    // 以下のthisはイベント発生元ここだと#documentをさしており、
    // 当然そこにはcount++ もshowもない。
    // ということで、bind(this)するか
    // function(){
    //   this.count++;
    //   this.show();
    // }.bind(this)
    // アロー関数で対処
    ()=>{
      this.count++;
      this.show();
    }
    ,false)
  };

  Counter.prototype.show = function(){
    console.log(this.elm.id + 'has been clicked ' + this.count + 'times');
  }

  let c = new Counter(document.getElementById('btn'));
});