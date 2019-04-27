document.addEventListener('DOMContentLoaded',function(){
  let data = {
    title: 'JSリファレンス',
    price: 2680,
    handleEvent:function(){
      console.log(this.title + ' / ' + this.price + 'yen');
    }
  }
  // handleEventメソッドを持っていればそのまま呼び出し可能
  // handleEvent定義時にすでにthisはスコープを獲得しているので、bindした時と同じ使い心地
  document.getElementById('btn').addEventListener('click',data,false);
})