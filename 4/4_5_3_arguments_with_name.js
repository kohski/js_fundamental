function getTriangle({base = 1, height = 1 }){
  return base * height / 2;
};
console.log(getTriangle({height: 4,base: 3}));

// 仮引数ではハッシュだけど、{}により、name属性だけをnameに分割代入している
function show({name}){
  return name;
}
let member = {
  mid: 'Y0001',
  name: 'Miyamoto Yoko',
  address: 't_brain@ad.com'
};
console.log(show(member));

