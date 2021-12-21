const arry = []; // 空の配列を定義
const propDesc = Reflect.getOwnPropertyDescriptor(arry, "length"); // 記述子を取得
console.log(propDesc.enumerable); // 列挙可能性を確認
