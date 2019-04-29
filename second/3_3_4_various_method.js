let arr = [1,2,3,4,5]

ans = []
arr.forEach(elm =>{
  ans.push(elm * 2)
})
ans 

ans2 = arr.map(elm => {
  return elm * elm 
})
ans2

// 一つでも真なら真を返す
ans3 = arr.some(elm =>{
  return elm % 3 === 0;
})
ans3

// 全部真なら真を返す
data = [3,6,9]
ans4 = data.every(elm =>{
  return elm % 3 === 0;
})
ans4

ans5 = arr.filter(elm => {
  return elm % 2 === 0;
})
ans5

let arr2 = [5,25,10];
ans6 = arr2.sort();
// 文字列として辞書順
ans6
// 数値として並び替え
ans7 = arr2.sort((a,b) =>{
  return b - a
})
ans7


// sort by classes
let classes = ['president', 'seniort manager', 'manager']
let member = [
  { name:'yoko',clazz:'seniort manager' },
  { name:'miyamoto',clazz:'president' },
  { name:'fuki',clazz:'manager' },
]
ans8 = member.sort((x,y)=>{
  return classes.indexOf(x.clazz) - classes.indexOf(y.clazz) 
})
ans8

