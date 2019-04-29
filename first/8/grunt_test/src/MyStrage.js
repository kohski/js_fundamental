var MyStrage = function(path){
  this.path = path
};

MyStrage.prototype = {
  getStorage: function(){
    return this.path;
  }
}