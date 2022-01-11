// Paul は自身のサービスのベータテストユーザーを、メールアドレス登録によって受け付けようと思いました。その際、ユーザーのメールアドレスが有効なものなのかをチェックするプログラムが必要になります。あるメールアドレス email を受け取るので、それが正しいものであれば true を、そうでなければ false を返す isValidEmail という関数を作成してください。ここでの正しいアドレスというのは以下の 4 つの条件を満たすものを指します。

// 「@」から始まらないこと
// スペースがないこと
// 「@」を 1 つのみ含んでいること
// 「@」の後に「.」があること

function isValidEmail(email) {
  // @の後のインデックス
  let atIndex = email.indexOf("@");

  // @の後のアドレス
  let domain = email.substring(atIndex + 1, email.length);

  if (
    atIndex !== 0 &&
    email.indexOf(" ") === -1 &&
    domain.indexOf("@") === -1 &&
    domain.indexOf(".") !== -1
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidEmail("ccc@aaa.com"));
console.log(isValidEmail("c@cc@aaa.com"));
console.log(isValidEmail("cc c@aaa.com"));
console.log(isValidEmail("cc.c@aaacom"));
console.log(isValidEmail("cc.c@aaa.com"));
console.log(isValidEmail("@aaa.com"));
