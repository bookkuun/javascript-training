try {
  let b = 10 + a; // 宣言していない変数を使用しているため、ReferenceErrorが発生！
  console.log(b);
  // 例外識別子には任意の名前を付けることができる
} catch (e) {
  console.error(e); // エラーをコンソールに出力
} finally {
  console.log("後続の処理");
}
