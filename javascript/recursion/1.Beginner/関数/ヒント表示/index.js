// Jacob は息子の学校の宿題を手伝ってあげています。答えを教えてしまっては勉強の意味がないので、答えの最後の 4 文字だけを教えてあげることにしました。文字列 string を受け取り、最後の 4 文字以外を「Hint is:」で置き換える、lastFourHint という関数を作成してください。（「Hint is:◯◯◯◯」という表示で書いてください。）また、文字列が 6 文字未満の場合は、「There is no Hint」と返してください。

function lastFourHint(stringInput) {
  if (stringInput.length < 6) {
    return "There is no Hint";
  } else {
    let hint = stringInput.slice(-4);
    return "Hint is:" + hint;
  }
}

console.log(lastFourHint("text"));
console.log(lastFourHint("Ocean"));
console.log(lastFourHint("the ocean is blue"));
console.log(lastFourHint("abcdef"));
console.log(lastFourHint("integer"));
console.log(lastFourHint("1-545-452-5123"));
