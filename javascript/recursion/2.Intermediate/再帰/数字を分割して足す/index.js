// Juan は小学 1 年生の息子に足し算を教える方法として、桁数を分解して足し合わせるという方法を思いつきました。自然数 digits が与えられるので、桁数を分解して足し合わせる、splitAndAdd という関数を再帰を使って作成してください。例えば、98 は、9 + 8 = 17 となり、9728 は、9 + 7 + 2 + 8 = 26 となります。

function splitAndAdd(digits) {
  // 値が10以下になった時がベースケース
  if (digits < 10) return digits;
  // 10で割った時の余りが末尾の値となります。10で割った値にfloor関数を使うことで、末尾の桁を排除した数値を得られます
  return (digits % 10) + splitAndAdd(Math.floor(digits / 10));
}

console.log(splitAndAdd(19));
console.log(splitAndAdd(898));
console.log(splitAndAdd(23387));
console.log(splitAndAdd(1066));
console.log(splitAndAdd(546125));
