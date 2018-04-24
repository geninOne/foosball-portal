<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <md-button to="/dashboard" class="md-raised md-accent">Statistics</md-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Kicker Portal',
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
</style>
