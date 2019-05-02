document.addEventListener('DOMContentLoaded',function(){
  
  let data = {
    title: 'JAVAポケリファ',
    price:2680,
    show:function(){
      // ここでいうところのthisはやっぱりイベントの発生元を示している模様
      // イベントリスナー配下ではすべてthisはイベントの発生元を示すのだ。
      console.log(this.title + '/' + this.price + '円');
    }
  };

  document.getElementById('btn').addEventListener(
    // dataオブジェクトをdata.showのthisにバインドする6_
    'click', data.show.bind(data), false
  );
})