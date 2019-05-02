//まずは imput bozから。素直にidで受け取れば普通の文字列でくる
// document.addEventListener('DOMContentLoaded',function(){
//   document.getElementById('btn').addEventListener('click',function(){
//     let name = document.getElementById('name');
//     console.log(typeof name.value);
//     console.log(name.value);
//   })
// })

// document.addEventListener('DOMContentLoaded',function(){
//   document.getElementById('btn').addEventListener('click',function(){
//     let result = [];
//     let foods = document.getElementsByName('food');
//     Array.from(foods).forEach(elm=>{
//       if(elm.checked){
//         console.log(elm.value);
//       }
//       elm.checked = false;
//     })
//   })
// })

// radioボタンのget
// document.addEventListener('DOMContentLoaded',function(){
//   document.getElementById('btn').addEventListener('click',function(){
//     let radios = document.getElementsByName('food');
//     Array.from(radios).forEach(elm=>{
//       if(elm.checked){
//         console.log(elm.value);
//         // 基本的にcheckboxと同じなんだけど、一個しかないんだから、breakしちゃってOK
//         break;
//       }
//     })
//   })
// })

//radioボタンのセット
// document.addEventListener('DOMContentLoaded',function(){
//   document.getElementById('btn').addEventListener('click',function(){
//     let radios = document.getElementsByName('food')
//     radios[0].checked = true
//   })
// })

// document.addEventListener('DOMContentLoaded',function(){
//   document.getElementById('btn').addEventListener('click',function(){
//     // select>options*nはselectをidで引っ掛けて、optionsで取得する。    
//     let lists = document.getElementById('food').options;
//     Array.from(lists).forEach(elm =>{
//       if(elm.selected){
//         console.log(elm.value);
//       }
//     })
//   })
// })

document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn').addEventListener('click',function(){
    let lists = document.getElementById('food').options;
    lists.item(1).selected = true;
    lists.item(2).selected = true;
  })
  document.getElementById('food')
})