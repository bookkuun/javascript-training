const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue.js",
  }),
});

app.component("hello-component", {
  template: "<p>Hello!</p>",
});

app.mount("#app");
