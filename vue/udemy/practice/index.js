const app = Vue.createApp({
  data: () => ({
    message: "kyoko",
  }),
  methods: {
    clickHandler: function (event) {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

app.mount("#app");
