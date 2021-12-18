const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue.js",
  }),
  computed: {
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
});

app.mount("#app");
