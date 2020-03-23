# gas-libpack
GASの機能を拡張するライブラリパッケージ

## 使用可能なライブラリ（ver.10)

* [cheerio](https://www.npmjs.com/package/cheerio)
* [zlibjs/bin/unzip.min](https://www.npmjs.com/package/zlibjs)
* [encoding-japanese](https://www.npmjs.com/package/encoding-japanese)

## 使い方

1. GASのスクリプトエディタを開く
2. [リソース] > [ライブラリ]
3. 「13KJxU8q0ZYmZXyQswU2HrkQX-yXlgnlJ3BVzsKrS69oaE4FcViPRFPZb」を入力して最新バージョンを追加
4. 以下のコードを追加して使用できます

```js
// ライブラリのインポート
let unzipLib = libpack.unzip()
let encodingLib = libpack.encoding()
let cheerio = libpack.cheerio()
```