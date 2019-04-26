document.addEventListener('DOMContentLoaded',function(){
  // document.getElementById('btn_2').addEventListener('click',function(){
  //   elms = document.getElementById('food').options;
  //   elms.item(0).value = "tim"
  //   elms.item(0).textContent = "tim"
  // })

  var setListValue = function(name, value){
    let opts = document.getElementById(name);

    for(let i = 0; i < opts.length; i++){
      var opt = opts.item(i);
      if(value.indexOf(opt.value)>-1){
        opt.selected = true;
      }
    }
  }
  setListValue('food',['gyoza','ramen'])
})