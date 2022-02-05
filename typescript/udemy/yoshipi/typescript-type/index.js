// 基本的に型推論使用する
// 型
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -12;
var string = 'hello';
//オブジェクト
var person = {
    name: 'Jack',
    age: 21
};
//配列
var fruits = ['Apple', 'Banana', 'Grape'];
//タプル型(pushでは入れることができる)
var book = ['business', 1500, false];
//列挙型 enum 指定のものだけ
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
