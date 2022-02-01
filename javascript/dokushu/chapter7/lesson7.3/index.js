let rand;

function chance() {
  let result;
  rand = Math.random();

  if (rand < 0.5) {
    result = "成功";
  } else {
    result = "失敗";
  }

  return result;
}

console.log(chance());
