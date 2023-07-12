## 疑問点

- 4-3 のやつは返り値が固定で、これは動的なのね〜
- `jest.mock("../fetchers");`
  - 結局これが必要な意味、腹落ちしてない
- `mockGetMyArticles`関数を呼び出すことで、`getMyArticles`関数にデータを設定する
  - `getMyArticleLinksByCategory`でその`getMyArticles`を呼び出す
  - 処理した値が`data`に入って`toBeNull()`だねってこと？
- やっやこっし〜〜〜〜〜！！！
