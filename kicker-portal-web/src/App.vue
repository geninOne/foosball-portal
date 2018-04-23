<template>
  <div id="app">
    <kp-header></kp-header>
    <img src="./assets/logo.png">
    <router-view/>
    <kp-nav></kp-nav>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
