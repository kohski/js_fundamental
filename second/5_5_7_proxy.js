let data ={red: '赤', yellow: '黄', green: '緑'};

let proxy = new Proxy(data,{
  get(target,prop){
    return prop in target ? target[prop] : '?';
  }
});

console.log(proxy.red);
console.log(proxy.nothing);
