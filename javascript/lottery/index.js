const array = ["A", "B", "C", "D", "E"];
const len = array.length;
console.log(array);

const r = Math.floor(Math.random() * array.length);
const v = array.splice(r, 1); //配列からr番目を取り出す

console.log(v);
