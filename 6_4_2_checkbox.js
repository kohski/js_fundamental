document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn').addEventListener('click',function(){
    let result = [];
    let foods = document.getElementsByName('food');
    for(let i = 0; i < foods.length;i++){
      food = foods.item(i)
      if(food.checked){
        result.push(foods.item(0).value)
      }
    }
    console.log(result);    
  })

  let setCheckValue = function(name, value){
    let elems = document.getElementsByName(name)
    for(let i = 0; i < elems.length; i++ ){
      let elm = elems.item(i);
      if(value.indexOf(elm.value) > -1){
        elm.checked = true;
      }
    }
  }

  document.getElementById('btn2').addEventListener('click',function(){
    // 今、ふと思ったけど、function > functionにすると、closureになっちゃうけど、
    // 関数の中から別の関数を呼び出すのは問題ないよね。
    setCheckValue('food',['gyoza'])
  })

})