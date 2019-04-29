function getTriangle(args){
  if(args.base === undefined){ args.base = 1 }
  if(args.height === undefined){ args.height = 1 }
  return args.base * args.height / 2;
}

// hashを渡してやればいい感じに名前付きで定義可能
console.log(getTriangle({base: 5, height: 4}));
// 引数省略もいけてる！
console.log(getTriangle({base: 5}));
