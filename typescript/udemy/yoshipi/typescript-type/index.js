"use strict";
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
    age: 21,
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
    // SHORT, 0
    // TALL, 1
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
};
// coffee.size = 'SHORT'
// any型
var anything = true;
anything = 'hello';
anything = ['hello0', 3];
anything = 14;
// union型
var unionType = 10;
var unionTypes = [21, 'hello'];
// リテラル型
var apple = 'apple';
var closeSize = 'large';
// 関数
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// アロー関数
var doubleNumber = function (num) { return num * 2; };
// コールバック関数
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum * 2;
});
