document.addEventListener('DOMContentLoaded',function(){
  let data = {
    title: 'JSリファレンス',
    price: 2680,
    show:function(){
      console.log(this.title + '/' + this.price + 'Yen');
    }
  };
  // eventハンドラー内のthisはイベントの発生元をさしてる
  console.log(this); //子場合は#document
  //なので、関数.bind(HTMLObject)してやる。するとthisが引数のオブジェクトになる。  
  document.getElementById('btn').addEventListener('click', data.show.bind(data), false);
},false);