num = 1989.528

console.log(num.toString());
console.log(num.toFixed(2));
console.log(num.toPrecision(6));
console.log(isNaN(num));
console.log(isFinite(num));

num2 = 10
console.log(parseFloat(num));
num3 = "100"
num4 = '100m'
console.log(parseInt(num3));
console.log(parseInt(num4));

// NaNはいつでも !==
console.log(NaN === NaN);

console.log(typeof('123'+ 0))
console.log(typeof('123' - 0))