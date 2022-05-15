<template>
  <div>
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/users" class="link">Users</router-link>
    </nav>
    <router-view></router-view>
    <!-- <LikeHeader>
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber" />
    <LikeNumber :total-number="number" @my-click="incrementNumber" />
   -->
  </div>
</template>

//
<script>
// import LikeHeader from './components/LikeHeader.vue';

// export default {
//   data() {
//     return {
//       number: 20,
//     };
//   },
//   components: { LikeHeader },
//   methods: {
//     incrementNumber() {
//       this.number += 1;
//     },
//   },
// };
//
</script>

<style scoped>
.link {
  margin-right: 10px;
}
</style>
