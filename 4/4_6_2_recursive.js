function factorial(n){
  if(n != 0){
    return n * factorial(n-1);
  }
  return 1;
}
console.log(factorial(5));


// 他の方法
// function factorial_simple(n){
//   ans = 1;
//   for(i = 0; i < n; i++){
//     ans *= (i+1)
//   }
//   return ans
// };
// console.log(factorial_simple(5));
