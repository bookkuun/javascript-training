let hello = function () {
  console.log("こんにちは。");
};

console.log(hello.toString());
setTimeout(hello, 3000);
setTimeout(function () {
  console.log("こんにちは。");
}, 3000);
