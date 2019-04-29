arr = [1,2,3,4,5]

arr.forEach(function(elm){
  console.log(elm * elm); 
})

ans = arr.map(function(elm,idx,array){
  return elm * elm 
})
ans 

ans = arr.some(function(elm,idx,arr){
  return elm % 2 === 0;
})
ans

ans = arr.filter(function(elm, idx, array){
  return elm % 2 === 0
})
ans

//sortだけちょっと注意
let titles = ['VicePresident','SeniorManeager','Manager']
let members = [
  {name: 'Suzuki', title: 'SeniorManeager'},
  {name: 'Kimura', title: 'VicePresident'},
  {name: 'Miyamoto', title: 'Maneager'},
  {name: 'Yoko', title: 'SeniorManeager'},
]

ans = members.sort(function(x,y){
  return titles.indexOf(x.title) - titles.indexOf(y.title);
});
console.log(ans);

