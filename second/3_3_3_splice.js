let data = ['sato', 'enomoto', 'tokisaki', 'okada', 'kinjo']
// 3から2つぶん破壊的取り出し
console.log(data.splice(2,2));


data = ['sato', 'enomoto', 'tokisaki', 'okada', 'kinjo']
//抜き出したところへ挿入
console.log(data.splice(2,2,'ishihara'));
console.log(data);



data = ['sato', 'enomoto', 'tokisaki', 'okada', 'kinjo']
console.log(data.splice(2,2,'ishihara','nagamine','torii'));
console.log(data);

