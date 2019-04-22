var scope = 'Global'

function getValue(){
  var scope = 'Local'
  return scope;
}

console.log(getValue());
console.log(scope);

//=========================================
//var は必須

scope = 'Globale'
function getValue2(){
  scope = 'Local'
  return scope
};

//書き換わってまう。
console.log(getValue2());
console.log(scope);

// ===================================
// 変数の巻き上げ現象

var scope = 'Global'

function getValue3(){
  console.log(scope);
  var scope = 'Local'
  return scope
}

console.log(getValue3());

console.log(scope);
