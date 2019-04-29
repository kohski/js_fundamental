// 足し算
let date = new Date(2017,4,15,11,40);
console.log(date.toLocaleString());

date.setMonth(date.getMonth() + 3)
console.log(date.toLocaleString());

date.setDate(date.getDate() + 30)
console.log(date.toLocaleString());

// 引き算
let date2 = new Date(2017,10,17,11,40);
let diff = date2 - date
//これはミリ秒
console.log(diff);
//64日分の差異
console.log(diff/1000/60/60/24);
