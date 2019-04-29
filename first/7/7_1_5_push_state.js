let count = 0;
let result = document.getElementById('result');
document.getElementById('btn').addEventListener('click',function(){
  result.textContent = ++count;
  // history.pushState(count, null, '/Users/kosukekimura/Documents/study/DIC/js_entry/7_1_5_push_state.html/'+ count );
  //セキュリティ問題で動かせない
    history.pushState(count, null, './'+ count );
});

window.addEventListener('popstate',function(e){
  count = e.state;
  result.textContent = count;
})