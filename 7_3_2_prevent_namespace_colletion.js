let MyStorage =function (app){
  this.app = app;
  this.storage = localStorage;
  this.data = JSON.parse(this.storage[this.app] || '{}');
}

MyStorage.prototype = {
  getItem: function(key){
    return this.data[key];
  },
  setItem:function(key,value){
    this.data[key] = value;
  },
  save: function(){
    this.storage[this.app] = JSON.stringify(this.data)
  }
}

let storage = new MyStorage('JS_Sample');
storage.setItem('hoge','hogehogehoge');
console.log(storage.getItem('hoge'));
storage.save();
