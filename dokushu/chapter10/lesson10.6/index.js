const fruits = {
  banana: "うまい",
  apple: "普通",
  orange: "微妙",
  other: { grape: "うまい" },
};

console.log(fruits);
console.log(JSON.stringify(fruits, ["banana", "apple"]));

function replacer(key, value) {
  if (
    typeof value === "string" && // valueが文字列型
    value !== "うまい" // valueが"うまい"以外の場合
  ) {
    return; // JSON文字列に含まれない
  }
  return value; // JSON文字列に含まれる
}
console.log(JSON.stringify(fruits, replacer));
