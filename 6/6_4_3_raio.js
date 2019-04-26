document.addEventListener('DOMContentLoaded',function(){
  let getRadioValue = function(name){
    let result = "";
    let elems = document.getElementsByName(name);

    for(var i =0 ; i < elems.length; i++){
      let elem = elems.item(i);
      if(elem.checked){
        result = elem.value
        break;
      }
    }
    return result;
  };

  document.getElementById('btn').addEventListener('click',function(){
    console.log(getRadioValue('food'));
  });

  document.getElementById('btn2').addEventListener('click',function(){
    elems = document.getElementsByName('food');
    // console.log(elems.map(elm=> elm.value ));
    
    for(let i = 0; i < elems.length; i++ ){
      elem = elems.item(i)
      if(elem.value == "gyoza"){
        elem.checked = true;
      }
    }
  })
})