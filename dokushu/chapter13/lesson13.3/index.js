new Promise((resolve, reject) => {
  setTimeout(() => {
    const date = new Date(); //現在の日時の取得
    const second = date.getSeconds(); //秒数の取得

    if (second % 2) {
      reject(second);
    } else {
      resolve(second);
    }
  }, 1000);
})
  .then((second) => {
    console.log(`${second}は偶数のため、成功とします。`);
  })
  .catch((second) => {
    console.log(`${second}は奇数ため、エラーとします。`);
  })
  .finally(() => {
    console.log("処理を終了します。");
  });
