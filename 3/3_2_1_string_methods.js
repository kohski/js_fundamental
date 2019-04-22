var str1 = 'timtim is best timtim of all people'

console.log(str1.indexOf('is')) 
console.log(str1.indexOf('tim',2)) 
console.log(str1.lastIndexOf('tim')) 
// 不一致時は-1が返る
console.log(str1.indexOf('dummy')) 

// 含む系統
console.log(str1.startsWith('tim'));
console.log(str1.startsWith('kim'));
console.log(str1.endsWith('people'));
console.log(str1.endsWith('yoko'));
console.log(str1.includes('best'));
console.log(str1.includes('better'));

console.log(str1.charAt(5));
console.log(str1.slice(5,8));

// substringは開始、終了の数値を自動で入れ替えてくれる
console.log(str1.substring(7,9));
console.log(str1.substr(56,3));
console.log(str1.split(' '));
console.log(str1.charCodeAt(9));
console.log(String.fromCharCode(67,79,68,69));
console.log(str1.codePointAt(5));
console.log(str1.concat(' timtim'));
console.log(str1.slice(0,3).repeat(3));
console.log(str1.length);