promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve();
  },3000)
});

promise
  .then(()=>{
    console.log('Completed!!');
  })
  .catch(()=>{
    console.log('problem!');
  })