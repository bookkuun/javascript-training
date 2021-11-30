class StdClass {
  constructor(arg) {
    this.arg = arg;
  }

  static printFn = console.log;

  static print(arg) {
    StdClass.printFn(arg);
  }

  print() {
    this.constructor.print(this.arg);
  }
}

const std = new StdClass("こんにちは");
std.print();
