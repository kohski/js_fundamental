// インスタンス化できない。静的メソッドの呼び出しもできない。
// let g = new Global();
// Global.method


//encode関連

let str = '!"#&()+-*/@-_|;:,.';
console.log(encodeURI(str));
console.log(encodeURIComponent(str));
