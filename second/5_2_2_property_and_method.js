let Member = function(){};

Member.prototype.gender = 'male';
let mem1 = new Member();
let mem2 = new Member();

// 値の参照はprotypeオブジェクトを参照する
console.log(mem1.gender + '|' + mem2.gender);
mem2.gender = 'female'
// 値の設定はインスタンスに行われるので、そちらが優先される。
console.log(mem1.gender + '|' + mem2.gender);

// protypeまで遡らないので無駄コード
delete mem1.gender
console.log(mem1.gender + '|' + mem2.gender);

// mem2はpropatyでprototypeが隠蔽されているので、deleteは効く
// その場合は、protypeへの参照が復活する。
delete mem2.gender

// どうしてもprototypeを消したいならundefinedで！
mem1.gender = undefined
console.log(mem1.gender + '|' + mem2.gender);
