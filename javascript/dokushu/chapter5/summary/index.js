// [1] for文
for (let i = 5; i < 10; i++) {
  console.log(i);
}

// [2] if else
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// ［3］ for...in 文と列挙可能性
// ① 列挙可能
// ② プロパティ記述子（またはディスクリプタ）
// ③ enumerable

// [4] for of

const capitals = {
  日本: "東京",
  アメリカ: "ワシントン",
  イギリス: "ロンドン",
};

for (const [country, capital] of Object.entries(capitals)) {
  console.log(`${country}の首都は${capital}です。`);
}

//[5]例外処理
// > tryブロックの処理を開始します。
// > catchブロックの処理を開始します。
// > catchした値：例外を投げました。
// > catchブロックの処理を終了します。
// > finallyブロックの処理を実行します。
// > try/catch/finally文の後続のコードを実行します。
