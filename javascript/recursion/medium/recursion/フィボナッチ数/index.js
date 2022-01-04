// 再帰（フィボナッチ数列, nの値・・・n=2,3）
function fibonacciNumberTail(n) {
  // helper関数のおかげで、この関数は1つのパラメータしか受け取りません。
  // 0と1からスタートします
  return fibonacciNumberTailHelper(0, 1, n);
}

function fibonacciNumberTailHelper(fn1, fn2, n) {
  if (n < 1) {
    return fn1;
  }
  return fibonacciNumberTailHelper(fn2, fn1 + fn2, n - 1);
}

console.log(fibonacciNumberTail(2));

// 反復
function fibonacciNumberForLoopIteration(n) {
  let fn1 = 0;
  let fn2 = 1;

  for (let i = 0; i < n; i++) {
    //前のfn1を保存し、f1とf2をアップデートします。
    let prevFn1 = fn1;
    fn1 = fn2;
    fn2 = prevFn1 + fn2;
  }

  return fn1;
}

console.log(fibonacciNumberForLoopIteration(3));
