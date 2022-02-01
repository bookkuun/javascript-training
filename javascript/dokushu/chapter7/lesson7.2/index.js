//1.aはグローバルスコープ ◯
var a;

//2.bはスクリプトスコープ ◯
let b;

//3.fn1はグローバルスコープ  ◯
function fn1() {
  //4.cはfn1の関数スコープ
  var c;
  //5.dはfn1の関数スコープ
  let d;

  if (true) {
    //6.eはfn1の関数スコープ
    var e;
    //7.fはブロックスコープ
    let f;

    //8.fn1の関数スコープ
    function fn2() {}
  }
}

//9.スクリプトスコープ
const fn = function () {};
