url = 'https://jsonplaceholder.typicode.com/posts/'
fetch(url)
  // レスポンスに対してjsonメソッドを呼び出して初めて、レスポンスボディを参照できる。
  // 404statusでもcatchに通らない...それって意味あるの？
  // ネットワークエラーだとcatchに通ってくれる...
  .then(response=>response.json())
  .then(data => console.log(data));



