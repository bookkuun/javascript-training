// promiseは以前(2015年より前)に存在した

promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise.then(() => {
  console.log("処理が完了");
});

promise.catch(() => {
  console.log("処理が失敗");
});
