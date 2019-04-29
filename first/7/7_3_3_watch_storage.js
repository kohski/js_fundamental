storage = localStorage;
yoko = {
  first_name: 'Yoko',
  last_name: 'miyamoto',
  gender: 'female'
}
storage.setItem('yoko',JSON.stringify(yoko));

window.addEventListener('storage',function(e){
  console.log('changed key :' + e.key);
  console.log('before value : '+ e.oldValue);
  console.log('after value : '+ e.newValue);  
  console.log('origin : '+ e.url);
})
