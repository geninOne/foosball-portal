<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  data() {
    return {
      msg: 'Leaderboard',
    };
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
