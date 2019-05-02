document.addEventListener('DOMContentLoaded',function(){
  data = {
    title: 'Java',
    price: 2780,
    // handleEventプロパティを設定するとthisのスコープがdataオブジェクトに入る
    handleEvent: function(){
      console.log(this.title + ' ' + this.price);
    }
  }
  // obhect自体を渡せばHandleEventを優先呼び出ししてくれる。
  document.getElementById('btn').addEventListener('click',data,false);
})