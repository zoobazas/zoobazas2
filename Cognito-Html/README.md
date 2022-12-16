# sampleFrontend4Cognito
### Get Cognito ID Token Sample

Please modify only the first 3 lines of script.js below and open index.html in your browser.

```js
const region = 'us-east-2';
const userpoolid = 'us-east-2_xxxxxxxxxxxx';
const clientid = 'xxxxxxxxxxx';

・・・
```

### Use token

参考：https://developer.mozilla.org/ja/docs/Learn/Forms/Sending_forms_through_JavaScript

```Javascript
例を見てみましょう。
<button>Click Me!</button>
JavaScript はこうです。
```

```Javascript
const btn = document.querySelector('button');

function sendData(data) {
  console.log('Sending data');

  const XHR = new XMLHttpRequest();

  const urlEncodedDataPairs = [];

  // data オブジェクトを、URL エンコードしたキーと値のペアの配列に変換します
  for (const [name, value] of Object.entries(data)) {
    urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
  }

 // キーと値のペアをひとつの文字列に連結して、ウェブブラウザーのフォーム送信方式に
 // 合うよう、エンコードされた空白をプラス記号に置き換えます。
  const urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  // データが正常に送信された場合に行うことを定義します
  XHR.addEventListener('load', (event) => {
    alert('Yeah! Data sent and response loaded.');
  });

  // エラーが発生した場合に行うことを定義します
  XHR.addEventListener('error', (event) => {
    alert('Oops! Something went wrong.');
  });

  // リクエストをセットアップします
  XHR.open('POST', 'https://example.com/cors.php');

  // フォームデータの POST リクエストを扱うために必要な HTTP ヘッダを追加します
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // 最後に、データを送信します
  XHR.send(urlEncodedData);
}

btn.addEventListener('click', () => {
  sendData({ test: 'ok' });
})
```
