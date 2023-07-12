## 疑問点

- スタブと`spyOn`は別物なの？
- `jest.spyOn(対象のオブジェクト, 対象の関数名)`
  - 対象のオブジェクト？
    - オブジェクトって何を指してる？
    - `Fetchers`のことよね？
  - 第 2 引数、関数なのに`""`で囲むの違和感だな〜
- `getGreet()`突然出てきた
  - これは`getGreet()`関数を呼び出して、`getGreet()`関数が`spyOn`で仮で作った`getMyProfile`の API を叩いているということ？
- `mock***ValueOnce`のオブジェクトは API が返す値なのね〜？
