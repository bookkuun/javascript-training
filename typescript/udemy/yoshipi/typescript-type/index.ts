// 基本的に型推論使用する

// 型
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -12;
let string = 'hello';

//オブジェクト
const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21,
};

//配列
const fruits: string[] = ['Apple', 'Banana', 'Grape'];

//タプル型(pushでは入れることができる)
const book: [string, number, boolean] = ['business', 1500, false];
