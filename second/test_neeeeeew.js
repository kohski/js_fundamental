document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn').addEventListener('click',function(){
    let box = document.getElementsByClassName('debit')
    let height = 0
    console.log(box[0].style);
    box[0].style.height = 200;
    console.log(box[0].style);
    // while(height < box[0].clientHeight){
    //   setInterval(() => {
    //     height += 10
    //     box[0].style.clientHeight = height
    //   }, 100);
    // }
  })
})