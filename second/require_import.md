# require と importについて
requireはnodeの規格
importはESの規格
っぽくて、全然うまくつかえない...

送り側：module.exports = ...
受け側：const ... = require('file_path')
実行時：node file name
なら単独のモジュールはいけた。

node v12以降はnodeがimportをサポート？

どうやらこの辺をマスターするにはwebpackが必要なようなので、
https://www.amazon.co.jp/%E9%80%9F%E7%BF%92webpack-%E9%80%9F%E7%BF%92%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E5%B1%B1%E7%94%B0%E7%A5%A5%E5%AF%9B-ebook/dp/B07CQLGGP9/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=webpack&qid=1556590020&s=gateway&sr=8-1
をいつか読もう

