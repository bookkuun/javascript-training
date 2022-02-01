class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  login() {
    this.check();
    console.log(`ログイン[ ${this.username} ] / [ ${this.password} ]`);
  }

  check() {
    console.log(`ログイン情報をチェックします。`);
  }

  checkRole() {
    if (this.role === "admin") {
      console.log(`${this.role}権限です`);
    } else {
      console.log("一般ユーザーです。");
    }
  }
}

const taro = new User("独習 太郎", "taro-pwd");
taro.login();
taro.checkRole();
