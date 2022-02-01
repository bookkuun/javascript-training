function a(name) {
  return "hello " + name;
}

const b = function (name) {
  return "hello " + name;
};

// アロー関数

const c = (name) => {
  return "hello " + name;
};

console.log(b("Tom"));
console.log(c("John"));
