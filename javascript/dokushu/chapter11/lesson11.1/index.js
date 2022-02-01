let chuka = ["八宝菜", "餃子", "回鍋肉", "青椒肉絲"];

// ① 解答　配列の末尾に"天津飯"を追加
chuka.push("天津飯");
console.log(chuka);
//  ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "天津飯"]

// ② 解答　配列の先頭に"チャーハン"を追加
chuka.unshift("チャーハン");
console.log(chuka);
//  ["チャーハン", "八宝菜", "餃子", "回鍋肉", "青椒肉絲", "天津飯"]

// ③ 解答　配列の先頭の要素を削除
chuka.shift();
console.log(chuka);
//  ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "天津飯"]

// ④ 解答　配列の末尾の要素を削除
chuka.pop();
console.log(chuka);
//  ["八宝菜", "餃子", "回鍋肉", "青椒肉絲"]

// ⑤ 解答　配列の添字が2の要素を削除
chuka.splice(2, 1);
console.log(chuka);
//  ["八宝菜", "餃子", "青椒肉絲"]

// ⑥ 解答　配列の"餃子"のインデックスを確認
console.log(chuka.indexOf("餃子"));
console.log(chuka);
//  1

// ⑦ 解答　配列[ "杏仁豆腐", "ごま豆腐" ]を後ろに結合
chuka = chuka.concat(["杏仁豆腐", "ごま豆腐"]);
console.log(chuka);
//  ["八宝菜", "餃子", "青椒肉絲", "杏仁豆腐", "ごま豆腐"]

// ⑧ 解答　添字の1~3（1, 2, 3）の要素を複製
let newChuka = chuka.slice(1, 4);
console.log(newChuka);
//  newChuka: ["餃子", "青椒肉絲", "杏仁豆腐"]

// ⑨ 解答　⑧で取得した配列の並びを逆に
newChuka.reverse();
console.log(newChuka);
//  ["杏仁豆腐", "青椒肉絲", "餃子"]

// ⑩ 解答　⑧で取得した配列に"八宝菜"が含まれるかを確認
console.log(newChuka.includes("八宝菜"));
//  false
