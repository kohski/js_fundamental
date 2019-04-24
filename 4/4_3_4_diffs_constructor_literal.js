var scope = 'Global'

function checkScope(){
  var scope = 'Local';

  var f_lit = function(){
    return scope;
  }
  console.log(f_lit());
  
  var f_con = new Function('return scope;')
  console.log(f_con());
}
checkScope();