const testingTeam = {
  lead: 'Yoko',
  tester: 'Takashi'
}



const engineeringTeam = {
  // key == value　なのでこういう書き方
  testingTeam,
  size:3,
  department: '開発',
  lead: 'taro',
  manager: 'hanako',
  engineer: 'jiro',
};


// engineerTeamを独自に参照するIteratorが欲しかったので、Generaterを定義した
// 独自の出力順を定義できる
function* TeamIterator(team){
  yield team.lead;
  yield team.manager; 
  yield team.engineer;
  // これだと密結合しすぎなので再利用性が低い
  // yield team.testingTeam.lead;
  // yield team.testingTeam.tester;

  // iterator内でgeneratorを定義して、yield* することで
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam)
  yield* testingTeamGenerator
}

function* TestingTeamIterator(team){
  yield team.lead;
  yield team.tester;
}


const names = []
for(let name of TeamIterator(engineeringTeam)){
  names.push(name);

}
names;