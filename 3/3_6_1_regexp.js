// let p = new RegExp()

// コントラクタでは「\」をエスケープする
// let p = new RegExp('http(s)?://([\\w]+\\.)+[\\w]+(/[\\w./?%&=]*)?','gi');
// リテラルでは「/」をエスケープする
// let p = /http(s)?:\/\/([\w]+\.)+[\w]+(\/[\w.\/?%&=]*)?/gi;

var p = /http(s)?:\/\/([\w]+\.)+[\w]+(\/[\w.\/?%&=]*)?/gi;

let str = 'サポートサイトはhttp://www.wings.msn.com/です';
str += 'サンプル紹介サイトHTTP://www.webdeli.com/もよろしく';

str 

// 文字列.match(regexp)=>g/i/mが効く
result = str.match(p);
result

// regexp.exec(str) => 基本的にはgなしみたいな挙動
result2 = p.exec(str);
result2

//matchしてればtrue
result3 = p.test(str);
result3

//match文字列番号を返す
result4 = str.search(p);
result4

// 文字列置き換えはreplace
// 文字列分割はsplit

// gなしは一つ目で検索終了。submatch(()で囲んだやつ)を2つめ以降の要素で返却
// iは大文字小文字区別しない。iなしなら区別する
// mはマルチラインモード。これを有効にすると、^ $が\nの前後で有効化され。

