// 基本的には要素が取得できれば属性には 要素.属性でgetもsetも可能
document.getElementById('btn').addEventListener('click',function(){
  summary = document.getElementsByClassName('summary')
  summary[0].innerHTML = 'Miyamoto Yoko'
})

//attributesの一斉取得
document.addEventListener('DOMContentLoaded',function(){
  let logo = document.getElementById('exp2')
  let attrs = logo.attributes;
  for(var i = 0; i < attrs.length; i++){
    let attr = attrs[i];
    console.log(attr.name + ':' + attr.value);
  }
},false)
