// 文字列 string を受け取り、文字数の半分を文字列の真ん中から返す、middleSubstring という関数を定義してください。（文字数が 2 以下の場合は、最初の文字を返します。）

function middleSubstring(stringInput) {
  // 文字列の長さ
  let len = stringInput.length;

  // 切り取られるサイズ
  let middle = Math.floor(len / 2);

  // 切り取りを始める前方の位置
  let front = Math.ceil(middle / 2);

  // 文字列の長さが2以下のときは、最初の文字を返す。
  if (len <= 2) return stringInput[0];

  // 前方から前方+middle分だけ切り取り
  return stringInput.substring(front, front + middle);
}
console.log(middleSubstring("A")); // A
console.log(middleSubstring("AB")); // A
console.log(middleSubstring("ABC")); // B
console.log(middleSubstring("ABCD")); // BC
console.log(middleSubstring("ABCDE")); // BC
console.log(middleSubstring("ABCDEF")); // CDE
console.log(middleSubstring("ABCDEFG")); // CDE
console.log(middleSubstring("ABCDEFGH")); // CDEF
console.log(middleSubstring("ABCDEFGHI")); // CDEF
console.log(middleSubstring("ABCDEFGHIJ")); // DEFGH
console.log(middleSubstring("ABCDEFGHIJK")); // DEFGH
console.log(middleSubstring("ABCDEFGHIJKL")); // DEFGHI
console.log(middleSubstring("fundamental")); // damen
