const hello = () => {
  console.log("こんにちは。");
};

hello();

const double = (num) => {
  return num * 2;
};

console.log(double(10));

setTimeout(
  (name) => {
    console.log("こんにちは、" + name);
  },
  3000,
  "独習太郎"
);
