class MyIterater{
  constructor(data){
    this.data = data
  }
  [Symbol.iterator](){
    let current = 0;
    let that = this;
    return {
      next(){
        return current < that.data.length?
        {value: that.data[current++], done: false}:
        {done:true}
      }
    }
  }
}

let itr = new MyIterater(['one','two','three'])
for(let value of itr){
  console.log(value);
}