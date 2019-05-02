// JSはノンブロッキングIOだからSleep命令が存在しない。
// 長い処理をしてから。
// promiseはunresolved/ resolved => then/ rejected => catch

promise = new Promise((resolve,reject)=>{
  reject();
});

promise
  .then(()=> console.log('completed!'))
  .then(()=> console.log('cocomo'))
  .catch(()=>console.log('problem!'))