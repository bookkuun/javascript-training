// greetingに値を設定しないと例外に飛ぶ
// greetingに "こんにちは" などの文字列を設定すると例外は発生しない
let greeting;
try {
  if (typeof greeting !== "string") {
    throw new Error("不正なデータ型です。");
  }
  console.log(`${greeting}、いい天気ですね。`);
} catch (e) {
  console.error(e);
}
