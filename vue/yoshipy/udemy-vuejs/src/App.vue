<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>
      {{ number }}
    </h2>
    <LikeNumber :totalNumber="number" @my-click="number = $event"></LikeNumber>
    <LikeNumber :totalNumber="number" @my-click="number = $event"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';

export default {
  data() {
    return { number: 14 };
  },
  components: {
    LikeHeader,
  },
};
</script>
