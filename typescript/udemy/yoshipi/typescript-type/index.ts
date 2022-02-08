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

//列挙型 enum 指定のものだけ

enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  // SHORT, 0
  // TALL, 1
}

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT,
};

// coffee.size = 'SHORT'

// any型
let anything: any = true;
anything = 'hello';
anything = ['hello0', 3];
anything = 14;

// union型
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello'];

// リテラル型
const apple = 'apple';
let closeSize: 'small' | 'medium' | 'large' = 'large';

// 関数
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 3);

// アロー関数
const doubleNumber = (num: number): number => num * 2;

// コールバック関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num);
  console.log(doubleNum);
}

doubleAndHandle(21, (doubleNum) => {
  return doubleNum * 2;
});