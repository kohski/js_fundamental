function wait(value){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      if(value){
        res(value);
      }else{
        rej('無効')
      }
    },3000);
  })
}

wait('HASHA is dead').then(res =>{
  console.log(res);
},
error=>{
  console.log(error);
});