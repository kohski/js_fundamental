window.addEventListener('DOMContentLoaded',function(){
  document.getElementById("file").addEventListener('change',function(e){
    var inputs = document.getElementById('file').files;
    for(var i = 0; i < inputs.length; i++){
      input = inputs[i];
      console.log(`filename:${input.name}`);
      console.log(`filetype:${input.type}`);
      console.log(`filesize${input.size}`);
      console.log(`filelastupdate${input.lastModifiedDate}`);
    }
  },true)
})