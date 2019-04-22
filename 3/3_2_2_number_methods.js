// 値の上限の確認
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2); // <=表現できてない

// 変換系
num1 = 255
console.log(num1.toString());
console.log(num1.toString(16));
console.log(num1.toString(8));

num2 = 12345.6789
console.log(num2.toFixed());
console.log(num2.toFixed(2));
console.log(num2.toFixed(6));
// prescisionは整数部も含めて全桁で有効数値を設定
console.log(num2.toPrecision(7));


// データ系確認
let n = '123XXX'
console.log(Number(n))
console.log(Number.parseFloat(n))
console.log(Number.parseInt(n))

let d = new Date()
console.log(Number(d))
console.log(Number.parseFloat(d))
console.log(Number.parseInt(d))

let h = '0x10'
console.log(Number(h))
console.log(Number.parseFloat(h))
console.log(Number.parseInt(h))

let b = '0b11'
console.log(Number(b))
console.log(Number.parseFloat(b))
console.log(Number.parseInt(b))

let e = '1.01e+2'
console.log(Number(e))
console.log(Number.parseFloat(e))
console.log(Number.parseInt(e))


//  type確認
console.log(typeof(123 + '0'))
console.log(typeof('123' - 0))
//強制的に理論型へ
num1 = 123
console.log(!!num1)

