let Member = function(firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
}

// Member.prototype.getName() = function(){
//   return this.firstName + this.lastName
// }

// Member.prototype.toString = function(){
//   return this.lastName + this.firstName
// }

// 上と同じ意味だけどこっちの方がスッキリ！
Member.prototype = {
  getName: function(){
    return this.firstName + this.lastName
  },
  toString: function(){
    return this.lastName + this.firstName
  }
}