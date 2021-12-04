function delay(fn, message, ms) {
  setTimeout(function () {
    fn(message);
  }, ms);
}

// 問題１
// delay(console.log, "こんにちは", 1000);

// 問題２
// delay(alert, "さようなら", 2000);

// 問題３（コールバック地獄）
delay(
  function (message1) {
    console.log(message1);
    delay(
      function (message2) {
        console.log(message2);
      },
      "さらに１秒が経ちました。",
      1000
    );
  },
  "1秒経ちました。",
  1000
);
