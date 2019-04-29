let s = new Set();

s.add(10);
s.add(1);
s.add(5);
s.add(17);
s.add(10);
s

console.log(s.has(10));
console.log(s.size);

for(let val of s.values()){
  console.log(val);  
}

s.delete(10);
console.log(s);

s.clear();
console.log(s);

// まとめて定義
let array = new Array(10).fill(1).map((cur,index)=>{
  return cur += index % 6
})
s = new Set(array)
s