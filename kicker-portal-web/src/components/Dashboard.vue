<template>
  <div class="hello">
    <h1>{{userEmail}}, you are a real boss</h1>
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
  data() {
    return {
      get userEmail() {
        return localStorage.getItem('userEmail');
      },
    };
  },
};
</script>

<style scoped>
h1, h2 {
  color: white;
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
