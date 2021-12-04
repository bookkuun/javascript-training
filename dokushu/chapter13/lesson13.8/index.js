async function myFetchFn() {
  //ファイルを取得
  // const res = await fetch("dairy.json");
  const res = await fetch("daily.json");
  //JSONファイルの中身の文字列オブジェクトをオブジェクトに変換
  const jsonObj = await res.json();
  console.log(jsonObj.word);
}

myFetchFn();
