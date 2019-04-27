function asyncProcess(value){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(value){
        resolve(`入力値: ${value}`);
      }else{
        reject('入力は空です');
      }
    },3000);
  })
}

asyncProcess('Tokujiro').then(res => {
  console.log(res);
},error=>{
  console.log(`error : ${error}`);
})