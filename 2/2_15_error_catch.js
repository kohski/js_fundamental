// オーバーヘッド大きいのでループ内ではやらない方がいい
// let i = 10;
// try {
//   i = i * j
// }catch(e){
//   console.log(e.message);
// }finally{
//   console.log('めでたしめでたし');
// }
let x = 1;
let y = 0;
try {
  if(y == 0){
    throw new Error('0 devision error!');
  }
  let z = x / y;
}catch(e){
  console.log(e.message); 
}finally{
  console.log('finally process');
}