document.addEventListener('DOMContentLoaded',function(){
  let getSelectValue = function(name){
    let result = [];
    let opts = document.getElementById(name).options;
    
    for(let i = 0; i < opts.length; i++){
      opt = opts.item(i)
      if(opt.selected){
        result.push(opt.value)
      }
    }
    return result;
  }
  document.getElementById('btn').addEventListener('click',function(){
    console.log(getSelectValue('food'));
  })
});