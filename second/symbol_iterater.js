const testingTeam = {
  lead: 'Yoko',
  tester: 'Takashi',
  // []は動的プロパティ
  // 詳細は[./dynamic_property_in_object.js]みてね。
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  // key == value　なのでこういう書き方
  testingTeam,
  size:3,
  department: '開発',
  lead: 'taro',
  manager: 'hanako',
  engineer: 'jiro',
  // オブジェクト内で自分のiterateを自分で定義できる。
  // for ofから飛んできてこれを探す。
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.manager; 
    yield this.engineer;
    yield* this.testingTeam;
  }
};


// // engineerTeamを独自に参照するIteratorが欲しかったので、Generaterを定義した
// // 独自の出力順を定義できる
// function* TeamIterator(team){
//   yield team.lead;
//   yield team.manager; 
//   yield team.engineer;
//   // これだと密結合しすぎなので再利用性が低い
//   // yield team.testingTeam.lead;
//   // yield team.testingTeam.tester;

//   // iterator内でgeneratorを定義して、yield* することで
//   // const testingTeamGenerator = TestingTeamIterator(team.testingTeam)
//   //yield* testingTeamGenerator

//   // ここの行に入ってきて、testingTeamに入っていって、[Symbol.iterater]があればそれを探す
//   yield* team.testingTeam;
// }

// TestingTeamに[Symbol.Iterator]を定義したからここは消してok
// function* TestingTeamIterator(team){
//   yield team.lead;
//   yield team.tester;
// }


const names = []
// 配列は最初から内部で[Symbol.iterater]を実装している。
for(let name of engineeringTeam){
  names.push(name);
}
names;