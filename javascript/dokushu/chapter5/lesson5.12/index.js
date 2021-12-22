const obj = {
  prop1: 10,
  prop2: "文字列",
  prop3: 20,
  skip: 20,
  prop4: true,
  prop5: 23,
  prop6: 47,
};
let sum = 0; // sumに値を加算していく
const entries = Object.entries(obj);
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  if (typeof value === "number" && key !== "skip") {
    sum += value;
  }
}
console.log(sum);
