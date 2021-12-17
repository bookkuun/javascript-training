const app = Vue.createApp({
  data: () => ({
    message: "data",
    count: 99,
    user: {
      lastName: "tanaka",
      firstName: "taro",
      prefecture: "tokyo",
    },
    colors: ["Red", "Green"],
  }),
});

app.mount("#app");
