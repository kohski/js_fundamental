function showMessage(value){
  console.log(value);
};

showMessage(); //=> undefined
showMessage('Ymada'); //=> OK
showMessage('Yamada','Suzuki'); //=>1つめだけ処理

//argumentsオブジェクトで管理可能
function showMessage2(value){
  console.log(arguments);
  if (arguments.length !== 1){
    throw new Error('invalid number of argument' + arguments.length)
  }
  console.log(value);
};

showMessage2(); //=> undefined
showMessage2('Ymada'); //=> OK
showMessage2('Yamada','Suzuki'); //=>1つめだけ処理

// jsでは基本的には引数は省略可能な者として定義されている
// before_ES6ではデフォルト数値は
function getValue(aaa,bbb,ccc){
  if(aaa === undefined){
    aaa = 10
  }
  if(bbb === undefined){
    bbb = 20
  }
  if(ccc === undefined){
    ccc = 30
  }
}