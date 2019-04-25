let Member = function(){};
Member.prototype.gender = 'male'
let mem1 = new Member();
let mem2 = new Member();
console.log(mem1.gender + '|' + mem2.gender);
mem2.gender = 'female';
console.log(mem1.gender + '|' + mem2.gender);
// 削除はしたけど、mem1はgenderメソッドは持ってないし、prototypeまで遡ることもないので、
// 特に変化なし
delete mem1.gender
delete mem2.gender
console.log(mem1.gender + '|' + mem2.gender);
