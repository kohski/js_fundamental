// 前置while
let x = 5;
while(x < 10) {
  console.log(`${x}まだまだ`);
  x++;
}

// 後置while
let y = 5
do {
  console.log(`${y}まだまだ`);
  y++;
}while(y < 10)

// for文
for(let i = 0; i < 10; i ++){
  console.log(`${i}だよ`)
}

// for in #=> ループ順序が保証されないので。配列には不使用のこと
let obj = {x: 1, y: 2, z:3}
for(let key in obj){
  console.log(key);
  console.log(obj[key])
}


//for of
let data = [1,2,3]
Array.prototype.hoge = function(){
  for(let elm of data){
    console.log(elm); 
  }
}

// 大域脱出
kuku:
for(let i = 1; i <= 9; i++){
  for(let m = 1;m <= 9; m++){
    console.log(i*m);
    if(i*m > 30){
      break kuku;
    }
  }
}