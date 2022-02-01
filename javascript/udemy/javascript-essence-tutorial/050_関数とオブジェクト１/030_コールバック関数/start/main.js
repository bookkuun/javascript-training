function hello(name) {
  console.log("hello " + name);
}

function bye(name) {
  console.log("bye " + name);
}

function fn(callback) {
  callback("Tom");
}

fn(hello);
fn(bye);

fn(function (name) {
  console.log("hello " + name);
});

setTimeout(hello, 2000);
