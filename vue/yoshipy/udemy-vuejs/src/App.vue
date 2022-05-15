<template>
  <div>
    <LikeHeader />
    <p>{{ number }}</p>
    <LikeNumber :total-number="number" @my-click="incrementNumber" />
    <LikeNumber :total-number="number" @my-click="incrementNumber" />
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';

export default {
  data() {
    return {
      number: 20,
    };
  },
  components: { LikeHeader },
  methods: {
    incrementNumber() {
      this.number += 1;
    },
  },
};
</script>
