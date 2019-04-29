let Member = function(first_name, last_name){
  this.first_name = first_name
  this.last_name = last_name
}

// Member.prototype.getName = function(){
//   return this.first_name + ' ' + this.last_name
// }

// Member.prototype.toString = function(){
//   return this.first_name + this.last_name
// }

// 一箇所に定義されていた方が後々の変更に強いので、
// リテラル表現の方がおすすめ
Member.prototype = {
  getName: function(){
    return this.first_name + ' ' + this.last_name
  },
  toString: function(){
    return this.first_name + this.last_name
  }
}

let mem = new Member('Miyamoto', 'Yoko');
console.log(mem);
console.log(mem.getName());
console.log(mem.toString());


