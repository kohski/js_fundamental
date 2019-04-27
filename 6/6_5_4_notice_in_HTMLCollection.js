document.addEventListener('DOMContentLoaded',function(){
  let li = document.getElementsByTagName('li');
  console.log(`before:${li.length}`);

  let ul = document.getElementById('list');
  ul.appendChild(document.createElement('li'));
  console.log(`after:${li.length}`);
},false);