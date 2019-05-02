document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn').addEventListener('click',function(){
    console.log('OK');
    
    let name = document.getElementById('name');
    let url = document.getElementById('url');

    let anchor = document.createElement('a');
    anchor.href = url.value;
    anchor.target = '_blank';
    let text = document.createTextNode(name);
    anchor.appendChild(text);
    
    let br = document.createElement('br');
    let list = document.getElementById('list');

    list.appendChild(anchor);
    list.appendChild(br);
  })  
})