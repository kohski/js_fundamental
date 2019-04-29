// スプレッド...演算子を使用することでnumsは引数の配列になる
//argumentsは配列のようで配列じゃなかったので扱いづらかった。
function sum(...nums){
  if(nums.every(elm => typeof elm === 'number')){
    return nums.reduce((acc, cur)=>{
      return acc + cur
    })
  }else{
    return new Error('all aguments should be number')
  }
}
console.log(sum(1,2,3,4,5));


// named argument in ES6
function getTriangle({base=1, height=2}){
  return base * height / 2;
}
console.log(getTriangle({base: 3, height: 4}));
