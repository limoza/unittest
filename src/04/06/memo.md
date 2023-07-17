## 疑問点

- `Once`ついてるのとついてないの何がちゃうん？
  - 後で調べる
- 送信する値を動的に作成できるよう、ファクトリー関数を...
  - 初めて聞いた、ファクトリー関数
- `mockPostMyArticles`てテストのためだけの関数てことよな
  - コード上にある関数をテストするだけじゃなくて
  - こういうのも書かなあかんのか
  - でも、これってコード上の関数でテストできんのけ？
- バリデーションに成功した場合、成功レスポンスが買える
  1. input 定数にファクトリー関数の返り値を入れる
  - この場合、オブジェクトが入る
  2. mock 定数に`mockPostMyArticles`関数の返り値が入る
  - この場合、try 内の返り値が入る
  - つまり、バリデーション通って
  - postMyArticles に行く
    - `postMyArticleData` + `input`の値がかえる
  3. data 定数で postMyArticles が実行される
  - さっき ↑ で実行しておいた値が返ってくる
  4. data は input を含んでるよね？
  - Yes
  5. mock が実行されてるよね？
  - Yes
- `expect.assertions(2)`
  - いきなり出てきて何？
- バリデーションに失敗した場合、reject される
  1. input 定数に上書きされた　ファクトリー関数が入る
  - この場合は title も body も空白だからバリデーションで弾かれる
    - なお`ValidationError("1文字以上入力してください")`が返る想定
  2. mock 定数に`mockPostMyArticles`関数の返り値が入る
  - この場合、try に入り、`checkLength`でエラーが返ってきている
  3. postMyArticles 実行し、err を catch
  - さっき ↑ で実行した結果のエラーが返ってくる
  4. その err に{message: null、undefined 以外だったら OK}がきてるよね？
  - Yes
  5. mock 関数実行されたよね
  - Yes
- データの取得に失敗した場合、reject される
  1. input 定数にファクトリー関数はいる
  2. mockPostMyArticles よぶ
  - この時 status がアウトである
  - つまり最初の if に入る
  - 返り値は`httpError`
  3. postMyArticle
  - ↑ のエラー返ってくる
  - `internal server error`だよね
- これ実践で書けるかな〜
- 相当心配
- 書いてあるから読めるけど、
- 一からかくのこわ〜...
