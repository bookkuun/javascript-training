for (let i = 1; i < 5; i++) {
  // 1からループを始める
  if (i === 3) {
    // 3回目
    continue;
  }
  console.log(`${i}回目のループです。`);
}
