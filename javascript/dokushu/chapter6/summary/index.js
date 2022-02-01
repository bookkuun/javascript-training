// [1] 引数
// ① 仮引数
// ② 実引数
// ③ undefined
// ④ こんにちは、undefined

// [2] 戻り値
// ① undefined
// 解説 return文が関数内に存在しない場合は、関数の最終行まで処理が完了した時点でundefinedが実
// 行元（関数の呼び出し元）に返されます。
// ② 20
// ③ undefined

// [3]デフォルト引数
// ① undefined
// ② undefined
// ③ 10
// ④ "100"

// [4]コールバック関数
const hello = function hello(name) {
  console.log(`こんにちは、${name}`);
};

setTimeout((name) => console.log(`こんにちは、${name}`), 2000, "taro");

function add(val1, val2) {
  return val1 + val2;
}

function minus(val1, val2) {
  return val1 - val2;
}

function calcAndDisp(callback1, callback2, num1, num2) {
  callback2(callback1(num1, num2));
}

calcAndDisp(add, console.log, 3, 2);
calcAndDisp(minus, alert, 3, 2);

// [5] アロー関数
const fn1 = (num1, num2) => num1 + num2;
const fn2 = (num) => num * 2;
const fn3 = () => console.log("Hello World");
const fn4 = (name) => {
  console.log("Hello World");
  console.log(`Hello ${name}!`);
};

const fn5 = () => ({
  name: "独習太郎",
});
