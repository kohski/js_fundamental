function arrayWalk(data, f){
  for(let key in data){
    f(data[key],key);
  }
}
function showElement(value, key){
  console.log(key + ' : '+value);
}
let ary = [1,2,4,8,16];

// 配列の探索方法と別個の処理を別々に使える
arrayWalk(ary,showElement);

//着せ替えも可能
result = 0;
function sumElement(value, key){
  result += value;
};

arrayWalk(ary, sumElement);
console.log(result);


