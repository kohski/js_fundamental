function escapeHtml(str){
  if(!str){
    return '';
  }
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '&quot;');
  str = str.replace(/'/g, '&#39;');
  return str;
};

function e(templates, ...values){
  console.log(templates);
  console.log(values);  
  let result = '';
  for(let i = 0, len = templates.length; i < len; i ++){
    result += templates[i] + escapeHtml(values[i]);
  }
  return result;
}

let name = '< "Mario" & \'Luigi\'>';
let yay = '<tim></tim>'
// e()
console.log(e(`こにんにちは、${name}さん${yay}！`));
// e``だと第一引数に${.*}で区切られた配列、第二引数以降には${}の中身が格納される
console.log(e`こにんにちは、${name}さん${yay}！`);
