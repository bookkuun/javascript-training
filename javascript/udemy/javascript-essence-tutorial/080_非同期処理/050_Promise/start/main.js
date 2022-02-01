new Promise(function (resolve, reject) {
  console.log("Promise");
  setTimeout(function () {
    resolve("hello");
  }, 1000);
})
  .then(function (data) {
    console.log("then " + data);
    return data;
  })
  .then(function (data) {
    console.log("then " + data);
    // throw new Error();
  })
  .catch(function (data) {
    console.log("catch " + data);
  })
  .finally(function () {
    console.log("finally");
  });

console.log("global end");
