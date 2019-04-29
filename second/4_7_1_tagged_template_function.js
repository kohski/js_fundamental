function escapeHtml(str){
  if(!str){return ''}
  str = str.replace(/&/g,'&amp;');
  str = str.replace(/</g,'&lt;');
  str = str.replace(/>/g,'&gt;');
  str = str.replace(/"/g,'&quot;');
  str = str.replace(/'/g,'&#39;');
  return str;
}

function e(templates, ...values){
  let result = '';
  for(let i = 0, len = templates.length; i < len; i ++ ){
    result += templates[i] + escapeHtml(values[i])
  }
  return result;
}

let name = '<"Mario" & \'Luigi\'>';
// 関数名() じゃなくて関数名``で渡すと、
// 第一仮引数に${}で区切られた文字列の配列が、第二仮引数に${}の配列が格納される
// 
console.log(e`こんにちは、${name}さん！`);
