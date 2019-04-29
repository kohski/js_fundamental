let i = 0;
let member = {
  name: 'Yoko',
  birth: new Date(1990,7,2),
  ['memo'+ ++i]: 'Regular Member',
  ['memo'+ ++i]: 'Maneger',
  ['memo'+ ++i]: 'Chiba prefecture'  
};

console.log(member);
