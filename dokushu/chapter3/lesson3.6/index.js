let obj = {
  prop: true,
  subObj: {
    val: 100,
  },
  greeting: function () {
    console.log("こんにちは。");
  },
};

// ドット記法
console.log(obj.prop);
console.log(obj.subObj.val);
obj.greeting();

// ブラケット記法
console.log(obj["prop"]);
console.log(obj["subObj"]["val"]);
obj["greeting"]();

obj.subObj.val2 = 1000;

console.log(obj);
