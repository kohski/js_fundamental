// hashなんだけど
const engineeringTeam = {
  size:3,
  department: '開発',
  lead: 'taro',
  manager: 'hanako',
  engineer: 'jiro'
};

// 独自の出力順を定義できる
function* TeamIterator(team){
  yield team.lead;
  yield team.manager; 
  yield team.engineer;
}

const names = []
for(let name of TeamIterator(engineeringTeam)){
  names.push(name);

}
names;