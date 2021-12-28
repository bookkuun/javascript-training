const helloComponent = {
  template: "<p>HEllo!</p>",
};

const app = Vue.createApp({
  data: () => ({}),

  components: {
    "hello-component": helloComponent,
  },
});

app.mount("#app");
