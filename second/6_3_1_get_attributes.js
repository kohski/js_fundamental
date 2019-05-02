// document.addEventListener('DOMContentLoaded',function(){
//   let logo = document.getElementById('logo');
//   let attrs = logo.attributes;
//   // namedNodeMapが返る
//   console.log(attrs);
//   Array.from(attrs).forEach(elm=>{
//     console.log(elm);    
//   })
// })

// document.addEventListener('DOMContentLoaded',function(){
//   //  こちらはエスケープされる
//   document.getElementById('result_text').textContent=
//     '<a href="#">text content</a>'
//   // こちらはエスケープされずにHTMLとして解釈される
//   document.getElementById('result_html').innerHTML=
//     '<a href="#">text content</a>'
// })

document.addEventListener('DOMContentLoaded',function(){
  let list = document.getElementById('list')
  // 中身だけ
  console.log(list.textContent);
  // タグごと全部
  console.log(list.innerHTML);
})