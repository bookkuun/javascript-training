function hello(personName) {
  if (typeof personName !== "string") {
    console.log("引数に文字列を渡してください。");
    return; // 関数の処理を終了
  }
  console.log(`こんにちは、${personName}`);
}

hello("Taro");
hello(1);
