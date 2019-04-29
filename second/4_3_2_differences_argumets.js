let value = 10;
// function内では仮引数のスコープが優先される
function decrementValue(value){
  value--;
  return value;
}
console.log(decrementValue(100));
console.log(value);


// 仮引数が参照型だったら
let value2 = [1,2,3,4,5]
function deleteElement(value){
  value.pop();
  return value
};

console.log(deleteElement(value2));
// 参照型の場合はグローバルな変数も削除されたように見えるけど、
// 実際は参照わたししているので当然の挙動
console.log(value2);

