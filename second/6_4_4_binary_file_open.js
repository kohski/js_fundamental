document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('file_id').addEventListener('change',function(){
    console.log('switched');
    let input = document.getElementById('file_id').files[0];
    let reader = new FileReader();
    reader.addEventListener('load',function(e){
      document.getElementById('result').src = reader.result;
    },true);
    reader.readAsDataURL(input)
  },true);
})