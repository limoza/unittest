## 疑問点

- `within`の使い方について
- んんん？
- ここで render されているのは`ArticleList`でしょ？
- で、screen は`ArticleList`が render されたものでしょ？
- 他に ul なんて存在し得なくないか...？
- `within`で`ArticleList`が指定されてて
- それの`.getAllByRole`を見てるのはわかる
- でも、そもそもの`screen.getByRole("list")`は一つじゃん？
- なんで`within`使う必要がある？
- でかい時に使うはわかる
- けどそういう時にどう使うのかは掴めていない

- 要素がない場合は`get`じゃなくて`query`を使う
- これはただの覚えゲー
