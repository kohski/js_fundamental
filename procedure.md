# JavaScript本格入門で性根を叩き直す！
## Chapter1 オリエンテーション
### 参考サイト
- [jQuery逆引きリファレンス]https://www.buildinsider.net/web/jqueryref
- [MDN]https://developer.mozilla.org/ja/

---
## Chapter2 基本的な書き方
### scriptタグを書く場所
  1. bodyの締めタグ直前
  2. headの最後
  3. bodyの開始タグ直下
  の順番で意識
### 埋め込み記法
  ```js
    <a href="JavaScript:window.alert('hello world!');">埋め込み</a>
  ```
### コメント
 - // コメント
 -  /* 複数業コメント */

### 変数定数
var は同じコンテクスト内で複数同名変数を宣言できた(知らなかった...)
let は2つめ以降はNG。あと、ブロックスコープ。
constは定数

### データ型
- 基本型
  - number
    - 整数リテラル
      - 10進数
      - 2進数(0b) parseInt('10010',2)
      - 8進数(0o) parseInt('22',8)
      - 16進数(0x) parseInt('12',16)
    - 浮動小数点リテラル
  - string
    - "",''はあんまり気にしなくていい
    - エスケープシーケンス
    - テンプレートリテラル
  - booolean
  - symbol
  - null
  - undefined
- 参照型
  - array
    - [](ブラケット)
  - object
  - function

### 制御構文
- いい感じのfor of 
```js
let data = [1,2,3]
Array.prototype.hoge = function(){
  for(let elm of data){
    console.log(elm); 
  }
}
```

- 大域脱出
```js
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
```

- try catchの構文  
tryで検証  
throwでオリジナルエラー  
catch(e)で補足  
```js
let x = 1;
let y = 0;
try {
  if(y == 0){
    throw new Error('0 devision error!');
  }
  let z = x / y;
}catch(e){
  console.log(e.message); 
}finally{
  console.log('finally process');
}
```

---
## Chapter3 基本データの操作

### オブジェクト基本
オブジェクトはクローズドクラスなのでアクセスするにはinstance生成の必要あり
ただし、静的クラスという例外もある

JSオブジェクト構成は以下
- Core JS
  - fundamental fuculty  
    like as control-sintax, function, object ...etc.
  - built in fuculty
    like as Array, Date, String, RegExp, Number, Error ... etc.
    Object, Boolean, String, Number, Symbol, Functionなどは基本データ型の生成根拠
    Boolean.newとかもできるけど、冗長なのでやってはだめ。
- Fuculty working in specific environment

### 基本データの扱い(Number,String,Symbol)
#### String
  ```js
  var str1 = 'timtim is best timtim of all people'

  console.log(str1.indexOf('is')) 
  console.log(str1.indexOf('tim',2)) 
  console.log(str1.lastIndexOf('tim')) 
  // 不一致時は-1が返る
  console.log(str1.indexOf('dummy')) 

  // 含む系統
  console.log(str1.startsWith('tim'));
  console.log(str1.startsWith('kim'));
  console.log(str1.endsWith('people'));
  console.log(str1.endsWith('yoko'));
  console.log(str1.includes('best'));
  console.log(str1.includes('better'));

  console.log(str1.charAt(5));
  console.log(str1.slice(5,8));

  // substringは開始、終了の数値を自動で入れ替えてくれる
  console.log(str1.substring(7,9));
  console.log(str1.substr(56,3));
  console.log(str1.split(' '));
  console.log(str1.charCodeAt(9));
  console.log(String.fromCharCode(67,79,68,69));
  console.log(str1.codePointAt(5));
  console.log(str1.concat(' timtim'));
  console.log(str1.slice(0,3).repeat(3));
  console.log(str1.length);
  ```
#### Number
  ```js
    // 値の上限の確認
  console.log(Number.MAX_VALUE);
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MAX_SAFE_INTEGER + 1);
  console.log(Number.MAX_SAFE_INTEGER + 2); // <=表現できてない

  // 変換系
  num1 = 255
  console.log(num1.toString());
  console.log(num1.toString(16));
  console.log(num1.toString(8));

  num2 = 12345.6789
  console.log(num2.toFixed());
  console.log(num2.toFixed(2));
  console.log(num2.toFixed(6));
  // prescisionは整数部も含めて全桁で有効数値を設定
  console.log(num2.toPrecision(7));


  // データ系確認
  let n = '123XXX'
  console.log(Number(n))
  console.log(Number.parseFloat(n))
  console.log(Number.parseInt(n))

  let d = new Date()
  console.log(Number(d))
  console.log(Number.parseFloat(d))
  console.log(Number.parseInt(d))

  let h = '0x10'
  console.log(Number(h))
  console.log(Number.parseFloat(h))
  console.log(Number.parseInt(h))

  let b = '0b11'
  console.log(Number(b))
  console.log(Number.parseFloat(b))
  console.log(Number.parseInt(b))

  let e = '1.01e+2'
  console.log(Number(e))
  console.log(Number.parseFloat(e))
  console.log(Number.parseInt(e))

  //  type確認
  console.log(typeof(123 + '0'))
  console.log(typeof('123' - 0))
  //強制的に理論型へ
  num1 = 123
  console.log(!!num1)
  ```
#### Symbol関連
```js
// 定義式 new Symbolはできない
let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1);
console.log(sym1.toString());
console.log(sym1 === sym2)

// あるあるの型変換はできないが、Boolean型へはOK
// console.log(sym1 + '');
// console.log(sym1 - 0);
console.log(!!sym1);

// usecaseは以下
const MONDAY = 0; // <= if文で0とか記述するのは可読性落ちる
const MONDAY = Symbol(); // <= こっちなら安心
console.log(typeof(MONDAY));
```

#### 演算関連はMathオブジェクト
```js
console.log(Math.abs(-100));
console.log(Math.clz32(1));
console.log(Math.min(20,30,40));
console.log(Math.max(20,30,40));
console.log(Math.pow(5,3)); //べき乗
console.log(Math.random());
console.log(Math.sign(100)); //符号の判定
console.log(Math.ceil(-1234.56));
console.log(Math.floor(-1234.56));
console.log(Math.round(-1234.56));
console.log(Math.trunc(-1234.56)); //少数部分の切り捨て
console.log(Math.sqrt(81)); //平方根 SQuareRooT
console.log(Math.cbrt(27)); //立方根 CuBeRooT
console.log(Math.hypot(3,4)); //三平方の定理
console.log(Math.cos(0.5));
console.log(Math.log(10)); //自然対数
console.log(Math.exp(2));

//定数
console.log(Math.PI);
console.log(Math.E);
```

### 集合管理(Array, Map, Set)
#### Array
[fundamental1](3_3_1_array.js)
[fundamental2](3_3_2_queue_stack.js)
[fundamental3](3_3_3_array_methods.js)

#### Map
- set/get/size/delete(key_name)/clear()などがつかえる
- Objectとの比較
  - 任意の型でkey指定可能(Objectはpropertyなので、文字列のみ)
  - Sizeの指定が可能
  - クリーンなマップがデフォルト（ObjectはObjectのインスタンスなのでだめ！）
-  キーに関わる注意点
  - キーの参照は===
  - {}をキーにした場合の注意点
    {}は参照型なので違う場所で定義したら違うメモリ上の場所を参照している
  ```js
    let m = new Map()
    m.set({}, 'hoge')
    m.get({}) //=> undefinedになる
  ```
#### Set
- 重複不能な要素をもつ
[set](3_4_5_Set.js)

### 日付・時刻関連の扱い(Date,Time)
- new Date(年, 月, 日, 時, 分, 秒, ミリ秒)
- 加算、減算
```js
date = new Date(任意)
date.setMonth(date.getMonth() + 3 );
```
- 差分はミリ秒で出るので、割り算して適切な粒度へ
```js
diff = date1 - date2
diff/1000/60/60/24
```
### 正規表現(RegExp)
- 初期化時に注意
```js
// コントラクタでは「\」をエスケープする
let p = new RegExp('http(s)?://([\\w]+\\.)+[\\w]+(/[\\w./?%&=]*)?','gi');
// リテラルでは「/」をエスケープする
let p = /http(s)?:\/\/([\w]+\.)+[\w]+(\/[\w.\/?%&=]*)?/gi;
```
- matchメソッド
  string.match(regexp)
- 各種オプション
  - g / 有効にすると1文字目でマッチ終了。サブマッチを認識して、2番目以降の要素に格納
  - i / 大文字小文字を区別しない
  - m / マルチライン有効化。\nの前後で^ $が有効になる
- execメソッド
  regexp.exec(string)
- test
  true/falseで応答
- search
  マッチした文字列の最初の文字数でスタート
- replace
  置き換え
- split
  分割

### Objectオブジェクト
- toString/valueOf
  独自クラスでtoStringは上書きすべきらしい。
- asignメソッドでオブジェクトをマージできる
  - 同名のプロパティは上書き
  - 再帰的マージには非対応
    ```js
    let pet = {
      type: 'hamster',
      name: 'hamu-taro',
      description:{
        birth: '2018-05-30'
      }
    }
    let pet2 = {
      name: 'kirara',
      color:'white',
      description:{
        food: 'seeds of sunflower'
      }
    }
    let pet3 = {
      weight:42,
      photo:'placeholder'
    }
    Object.assign(pet,pet2,pet3);
    console.log(pet);
    ```
- オブジェクトのインスタンスの作成方法
  - リテラル
    ```js
    let obj = {x:1,y:2,z:3}
    ```
  - コンストラクタ
    ```js
    let obj2 = new Object();
    obj2.x = 1;
    obj2.y = 2;
    obj2.z = 3;
    ```
  - protptype継承
  configuration 属性の変更の許可
  enumerable 列挙を可能とするか
  value 値
  writable 書き換え可能か
  get / set => getter / setter
  ```js
  let obj3 = Object.create(Object.prototype,{
    x:{value:1, writable: true, configurable: true, enumerable: true},
    y:{value:2, writable: true, configurable: true, enumerable: true},
    z:{value:3, writable: true, configurable: true, enumerable: true},
  })
  ```

### Globalオブジェクト
RubyでいうところのTop Levelというもののようやな
もろもろ試してほしいけど、レシーバー受けずに動く奴はGlobalオブジェクトと思っておけばOK

以下、ちょっとしたTips集
```js
let str = '!"#$%&()+-*/@~_|;:,.';
enc = encodeURI(str); 
enc_com = encodeURIComponent(str);

console.log(enc);
console.log(enc_com);

console.log(decodeURI(enc));
console.log(decodeURIComponent(enc_com));
```

```js
// 悪意のあるコードの実行
// 処理速度の低下
let str = 'console.log("eval関数")';
eval(str);
```

---
## Chapter4 関数
### 関数基礎
```js
// 基本形
function getTriangle(base, height){
  return base * height / 2
}
// functionオブジェクトのコンストラクタを生成する形も一応可能
let getTriangle2 = new Function('base','height','return base * height /2;');
// Topレベルオブジェクトっぽいこともいける
let getTriangle3 = Function('base','height','return base * height /2;');
// 関数リテラル(無名関数)
let getTriangle4 = function(base, height){
  return base * height /2 
}
// アロー関数
let getTriangle5 = (base, height)=>{
  return base * height /2 
}

// 特殊ルール
// 1.return だけなら{}省略可
getTriangle6 = (base,height) => base * height /2
getTriangle7 = radius =>{
  return Math.floor(radius ** 2 * Math.PI)
}
```
### 関数定義の注意点
- 改行注意
- function命令は静的な構造
  要はコンパイル時に読み込まれているので、いざそのステートメントが
  定義されている場所よりも上で呼び出しても問題なし
```js
getTriangle(5,10) // <=errorにならない

function getTriangle(base, height){
  return base * height /2;
}
```
- 関数リテラル/functionコンストラクタは実行時に評価
```js
// 関数リテラル
let func = function(){}
// コンストラクタ
let func = new Function()
```

### スコープ
- var / letつけないとGlobalScopeになる
- letはブロックスコープ。let前までは即時関数を使っていた

### 引数の記法
- argumentsオブジェクトを参照して可変長を実現
- 名前つき引数は{} でうけとって処理

### ES2015
- ...Rest演算子
- 再帰処理(recursive)について（階乗）
  ```js
  function factorial(n){
    if(n != 0){
      return n * factorial(n-1);
    }
    return 1;
  }
  console.log(factorial(5));
  ```
- 高階関数(heigher order)
  要はコールバックに関数指定するのと同じ

### 高度なテーマ
- tagged template
  第一引数に、${}で区切られたテキストが配列として、
  第二引数以降に${}がもらえる
  ```js
  function_name() // じゃなくて、
  function_name`template_${literal}`
  ```
- closure
関数は定義時のコンテキストを記憶する
closure定義時にreturn以下のコールバック関数は定義されており、
その上位概念のcounterと言う変数を記憶する
```js
function closure(init){
  var counter = init;
  
  return function(){
    return ++counter;
  }
}
var myClosure = closure(1);
console.log(myClosure()); // => 2
console.log(myClosure()); // => 3
console.log(myClosure()); // => 4
```

---
## Chapter5 大規模開発向けの書き方
### prototype
- JSではfunctionを用いたprototypeでオブジェクト指向を表現
```js
let Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function(){
    return this.lastName + ' ' + this.firstName;
  }
}
```
#### thisの文脈による参照元の変化
- top level --- Global Object
- function --- Global Object
- call/apply --- 引数で指定されたオブジェクト
- EventListener --- イベントの発生元
- Constructor --- 生成したインスタンス
- method --- レシーバオブジェクト

#### singletonメソッド類似の概念もあり
#### グローバル関数として呼び出してしまうと...
```js
let Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

let m = Member('Yoko','Miyamoto');
console.log(m);
console.log(firstName);
firstName
// functionとして呼び出すと、thisはグローバルオブジェクトを指し示す。
// ということで、firstNameはグローバル変数になってしまう。
// console.log(m.firstName);
```

よって、thisがMemberのインスタンスかどうかを確認
```js
let Member = function(firstName, lastName){
  // ここを加えるとthisがMemberのインスタンスならって条件分岐ができる
  if(!(this instanceof Member)){
    return new Member(firstName, lastName);
  }
  this.firstName = firstName;
  this.lastName = lastName;
};
```
### コンストラクタの問題点
constructorで宣言されたクラスをそのまま使うと、メソッドなども丸々コピーされるので、
メモリを食い過ぎる。
ということで、protptypeオブジェクトに書き込むとそれを暗黙的に参照するようになる。
  ```js
  let Member = function(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
  };

  Member.prototype.getName = function(){
    return this.lastName + ' ' + this.firstName
  };

  //mem自身の特異メソッドを検索=>なければprototypeオブジェクトを参照
  let mem = new Member('Miyamoto','Yoko');
  console.log(mem.getName());
  ```
JSのクラスは動的なので、インスタンス生成後にメソッドを定義しても問題なく
以前生成したインスタンスから参照可能
  ```js
  let Member = function(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  let mem = new Member('Yoko','Miyamoto');
  // インスタンス生成後にprototypeオブジェクトにメソッドを追加
  Member.prototype.getName = function(){
    return this.lastName + ' ' + this.firstName;
  };
  // インスタンスへのコピーではなくprototypeオブジェクトへの暗黙の参照なので
  // インスタンスから問題なく参照できている
  console.log(mem.getName());
  ```
同名のメソッドとプロパティが定義可能
プロパティの方が探索ツリーで先に解決されるけど、
ややこしいので、propertyはコンストラクタで、
メソッドはprototypeで定義するのが吉
ちなみに、プロパティをdeleteで削除しても、
同名のメソッドをprotptypeに探しに行ったりしないので削除は問題なし。
  ```js
  var Member = function(){};
  // methodでgenderを設定
  Member.prototype.gender = 'male';
  let mem1 = new Member();
  let mem2 = new Member();
  console.log(mem1.gender + '|' + mem2.gender);
  // instanceにprppertyを設定
  mem2.gender = 'female';
  // mem2については、instanceに着いたgender propertyが先に探索されて
  // 表示された。
  console.log(mem1.gender + '|' + mem2.gender);
  ```
prototypeはインスタンスに個別に書くより、クラスに直接書く方が完結なので
そっちがおすすめ
  ```js
  let Member = function(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  // Member.prototype.getName() = function(){
  //   return this.firstName + this.lastName
  // }
  // Member.prototype.toString = function(){
  //   return this.lastName + this.firstName
  // }

  // 上と同じ意味だけどこっちの方がスッキリ！
  Member.prototype = {
    getName: function(){
      return this.firstName + this.lastName
    },
    toString: function(){
      return this.lastName + this.firstName
    }
  }
  ```
静的メソッド（＝クラスメソッド）はクラスに直接定義
  ```js
  let Area = function(){};
  Area.triangle = function(base, height){
    return base * height / 2 ;
  };
  console.log(Area.triangle(5,4));
  ```

### オブジェクトの継承
prototypeの継承については、以下の通り。
  ```js
  let Animal = function(){};
  Animal.prototype = {
    walk:function(){
      console.log('nosso... nosso...');
    }
  };
  let Dog = function(){
    Animal.call(this);
  };
  Dog.prototype = new Animal();
  Dog.prototype.bark = function(){
    console.log('bow wow');
  };
  let d = new Dog();
  d.walk();
  d.bark();
  ```
以下の2行がみそ！
子クラスのprototypeオブジェクトに親クラス自体を代入する
  ```js
  let Dog = function(){
    Animal.call(this);
  };
  Dog.prototype = new Animal();
  ```
ちなみに、JSは動的なクラス設計なので、インスタンス生成後から
変えることが可能という...
  ```js
  let Dog = function(){};
  Dog.prototype = new Animal();
  let d1 = new Dog();
  console.log(d1.walk()); //=> nosso...nosso...

  Dog.prototype = new SuperAnimal();
  let d2 = new Dog();
  console.log(d2.walk()); //=>dadadada...
  ```
継承関係を整理したいときのメソッド一覧
  ```js
  imal = function(){};
  let Hamster = function(){};
  Hamster.prototype = new Animal();

  let a = new Animal();
  let h = new Hamster();

  // constructorメソッドでコンストラクタを取得できるが
  console.log(a.constructor === Animal);
  //以下二つより、継承先で生成されたインスタンスでも、
  //constructorメソッドで取得できるのは親クラス
  console.log(h.constructor === Animal);
  console.log(h.constructor === Hamster);

  //isntanceofはprototypeチェーンを遡って確認する
  console.log(h instanceof Animal);
  console.log(h instanceof Hamster);

  //オブジェクトが参照しているプロトアイプを参照
  console.log(Hamster.prototype.isPrototypeOf(h));
  console.log(Animal.prototype.isPrototypeOf(h));
  ```

### 本格的な開発に備えて
#### メンバーのprivate化
privateな変数はvarで定義
そこへのgetter/setterはコンストラクタとして定義
コンストラクタが定義時のコンテキストでvarで定義した変数を参照することにより、
それらが生き続けられるニュアンス
  ```js
  function Triangle(){
    // privateメンバーはthisじゃなくてvarで定義
    var _base;
    var _height;
    var _checkArgs = function(val){
      return (typeof val === 'number' && val > 0);
    }

    // privateメンバーにアクセスできるのは、コンストラクタ内に定義した特権メソッドのみ
    // これはfunctionの入れ子なので、要はクロージャーである。
    // 特権メソッドが定義時のコンテキストに則り、privateメンバーを参照しているので
    // いい感じになった
    this.setBase = function(base){
      if(_checkArgs(base)){
        _base = base;
      }
    }
    this.getBase = function(){
      return _base;
    }
    this.setHeight = function(height){
      if(_checkArgs(height)){
        _height = height;
      }
    }
    this.getHeight = function(){
      return _height
    }
  }
  ```
でも上記だとひじょうに煩雑なので、ObjectにdefinePropertyメソッドと言うものがある
これを活用すると、変数ライクな参照が可能になる
```js
function Triangle(){
  var _base;
  var _height;

  Object.defineProperty(
    this,
    'base',
    {
      get: function(){
        return _base;
      },
      set: function(base){
        if(typeof base === 'number' && base > 0){
          _base = base
        }
      }
    }
  );
  
  Object.defineProperty(
    this,
    'height',
    {
      get: function(){
        return _height;
      },
      set: function(height){
        if(typeof height === 'number' && height > 0){
          _height = height;
        }
      }
    }
  );
};
Triangle.prototype.getArea = function(){
  return this.base * this.height / 2;
}
var t = new Triangle();
// 変数ライクに処理ができる
t.base = 10;
t.height = 2;
console.log(t.base);
console.log(t.height);
console.log(t.getArea());
```
propertyが2つくらいだとわからないけど、Onject.definePropertiesという
メソッドもあり
```js
function Triangle(){
  var _base;
  var _height;

  Object.defineProperties(this,{
    base: {
      get: function(){
        return _base;
      },
      set: function(base){
        if(typeof base === 'number' && base > 0){
          _base = base;
        }
      } 
    },
    height: {
      get:function(){
        return _height;
      },
      set: function(height){
        if(typeof height === 'number' && height > 0){
          _height = height
        }
      }
    }
  });
}
Triangle.prototype.getArea = function(){
  return this.base * this.height / 2; 
}
var t = new Triangle();
t.base = 10;
t.height = 2;
console.log(t.base);
console.log(t.height);
console.log(t.getArea());
```
Rubyのmoduleよろしく、namespace用途にも使える
```js
var Wings = Wings || {};

Wings.Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};
Wings.Member.prototype = {
  getName : function(){
    return this.lastName + ' ' + this.firstName;
  }
};
var mem = new Wings.Member('Miyamoto','Yoko');
console.log(mem.getName());
```
### ES2015
今までのが全部無駄になるES6のスーパー記法たち！
#### クラスの基本記法
内部実装は以前のfunctionベースだけど、
けっこう普通のクラス　ライクになってきている
```js
class クラス名{
  constructor(初期化変数1,初期化変数2,...){
    this.初期化変数1 = 初期化変数1
    this.初期化変数2 = 初期化変数2
  }
  get function(){
    return this.インスタンス変数
  }
  set function(value){
    this.インスタンス変数 = value
  }
  static クラスメソッド(){
    処理
  }
}
```
#### 継承
extendsメソッドで継承
superで参照
```js
class BusinessMember extends Member{
  constructor(var1,var2,var3){
    super(var1,var2) //<=必ず先頭で
    this.var3 = var3
  }
  overrideするメソッド(){
    return super.親のメソッド() + ....
  }
  独自のメソッド(){
    return this.getName() + 'is working'
  }
}
```
#### オブジェクトリテラル
key,valueが同一なら省略可能になった

#### moduleの機能
定義元
```js
module.exports =class Member {
  ...処理
}
```

呼び出し側
```js
const Member = require('./5_5_5_module_export.js');
```
node: module.exports => require 'path'
ES6: export => import * from 'path'
nodeでimportするのはv12以降か？

#### Iteraterとgenerater
Iterater
```js
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
```
generater
- function*
- yieldで出力
```js
function* myGenerator(){
  yield 'aiueo';
  yield 'kakikukeko';
  yield 'sasisuseso';
}
for(let t of myGenerator()){
  console.log(t);  
}
```
#### Proxyは代理
```js

```

---
## Chapter6 DOMの基本
---
## Chapter7 クライアントサイドJS
---
## Chapter8 応用知識








## はっきりさせておくべきところ
関数リテラル、コンストラクタ