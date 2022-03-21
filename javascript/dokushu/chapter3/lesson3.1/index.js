// ［1］ letは値の再代入が可能ですが、constは値の再代入を行うことはできません。

// ［2］
// エラーは2 行目（fruit = "banana";）で発生します。constを使っているので、値の再代入ができないため、エラーが発生します。

const fruit = 'apple';
fruit = 'banana';
console.log(fruit);
