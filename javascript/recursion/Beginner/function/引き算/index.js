// 今日の最高気温は x 度でした。最低気温は x 度から y 度下がる予報です。最低気温が何度になるかを返す関数 getLowestTemperature を定義してください。

function getLowestTemperature(x, y) {
  return x - y;
}

console.log(getLowestTemperature(3, 2));
console.log(getLowestTemperature(2, 10));
console.log(getLowestTemperature(18, 5));
console.log(getLowestTemperature(8, 14));
console.log(getLowestTemperature(20, 5));
