const obj1 = {
  num: 3,
};

const obj2 = {
  num: 3,
};

let num = 3;

function fn(object1Arg, object2Arg, numberAge) {
  object1Arg = { num: 5 };
  object2Arg.num = 5;
  numberAge = 5;
}

fn(obj1, obj2, num);

console.log(obj1.num);
console.log(obj2.num);
console.log(num);

// ① console.logの出力は3です。
// 解説 関数fnの引数object1Argには、{ num: 3 }が格納されているメモリ空間のアドレスが渡され
// ますが、関数fn内の処理でobject1Argは別のオブジェクト{ num: 5 }で上書きされています。その
// ため、関数外の変数obj1の{ num: 3 }に影響を及ぼすことはできません。
// ② console.logの出力は5です。
// 解説 関数fnの引数object2Argには、{ num: 3 }が格納されているメモリ空間のアドレスが渡され
// ます。そして、関数fn内の処理では、object2Arg.num = 5;により、オブジェクトの中身が変更され
// ています。この変更を行った時点では、obj2とobject2Argは同じオブジェクトを参照していることに
// なるため、関数内の変更が関数外（obj2）にも影響します。
// ③ console.logの出力は3です。
// 解説 関数fnの引数numberArgには、数値の3（正確には3が格納されているメモリ空間のアドレス）
// が渡されます。これが関数fn内の処理でnumberArgは5（5が格納されているメモリ空間のアドレス）
// で上書きされています。
