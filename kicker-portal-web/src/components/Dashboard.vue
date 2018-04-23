<template>
  <div class="hello">
    <add-match></add-match>
  </div>
</template>

<script>
import AddMatch from './AddMatch';

export default {
  name: 'Statistics',
  components: {
    AddMatch,
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
