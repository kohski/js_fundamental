let str = 'postal code is 123-0003. and 345-5545 is working also.'
let regexp = /\d{3}-\d{4}/

// regexp.exec(string) または string.match(regexp)
ans = str.match(regexp);
ans.forEach(elm =>{
  console.log(elm);
})