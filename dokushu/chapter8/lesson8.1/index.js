window.name = "花子";

function hello() {
  console.log("こんにちは、" + this.name);
}

const taro = {
  name: "太郎",
  hello: hello,
};

hello();
taro.hello();
