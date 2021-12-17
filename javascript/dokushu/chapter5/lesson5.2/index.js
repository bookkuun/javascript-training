let val = "";

// if文を使った場合
if (!val) {
  val = "Hello";
}
console.log(val);

// 論理和を使った場合
val = val || "Hello";
console.log(val);

//---------------

let value = null;

// if文を使った場合
if (value === undefined || value === null) {
  value = "Hello";
}
console.log(value);

// Null合体演算子を使った場合
value = value ?? "Hello";
console.log(value);
