function noArgumentFunc() {
  console.log("引数がない関数です。");
}

noArgumentFunc();

function multiply(num1, num2) {
  console.log(num1 * num2);
}

multiply(2, 3);
multiply(15, 2, 10);

function twoArgumentFunc(arg1, arg2) {
  console.log("arg1:", arg1);
  console.log("arg2:", arg2);
}

twoArgumentFunc();
twoArgumentFunc(10);
twoArgumentFunc(10, 20);
