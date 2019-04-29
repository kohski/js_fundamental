scope = 'Globale'
getValue = function(){
  scope = 'Local'
  return scope;
}

console.log(getValue());
console.log(scope);


let scope2 = 'Global'
function getValue2(){
  console.log(scope); // これはundefined
  let scope = 'Local'
  return scope;
}
