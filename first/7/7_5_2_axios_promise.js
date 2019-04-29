const axios = require('axios');

document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn').addEventListener('click',function(){
    let getJson = function(){
      return new Promise((res,rej)=>{
        if(res){
          res(axios.get('https://jsonplaceholder.typicode.com/todos'))
        }else{
          rej('fucking HASHA');
        }
      })  
    }
    getJson().then((res)=>{
      console.log(res);
    })
  })
})