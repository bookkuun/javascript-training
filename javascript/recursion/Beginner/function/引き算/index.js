// 今日の最高気温は x 度でした。最低気温は x 度から y 度下がる予報です。最低気温が何度になるかを返す関数 getLowestTemperature を定義してください。

function getLowestTemperature(x, y) {
  console.log(x - y);
  return x - y;
}

getLowestTemperature(3, 2);
getLowestTemperature(2, 10);
getLowestTemperature(18, 5);
getLowestTemperature(8, 14);
getLowestTemperature(20, 5);
