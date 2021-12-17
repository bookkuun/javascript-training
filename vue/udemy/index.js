const app = Vue.createApp({
  data: () => ({
    now: "-",
  }),
  methods: {
    onClick: function () {
      this.now = new Date().toLocaleString();
    },
  },
});

app.mount("#app");
