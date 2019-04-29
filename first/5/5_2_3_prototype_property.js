var Member = function(){};

// methodでgenderを設定
Member.prototype.gender = 'male';
let mem1 = new Member();
let mem2 = new Member();

console.log(mem1.gender + '|' + mem2.gender);
// instanceにprppertyを設定
mem2.gender = 'female';
// mem2については、instanceに着いたgender propertyが先に探索されて
// 表示された。
console.log(mem1.gender + '|' + mem2.gender);

// とはいえ、基本的には
// propertyはコンストラクタで
// methodはprototypeで定義するのがいい
