function sum(...nums){
  return nums.reduce((acc,cur)=>{
    return acc + cur
  },0)
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));
// before ES6ではargumentsオブジェクトでやりくりしていた。
// argumentsオブジェクトはarray likeなオブジェクトなので、lengthはあってもpush/popはない。
// ということで、引数を純粋な配列でgetできるrest operatorは有能

console.log(Math.max(1,2,3,4,5));
console.log(Math.max([1,2,3,4,5]));
console.log(Math.max(...[1,2,3,4,5]));