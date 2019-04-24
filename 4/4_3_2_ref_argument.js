// 普通のリテラル型変数なら挙動は予想通り
var value = 10;
function decrement(value){
  value--;
  return value;
}
console.log(decrement(100));
console.log(value);


//参照型ならどうよ！
var value = [1,2,3];

function deleteElement(value){
  value.pop();
  return value;
}

console.log(deleteElement(value));
// [1,2]になってまう...
console.log(value);

