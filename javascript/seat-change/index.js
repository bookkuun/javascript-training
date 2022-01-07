const a = [
  "山崎",
  "児玉",
  "神山",
  "鈴木",
  "田中",
  "高橋",
  "園田",
  "井上",
  "山岸",
  "香田",
];

let column = 4; //改行する列数を決める
let count = 1; //ループ内の席数のスタート値

const n = a.length; //配列の長さ

//繰り返し（人数分回ってもらいましょう）
for (let i = 0; i < n; i++) {
  //乱数：ｎ番目の人を取り出す
  const r = Math.floor(Math.random() * a.length);
  //splice → 変数vに取得した名前を代入
  const v = a.splice(r, 1);

  //column変数の席数で改行する
  if (count % column == 0) {
    $("#seki").append("|" + v + "<br>");
  } else {
    $("#seki").append("|" + v);
  }
  count++;
}
