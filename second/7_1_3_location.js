document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('isbn').addEventListener('change',function(){
    location.href = 'http://wings.msn.to/index.php/-/A-03/'+this.value
  },false)
},false)